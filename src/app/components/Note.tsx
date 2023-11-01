"use client";
import { Box, Button, Container, Stack, Textarea } from "@chakra-ui/react";
import React from "react";

export default function Page() {
  let [value, setValue] = React.useState("");
  let handleInputClick = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
    console.log(event.target.value);
  };

  let saveNote = () => {
    localStorage.setItem("note", value);
    console.log("saved");
    setValue("");
    console.log(value);
  };

  return (
    <Container maxW="2xl" centerContent height="xl">
      <Box
        padding="4"
        bg="papayawhip"
        color="purple"
        maxW="md"
        width="100%"
        height="100%"
      >
        <Stack direction="column" spacing={4}>
          <Textarea
            id="note"
            height="md"
            placeholder="Click Clack... Click Clack... Just Type Away =]"
            size="md"
            onChange={handleInputClick}
          />
          <Button onClick={saveNote} colorScheme="purple" variant="solid">
            Submit
          </Button>
        </Stack>
      </Box>
    </Container>
  );
}
