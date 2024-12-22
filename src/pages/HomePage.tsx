import {
  Box,
  Flex,
  Grid,
  GridItem,
  useBreakpointValue,
} from "@chakra-ui/react";
import GameGrid from "../components/GameGrid";
import GameHeading from "../components/GameHeading";
import GenreList from "../components/GenreList";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";

const HomePage = () => {
  const isAboveLg = useBreakpointValue({ base: false, lg: true });

  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "250px 1fr",
      }}
    >
      {isAboveLg && (
        <GridItem area="aside" paddingX={5}>
          <GenreList />
        </GridItem>
      )}
      <GridItem area="main">
        <Box marginTop={5} marginLeft={5}>
          <GameHeading />
          <Flex gap={5} marginBottom={5}>
            <PlatformSelector />
            <SortSelector></SortSelector>
          </Flex>
        </Box>
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
