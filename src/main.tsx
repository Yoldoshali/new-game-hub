import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider, defaultSystem, Theme } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "./index.css";
import { ColorModeProvider } from "./components/ui/color-mode.tsx";
import { RouterProvider } from "react-router-dom";
import router from "./routes.tsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider value={defaultSystem}>
      <ColorModeProvider forcedTheme="dark">
        <Theme appearance="dark">
          <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
            <ReactQueryDevtools />
          </QueryClientProvider>
        </Theme>
      </ColorModeProvider>
    </ChakraProvider>
  </StrictMode>
);
