import { useState } from "react";
import { Switch } from "./ui/switch";

const Switcher = () => {
  const [mode, setMode] = useState("dark");
  return (
    <Switch
      marginRight={5}
      onCheckedChange={() => {
        mode === "light" ? setMode("dark") : setMode("light");
      }}
    >
      {mode === "light" ? "Dark" : "Light"}
    </Switch>
  );
};

export default Switcher;
