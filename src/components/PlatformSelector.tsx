import usePlatform from "@/hooks/usePlatform";
import usePlatforms, { type Platform } from "@/hooks/usePlatforms";
import {
  Button,
  MenuContent,
  MenuItem,
  MenuPositioner,
  MenuRoot,
  MenuTrigger,
  Portal,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatformId?: number;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatformId }: Props) => {
  const { data, error } = usePlatforms();

  const selectedPlatform = usePlatform(selectedPlatformId);

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
            {data?.results.map((platform) => (
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
