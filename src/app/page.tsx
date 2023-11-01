import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import Note from "./components/Note";

export default function Page() {
  return (
    <ChakraProvider>
      <Header />
      <Note />
    </ChakraProvider>
  );
}
