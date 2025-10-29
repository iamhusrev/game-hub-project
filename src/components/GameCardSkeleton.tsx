import { CardBody, CardRoot, Skeleton } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <CardRoot width={"300px"} borderRadius="10px" overflow="hidden">
      <Skeleton height="200px" />
      <CardBody>
        <Skeleton />
      </CardBody>
    </CardRoot>
  );
};

export default GameCardSkeleton;
