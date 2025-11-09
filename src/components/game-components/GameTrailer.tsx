import useTrailers from "@/hooks/useTrailers";
import { Box } from "@chakra-ui/react";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, error, isLoading } = useTrailers(gameId);

  if (isLoading) return null;

  if (error) throw error;

  if (!data?.results || data.results.length === 0) return null;

  const selectedTrailer = data.results[0];

  return (
    <Box>
      <video
        key={selectedTrailer.id}
        src={selectedTrailer.data["max"]}
        poster={selectedTrailer.preview}
        controls
        style={{ width: "100%", borderRadius: "8px" }}
      />
    </Box>
  );
};

export default GameTrailer;
