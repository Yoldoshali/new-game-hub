import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import Searchinput from "./Searchinput";
import Switcher from "./Switcher";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <HStack>
      <Link to="/">
        <Image src={logo} boxSize="60px" objectFit="cover" />
      </Link>
      <Searchinput></Searchinput>
      <Switcher></Switcher>
    </HStack>
  );
};

export default NavBar;
