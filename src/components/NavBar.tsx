import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import Searchinput from "./Searchinput";
import Switcher from "./Switcher";

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="60px" />
      <Searchinput></Searchinput>
      <Switcher></Switcher>
    </HStack>
  );
};

export default NavBar;
