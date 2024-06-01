import React, { useState } from "react";
import { Box, Button, Container, Flex, FormControl, FormLabel, Heading, Input, Text, Textarea, VStack } from "@chakra-ui/react";

const Index = () => {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
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
      <Box as="form" onSubmit={handleSubmit} mb={8}>
        <VStack spacing={4}>
          <FormControl id="title" isRequired>
            <FormLabel>Title</FormLabel>
            <Input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </FormControl>
          <FormControl id="content" isRequired>
            <FormLabel>Content</FormLabel>
            <Textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </FormControl>
          <Button type="submit" colorScheme="blue" width="full">
            Submit
          </Button>
        </VStack>
      </Box>
      <VStack spacing={4}>
        {posts.map((post, index) => (
          <Box key={index} p={4} borderWidth="1px" borderRadius="md" width="full">
            <Heading size="md">{post.title}</Heading>
            <Text mt={2}>{post.content}</Text>
            <Text mt={2} fontSize="sm" color="gray.500">
              {post.timestamp}
            </Text>
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

export default Index;