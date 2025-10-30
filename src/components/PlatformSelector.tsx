import type { Platform } from "@/hooks/useGames";
import { Button, MenuPositioner, Portal } from "@chakra-ui/react";
import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "@/hooks/usePlatforms";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const { data, error } = usePlatforms();

  if (error) return null;

  return (
    <MenuRoot positioning={{ strategy: "fixed" }}>
      <MenuTrigger asChild>
        <Button variant="outline" size="sm">
          {selectedPlatform?.name || "Platforms"}
          <BsChevronDown />
        </Button>
      </MenuTrigger>
      <Portal>
        <MenuPositioner>
          <MenuContent bg={"bg.emphasized"}>
            {data.map((platform) => (
              <MenuItem
                key={platform.id}
                value={platform.name}
                onClick={() => onSelectPlatform(platform)}
                _hover={{ bg: "bg.panel" }}
              >
                {platform.name}
              </MenuItem>
            ))}
          </MenuContent>
        </MenuPositioner>
      </Portal>
    </MenuRoot>
  );
};

export default PlatformSelector;
