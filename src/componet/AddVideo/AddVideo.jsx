import React from 'react';
import {
  Box,
  Input,
  Textarea,
  Text,
  Button,
  Flex,
  SimpleGrid,
} from '@chakra-ui/react';

const AddVideo = () => {
  return (
    <Box p={6}>
      <Text fontSize="xl" fontWeight="bold" mb={2}>
        Add new video
      </Text>
      <Text mb={4}>Please fill up the form to add new video</Text>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} mb={4}>
        <Box>
          <Text mb={1}>Title</Text>
          <Input placeholder="Enter title" />
        </Box>
        <Box>
          <Text mb={1}>Author</Text>
          <Input placeholder="Enter author" />
        </Box>
      </SimpleGrid>

      <Box mb={4}>
        <Text mb={1}>Description</Text>
        <Textarea placeholder="Brief description for your video" />
      </Box>

      <Box mb={4}>
        <Text mb={1}>YouTube Video Link</Text>
        <Input placeholder="Enter video link" />
      </Box>

      <Box mb={4}>
        <Text mb={1}>Thumbnail Link</Text>
        <Input placeholder="Enter thumbnail link" />
      </Box>

      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4} mb={6}>
        <Box>
          <Text mb={1}>Date</Text>
          <Input placeholder="May 3, 2022" />
        </Box>
        <Box>
          <Text mb={1}>Duration</Text>
          <Input placeholder="12:10" />
        </Box>
        <Box>
          <Text mb={1}>Views</Text>
          <Input placeholder="200" />
        </Box>
      </SimpleGrid>

      <Flex justify="flex-end">
        <Button colorScheme="purple">Save</Button>
      </Flex>
    </Box>
  );
};

export default AddVideo;
