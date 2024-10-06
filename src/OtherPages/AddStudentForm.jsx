import {
    Box,
    Button,
    Input,
    Text,
    Flex,
    SimpleGrid,
    FormControl,
    FormLabel,
    Select,
    Stack,
    useToast,
  } from '@chakra-ui/react';
  import React, { useState } from 'react';
  
  // Drag-and-drop for photo
  const FileUploader = () => {
    const [file, setFile] = useState(null);
  
    const handleFileChange = (e) => {
      setFile(e.target.files[0]);
    };
  
    return (
      <Box
        border="2px dashed gray"
        borderRadius="md"
        p={4}
        textAlign="center"
        cursor="pointer"
        _hover={{ bg: "gray.100" }}
        position="relative"
      >
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, opacity: 0 }}
        />
        {file ? <Text>{file.name}</Text> : <Text>Drag and drop or click here to select file</Text>}
      </Box>
    );
  };
  
  const AddStudentForm = () => {
    const toast = useToast();
  
    const handleSubmit = () => {
      toast({
        title: 'Student Registered',
        description: 'The student has been successfully registered.',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
    };
  
    return (
      <Box maxW="container.lg" mx="auto" mt={10} p={5} boxShadow="lg" bg="white" borderRadius="md">
        <Text fontSize="2xl" fontWeight="bold" mb={4}>
          Add New Student
        </Text>
  
        {/* Student Details */}
        <Box mb={5}>
          <Text fontSize="lg" fontWeight="bold" mb={2}>
            Student Details
          </Text>
          <SimpleGrid columns={[1, 2]} spacing={4}>
            <FormControl>
              <FormLabel>Photo</FormLabel>
              <FileUploader />
            </FormControl>
  
            <FormControl>
              <FormLabel>First Name</FormLabel>
              <Input placeholder="First Name" />
            </FormControl>
  
            <FormControl>
              <FormLabel>Last Name</FormLabel>
              <Input placeholder="Last Name" />
            </FormControl>
  
            <FormControl>
              <FormLabel>Date of Birth</FormLabel>
              <Input type="date" />
            </FormControl>
  
            <FormControl>
              <FormLabel>Sex</FormLabel>
              <Select placeholder="Select gender">
                <option value="male">Male</option>
                <option value="female">Female</option>
              </Select>
            </FormControl>
  
            <FormControl>
              <FormLabel>Address</FormLabel>
              <Input placeholder="Address" />
            </FormControl>
  
            <FormControl>
              <FormLabel>Parent Name</FormLabel>
              <Input placeholder="Parent Name" />
            </FormControl>
  
            <FormControl>
              <FormLabel>State of Origin</FormLabel>
              <Input placeholder="State of Origin" />
            </FormControl>
  
            <FormControl>
              <FormLabel>Local Government Area</FormLabel>
              <Input placeholder="LGA" />
            </FormControl>
  
            <FormControl>
              <FormLabel>House</FormLabel>
              <Input placeholder="House" />
            </FormControl>
          </SimpleGrid>
  
          <Text fontSize="lg" fontWeight="bold" mt={5} mb={2}>
            Assign Subject
          </Text>
          <Stack direction="row" spacing={4}>
            <Button colorScheme="blue">Mathematics</Button>
            <Button colorScheme="blue">English</Button>
            <Button colorScheme="blue">Physics</Button>
            <Button colorScheme="blue">Chemistry</Button>
          </Stack>
        </Box>
  
        {/* Registry Details */}
        <Box mb={5}>
          <Text fontSize="lg" fontWeight="bold" mb={2}>
            Registry Details
          </Text>
          <SimpleGrid columns={[1, 3]} spacing={4}>
            <FormControl>
              <FormLabel>Class</FormLabel>
              <Input placeholder="Class" />
            </FormControl>
  
            <FormControl>
              <FormLabel>Year</FormLabel>
              <Input placeholder="Year" />
            </FormControl>
  
            <FormControl>
              <FormLabel>ID</FormLabel>
              <Input placeholder="ID" />
            </FormControl>
          </SimpleGrid>
        </Box>
  
        {/* Parent Details */}
        <Box mb={5}>
          <Text fontSize="lg" fontWeight="bold" mb={2}>
            Parent Details
          </Text>
          <SimpleGrid columns={[1, 2]} spacing={4}>
            <FormControl>
              <FormLabel>Parent Name</FormLabel>
              <Input placeholder="Parent Name" />
            </FormControl>
  
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input type="email" placeholder="Parent Email" />
            </FormControl>
  
            <FormControl>
              <FormLabel>Phone Number</FormLabel>
              <Input type="tel" placeholder="Parent Phone Number" />
            </FormControl>
          </SimpleGrid>
        </Box>
  
        {/* Register Button */}
        <Flex justify="flex-end">
          <Button colorScheme="teal" onClick={handleSubmit}>
            Register
          </Button>
        </Flex>
      </Box>
    );
  };
  
  export default AddStudentForm;
  