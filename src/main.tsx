import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider, defaultSystem, Theme } from "@chakra-ui/react";
import App from "./App.tsx";
import "./index.css";
import { ColorModeProvider } from "./components/ui/color-mode.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider value={defaultSystem}>
      <ColorModeProvider forcedTheme="dark">
        <Theme appearance="dark">
          <App />
        </Theme>
      </ColorModeProvider>
    </ChakraProvider>
  </StrictMode>
);
