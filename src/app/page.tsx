import {
  Box,
  Button,
  ChakraProvider,
  Container,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";

export default function Page() {
  return (
    <ChakraProvider>
      <Container maxW="2xl" centerContent height="xl">
        <Box padding="4" bg="salmon" color="white" maxW="md">
          <Heading as="h1" size="3xl" noOfLines={1}>
            Hello, Snail!
          </Heading>
          <Text fontSize="xl">hi hi hi</Text>
        </Box>
        <Box
          padding="4"
          bg="papayawhip"
          color="purple"
          maxW="md"
          width="100%"
          height="100%"
        >
          <Text>Type Here</Text>
          <Stack direction="row" spacing={4}>
            <Button
              isLoading
              loadingText="Submitting"
              colorScheme="purple"
              variant="solid"
            >
              Submit
            </Button>
          </Stack>
        </Box>
      </Container>
    </ChakraProvider>
  );
}
