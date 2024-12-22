import { Heading, HStack, Stack } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { BsGlobe } from "react-icons/bs";
import {
  FaAndroid,
  FaApple,
  FaLinux,
  FaPlaystation,
  FaWindows,
  FaXbox,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { Platform } from "../entities/Platform";

interface Props {
  platforms: Platform[];
}

const PlatformDisplay = ({ platforms = [] }: Props) => {
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
    <Stack marginY={1}>
      {platforms.map((platform) => {
        const IconComponent = iconMap[platform.slug];
        if (!IconComponent) {
          console.warn(`No icon found for platform: ${platform.slug}`);
          return null; // Skip rendering if no icon found
        }
        return (
          <>
            <HStack>
              <IconComponent key={platform.id} color="gray.500" />
              <Heading>{platform.slug}</Heading>
            </HStack>
          </>
        );
      })}
    </Stack>
  );
};

export default PlatformDisplay;
