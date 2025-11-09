import { Box, Flex, Grid, GridItem } from "@chakra-ui/react";
import GameGrid from "../components/game-components/GameGrid";
import GameHeading from "../components/game-components/GameHeading";
import GenreList from "../components/GenreList";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";

const HomePage = () => (
  <Grid
    templateAreas={{
      base: `"main"`,
      md: `"aside main"`,
      xl: `"aside main"`,
      lg: `"aside main"`,
    }}
    templateColumns={{
      base: "1fr",
      md: "200px 1fr",
      xl: "200px 1fr",
      lg: "200px 1fr",
    }}
  >
    <GridItem hideBelow="md" paddingX={5}>
      <GenreList />
    </GridItem>
    <GridItem area="main">
      <Box paddingLeft={2}>
        <GameHeading />
        <Flex marginBottom={5}>
          <Box marginRight={5}>
            <PlatformSelector />
          </Box>
          <SortSelector />
        </Flex>
      </Box>
      <GameGrid />
    </GridItem>
  </Grid>
);

export default HomePage;
