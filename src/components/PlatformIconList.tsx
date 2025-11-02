import type { Platform } from "@/hooks/usePlatforms";
import { HStack, Icon } from "@chakra-ui/react";
import type { IconType } from "react-icons";
import { BsGlobe } from "react-icons/bs";
import { SiNintendo } from "react-icons/si"; // ✅ Daha iyi Nintendo icon
import {
  FaAndroid,
  FaApple,
  FaLinux,
  FaPlaystation,
  FaWindows,
  FaXbox,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";

interface PlatformIconListProps {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: PlatformIconListProps) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };

  return (
    <HStack marginY={1} gap={1}>
      {platforms.map((platform) => {
        const IconComponent = iconMap[platform.slug];

        if (!IconComponent) return null;

        return (
          <Icon
            key={platform.id}
            as={IconComponent}
            color="gray.500"
            boxSize={4}
          />
        );
      })}
    </HStack>
  );
};

export default PlatformIconList;
