import { Box, Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import GameAttributes from "../components/GameAttributes";
import useGame from "../hooks/useGame";
import ExpandableText from "./ExpandableText";
import GameTrailer from "../components/GameTrailer";
import GameScreenShots from "../components/GameScreenShots";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error || !game) return <Text>Error loading game details</Text>;

  return (
    <Box margin={5}>
      <SimpleGrid columns={{ base: 1, md: 2 }} gap={4}>
        <Box>
          <Heading>{game.name}</Heading>
          <ExpandableText>{game.description_raw}</ExpandableText>
          <GameAttributes game={game} />
        </Box>
        <Box>
          <GameTrailer gameId={game.id} />
          <br />
          <GameScreenShots gameId={game.id} />
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default GameDetailPage;
