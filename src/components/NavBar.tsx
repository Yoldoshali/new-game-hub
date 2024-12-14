import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import Searchinput from "./Searchinput";
import Switcher from "./Switcher";

interface Props {
  onSearchn: (searchText: string) => void;
}

const NavBar = ({ onSearchn }: Props) => {
  return (
    <HStack>
      <Image src={logo} boxSize="60px" />
      <Searchinput onSearch={onSearchn}></Searchinput>
      <Switcher></Switcher>
    </HStack>
  );
};

export default NavBar;
