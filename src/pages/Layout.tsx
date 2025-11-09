import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
import { Box, Stack } from "@chakra-ui/react";

const Layout = () => {
  return (
    <Stack spacing={0}>
      <Stack
        position="fixed"
        top={0}
        left={0}
        right={0}
        zIndex={1000}
        bg={"bg.subtle"}
      >
        <NavBar />
      </Stack>
      {/* Add top padding to account for fixed navbar height */}
      <Box paddingTop="70px">
        <Outlet />
      </Box>
    </Stack>
  );
};

export default Layout;
