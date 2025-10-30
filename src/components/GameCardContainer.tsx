import { Box } from "@chakra-ui/react";
import React from "react";
interface GameCardContainerProps {
  children: React.ReactNode;
}
const GameCardContainer = ({ children }: GameCardContainerProps) => {
  return <Box width={"300px"} borderRadius="10px" overflow="hidden">{children}</Box>;
};

export default GameCardContainer;
