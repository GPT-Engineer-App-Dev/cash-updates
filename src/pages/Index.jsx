import { Box, Container, Flex, Heading, Text, VStack, Image } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Heading as="h1" size="2xl" mb={6} textAlign="center">
        Financial Times
      </Heading>
      <Flex direction={{ base: "column", md: "row" }} gap={6}>
        <Box flex="3">
          <VStack spacing={4} align="stretch">
            <Box p={4} shadow="md" borderWidth="1px">
              <Heading as="h2" size="lg" mb={2}>
                Headline 1
              </Heading>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
              </Text>
            </Box>
            <Box p={4} shadow="md" borderWidth="1px">
              <Heading as="h2" size="lg" mb={2}>
                Headline 2
              </Heading>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
              </Text>
            </Box>
            <Box p={4} shadow="md" borderWidth="1px">
              <Heading as="h2" size="lg" mb={2}>
                Headline 3
              </Heading>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
              </Text>
            </Box>
          </VStack>
        </Box>
        <Box flex="1" p={4} shadow="md" borderWidth="1px">
          <Heading as="h3" size="md" mb={4}>
            Sidebar
          </Heading>
          <VStack spacing={4} align="stretch">
            <Box>
              <Image src="https://via.placeholder.com/150" alt="Ad 1" />
              <Text mt={2}>Advertisement 1</Text>
            </Box>
            <Box>
              <Image src="https://via.placeholder.com/150" alt="Ad 2" />
              <Text mt={2}>Advertisement 2</Text>
            </Box>
          </VStack>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;