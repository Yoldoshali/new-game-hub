import { Box, Heading, Text } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <NavBar />
      <Box marginLeft={4} marginTop={4}>
        <Heading size="5xl" marginBottom={2}>
          Oops
        </Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? "This page does not exist"
            : "Unexpexted Error Occured"}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
