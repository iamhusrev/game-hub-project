import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "@/assets/logo.webp";
import { ColorModeButton } from "./ui/color-mode";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="1">
      <HStack>
        <Image src={logo} alt="Game Hub Logo" boxSize="60px" />
        <Text>Game Hub</Text>
      </HStack>
      <HStack>
        <ColorModeButton />
      </HStack>
    </HStack>
  );
};

export default NavBar;
