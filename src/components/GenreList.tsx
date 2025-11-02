import getCroppedImageUrl from "@/services/image-urls";
import {
  Heading,
  HStack,
  Image,
  ListItem,
  ListRoot,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGenres, { type Genre } from "../hooks/useGenres";

interface GenreListProps {
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: GenreListProps) => {
  const { data, isLoading, error } = useGenres();

  if (error) return;

  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <ListRoot variant={"plain"}>
        {data?.results.map((genre) => (
          <ListItem
            key={genre.id}
            paddingY={1}
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
                objectFit={"cover"}
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
    </>
  );
};

export default GenreList;
