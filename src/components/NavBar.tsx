import logo from "@/assets/logo.webp";
import { HStack, Image } from "@chakra-ui/react";
import SearchInput from "./SearchInput";
import { ColorModeButton } from "./ui/color-mode";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack justifyContent="space-between" padding="2" gap={4}>
      <Image src={logo} alt="Game Hub Logo" boxSize="60px" />
      <SearchInput onSearch={onSearch} />
      <ColorModeButton />
    </HStack>
  );
};

export default NavBar;
