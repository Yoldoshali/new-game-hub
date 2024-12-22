import useScreenshots from "../hooks/useScreenshots";
import { Image, SimpleGrid, Spinner, Text } from "@chakra-ui/react";

interface Props {
  gameId: number;
}

const GameScreenShots = ({ gameId }: Props) => {
  const { data, isLoading, error } = useScreenshots(gameId);

  if (isLoading) return <Spinner />;
  if (error) return <Text color="red.500">Error loading screenshots</Text>;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} gap={4}>
      {data?.results.map((file) => (
        <Image key={file.id} src={file.image} alt={`Screenshot ${file.id}`} />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenShots;
