import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  ListRoot,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGenres, { type Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "@/services/image-urls";

interface GenreListProps {
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: GenreListProps) => {
  const { data, isLoading, error } = useGenres();

  if (error) return;

  if (isLoading) return <Spinner />;

  return (
    <ListRoot variant={"plain"}>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Button
              textAlign="left"
              onClick={() => onSelectGenre(genre)}
              variant={"plain"}
              _hover={{
                textDecoration: "underline",
              }}
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </ListRoot>
  );
};

export default GenreList;
