import logo from "@/assets/logo.webp";
import { HStack, Image } from "@chakra-ui/react";
import SearchInput from "./SearchInput";
import { ColorModeButton } from "./ui/color-mode";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="2" gap={4}>
      <Link to="/">
        <Image src={logo} alt="Game Hub Logo" boxSize="60px" />
      </Link>
      <SearchInput />
      <ColorModeButton />
    </HStack>
  );
};

export default NavBar;
