import {
  Box,
  Button,
  Checkmark,
  List,
  SimpleGrid,
  Stack,
} from "@chakra-ui/react";
import "./App.css";

function App() {
  return (
    <>
      <SimpleGrid columns={2} gap="40px">
        <Box background="tomato" height="20" />
        <Box background="tomato" height="20" />
        <Box background="tomato" height="20" />
        <Box background="tomato" height="20" />
      </SimpleGrid>
      <Button>Click me</Button>
      <Button>Click me</Button>

      <Box background="tomato" width="100%" padding="4" color="white">
        This is the Box
      </Box>

      <List.Root>
        <List.Item>Item 1</List.Item>
        <List.Item>Item 2</List.Item>
      </List.Root>
      <Stack>
        <Checkmark />
        <Checkmark checked />
        <Checkmark indeterminate />
        <Checkmark disabled />
        <Checkmark checked disabled />
        <Checkmark indeterminate disabled />
      </Stack>
    </>
  );
}

export default App;
