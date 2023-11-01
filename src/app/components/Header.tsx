import { Box, Heading, Text } from "@chakra-ui/react";

export default function Header() {
  return (
    <Box padding="4" bg="salmon" color="white" maxW="md">
      <Heading as="h1" size="3xl" noOfLines={1}>
        Hello, Snail!
      </Heading>
      <Text fontSize="xl">hi hi hi</Text>
    </Box>
  );
}
