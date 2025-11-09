import logo from "@/assets/logo.webp";
import { HStack, Image } from "@chakra-ui/react";
import SearchInput from "./SearchInput";
import { ColorModeButton } from "./ui/color-mode";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="2" gap={4}>
      <Image src={logo} alt="Game Hub Logo" boxSize="60px" />
      <SearchInput />
      <ColorModeButton />
    </HStack>
  );
};

export default NavBar;
