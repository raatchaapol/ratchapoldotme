import { Container, Flex, Heading } from "@chakra-ui/react";
import type { FunctionComponent } from "react";

const Home: FunctionComponent = () => {
  return (
    <Flex align="center" justify="center" h="100vh" w="100vw">
      <Container centerContent fluid>
        <Heading as="h1" size="2xl" mb={4}>
          Hey, I'm Pete. See you soon! 👋
        </Heading>
      </Container>
    </Flex>
  );
};

export default Home;
