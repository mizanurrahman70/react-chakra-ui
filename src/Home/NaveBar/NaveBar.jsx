import { Box, Flex, Icon, Button, Container } from "@chakra-ui/react";
import { FaCube } from "react-icons/fa";
import { Link } from "react-router";
export default function Navbar() {
  return (
   
        <Box bg="gray.50" boxShadow="sm" px={4} py={2}>
      <Flex justify="space-between" align="center">
        <Icon as={FaCube} boxSize={6} color="purple.400" />
        <Link to="/addVideo">
          <Button colorScheme="purple" size="sm">
            + Add Video
          </Button>
        </Link>
      </Flex>
    </Box>
 
  );
}
