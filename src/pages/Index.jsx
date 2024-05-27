import { Container, Box, Heading, Text, VStack, HStack, Button, IconButton, Image } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8} align="stretch">
        {/* Header Section */}
        <Box bg="teal.500" color="white" py={10} textAlign="center">
          <Heading as="h1" size="2xl">
            Welcome to Barangay XYZ
          </Heading>
          <Text fontSize="xl">A community of unity and progress</Text>
        </Box>

        {/* About Section */}
        <Box py={10}>
          <Heading as="h2" size="xl" mb={4}>
            About Us
          </Heading>
          <Text fontSize="lg">Barangay XYZ is a vibrant community located in the heart of the Philippines. Our barangay is known for its rich culture, friendly residents, and commitment to progress. We strive to provide the best services and facilities to our residents and visitors.</Text>
        </Box>

        {/* Image Section */}
        <Box py={10}>
          <Image src="https://images.unsplash.com/photo-1528783848474-fe2140874d1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwaGlsaXBwaW5lcyUyMGNvbW11bml0eXxlbnwwfHx8fDE3MTY3OTE3MTB8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Community Image" borderRadius="md" />
        </Box>

        {/* Services Section */}
        <Box py={10}>
          <Heading as="h2" size="xl" mb={4}>
            Our Services
          </Heading>
          <VStack spacing={4} align="stretch">
            <Box>
              <Heading as="h3" size="lg">
                Health Services
              </Heading>
              <Text>We provide comprehensive health services to ensure the well-being of our residents.</Text>
            </Box>
            <Box>
              <Heading as="h3" size="lg">
                Educational Programs
              </Heading>
              <Text>Our educational programs are designed to empower the youth and promote lifelong learning.</Text>
            </Box>
            <Box>
              <Heading as="h3" size="lg">
                Community Events
              </Heading>
              <Text>Join our community events to foster unity and celebrate our culture.</Text>
            </Box>
          </VStack>
        </Box>

        {/* Contact Section */}
        <Box py={10}>
          <Heading as="h2" size="xl" mb={4}>
            Contact Us
          </Heading>
          <Text fontSize="lg">For inquiries, please reach out to us through our social media channels:</Text>
          <HStack spacing={4} mt={4}>
            <IconButton aria-label="Facebook" icon={<FaFacebook />} size="lg" />
            <IconButton aria-label="Twitter" icon={<FaTwitter />} size="lg" />
            <IconButton aria-label="Instagram" icon={<FaInstagram />} size="lg" />
          </HStack>
        </Box>

        {/* Footer Section */}
        <Box bg="teal.500" color="white" py={4} textAlign="center">
          <Text>&copy; 2023 Barangay XYZ. All rights reserved.</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
