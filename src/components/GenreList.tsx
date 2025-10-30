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
        <ListItem
          key={genre.id}
          padding={2}
          borderRadius={8}
          cursor="pointer"
          onClick={() => onSelectGenre(genre)}
          _hover={{
            bg: "bg.emphasized",
          }}
        >
          <HStack gap={3}>
            <Image
              boxSize="32px"
              borderRadius={8}
              flexShrink={0}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Text
              fontSize="md"
              fontWeight="medium"
              _hover={{
                textDecoration: "underline",
              }}
            >
              {genre.name}
            </Text>
          </HStack>
        </ListItem>
      ))}
    </ListRoot>
  );
};

export default GenreList;
