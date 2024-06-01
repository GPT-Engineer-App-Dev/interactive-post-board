import { useState } from "react";
import { Box, Container, VStack, Text, Input, Textarea, Button, HStack, Heading, Flex } from "@chakra-ui/react";

const Index = () => {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handlePostSubmit = () => {
    const newPost = {
      title,
      content,
      timestamp: new Date().toLocaleString(),
    };
    setPosts([newPost, ...posts]);
    setTitle("");
    setContent("");
  };

  return (
    <Container maxW="container.lg" p={4}>
      <Flex as="nav" bg="blue.500" color="white" p={4} mb={4} justifyContent="center">
        <Heading size="lg">Public Post Board</Heading>
      </Flex>
      <VStack spacing={4} align="stretch">
        <Box as="form" onSubmit={(e) => { e.preventDefault(); handlePostSubmit(); }} p={4} borderWidth={1} borderRadius="md" boxShadow="md">
          <VStack spacing={4}>
            <Input
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              isRequired
            />
            <Textarea
              placeholder="Content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              isRequired
            />
            <Button type="submit" colorScheme="blue" width="full">Post</Button>
          </VStack>
        </Box>
        {posts.map((post, index) => (
          <Box key={index} p={4} borderWidth={1} borderRadius="md" boxShadow="md">
            <Heading size="md">{post.title}</Heading>
            <Text mt={2}>{post.content}</Text>
            <Text mt={2} fontSize="sm" color="gray.500">{post.timestamp}</Text>
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

export default Index;