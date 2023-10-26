"use client"
import {
  Box,
  Button,
  ChakraProvider,
  Container,
  Heading,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React from "react";

export default function Page() {
  let [value, setValue]= React.useState("")
  let handleInputClick = (event: React.ChangeEvent<HTMLTextAreaElement>) =>{
    setValue(event.target.value)
  }
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
          <Stack direction="column" spacing={4}>
          <Textarea height="md" placeholder="Click Clack... Click Clack... Just Type Away =]" size="md" onChange={handleInputClick}/>
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
