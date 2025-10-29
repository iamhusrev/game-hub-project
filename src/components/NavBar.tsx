import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "@/assets/logo.webp";
import { ColorModeButton } from "./ui/color-mode";

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} alt="Game Hub Logo" boxSize="60px" />
      <Text>Game Hub</Text>
      <ColorModeButton />
    </HStack>
  );
};

export default NavBar;
