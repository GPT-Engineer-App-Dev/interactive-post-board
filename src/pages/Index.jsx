import { useState } from "react";
import { Container, VStack, Box, Text, Input, Textarea, Button, HStack, Heading, Flex } from "@chakra-ui/react";
import { format } from "date-fns";

const Index = () => {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handlePostSubmit = () => {
    if (title && content) {
      const newPost = {
        title,
        content,
        timestamp: new Date(),
      };
      setPosts([newPost, ...posts]);
      setTitle("");
      setContent("");
    }
  };

  return (
    <Container maxW="container.lg" p={4}>
      <Flex as="nav" bg="blue.500" color="white" p={4} mb={4} justifyContent="center">
        <Heading size="lg">Public Post Board</Heading>
      </Flex>
      <VStack spacing={4} align="stretch">
        <Box p={4} borderWidth="1px" borderRadius="lg">
          <Heading size="md" mb={4}>Create a Post</Heading>
          <VStack spacing={3}>
            <Input
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <Textarea
              placeholder="Content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            <Button colorScheme="blue" onClick={handlePostSubmit}>Submit</Button>
          </VStack>
        </Box>
        {posts.map((post, index) => (
          <Box key={index} p={4} borderWidth="1px" borderRadius="lg">
            <Heading size="md">{post.title}</Heading>
            <Text mt={2}>{post.content}</Text>
            <Text mt={2} fontSize="sm" color="gray.500">
              {format(new Date(post.timestamp), "PPpp")}
            </Text>
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

export default Index;