import { Card, CardBody, Skeleton } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card.Root>
      <Skeleton height="200px" width="400px" />
      <CardBody>
        <Skeleton />
      </CardBody>
    </Card.Root>
  );
};

export default GameCardSkeleton;
