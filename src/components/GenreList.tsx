import getCroppedImageUrl from "@/services/image-urls";
import useGameQueryStore from "@/store";
import {
  Heading,
  HStack,
  Image,
  ListItem,
  ListRoot,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { data, isLoading, error } = useGenres();
  const setGenreId = useGameQueryStore((s) => s.setGenreId);
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);

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
            onClick={() => setGenreId(genre.id)}
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
                fontWeight={genre.id === selectedGenreId ? "bold" : "medium"}
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
