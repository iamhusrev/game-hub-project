import useGames from "@/hooks/useGames";
import { SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";

const GameGrid = () => {
  const { games, error } = useGames();

  return (
    <div>
      {error && <p>{error}</p>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} gap={4} padding={2}>
        {games.map((game) => (
          <GameCard game={game} />
        ))}
      </SimpleGrid>
    </div>
  );
};

export default GameGrid;
