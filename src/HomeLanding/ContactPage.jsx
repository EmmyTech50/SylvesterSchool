import React from 'react';
import {
  Box,
  Flex,
  Text,
  Stack,
  VStack,
  HStack,
  Input,
  Textarea,
  Button,
  FormControl,
  FormLabel,
  Icon,
  Divider,
} from '@chakra-ui/react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import NavBar from '../CommonPart/NavBar';
import Footer from '../CommonPart/Footer';
import { variables } from '../App';

const ContactPage = () => {
  return (
    <Box>

        {/* NavBar Component*/}
        <NavBar />

        {/* Contact Us Section */}
        <Box py={16} px={8} textAlign="center">
            <Text fontSize="3xl" fontWeight="bold">Contact Us</Text>
            <Text mt={4}>Any question or remarks? Just write us a message!</Text>
        </Box>

        {/* Main Container for Contact Information and Form */}
        <Flex justify="center" align="center" py={8} px={4}>
            <Box
            w="900px"
            p={8}
            bg="white"
            rounded="md"
            boxShadow="lg"
            display="flex"
            flexDirection={{ base: 'column', md: 'row' }}
            alignItems="start"
            >
                {/* Contact Information Box */}
                <Box w={{ base: '100%', md: '40%' }} p={8} bg={variables.primaryColor1} color="white" rounded="md" mr={{ base: 0, md: 8 }} mb={{ base: 8, md: 0 }}>
                    <Text fontSize="xl" mb={4} fontWeight="bold">Contact Information</Text>
                    <Stack spacing={4}>
                    <HStack>
                        <Icon as={FaPhone} boxSize={5} />
                        <Text>+234 700865896</Text>
                    </HStack>
                    <HStack>
                        <Icon as={FaEnvelope} boxSize={5} />
                        <Text>sylvester@gmail.com</Text>
                    </HStack>
                    <HStack>
                        <Icon as={FaMapMarkerAlt} boxSize={5} />
                        <Text>192 Dartmouth Street Boston, Massachusetts 02116 Nigeria, Abuja</Text>
                    </HStack>
                    </Stack>
                    <Divider my={6} />
                    <HStack spacing={4}>
                    <Icon as={FaFacebook} boxSize={5} />
                    <Icon as={FaInstagram} boxSize={5} />
                    <Icon as={FaTwitter} boxSize={5} />
                    </HStack>
                </Box>

                {/* Form Box */}
                <Box 
                w={{ base: '100%', md: '60%' }} 
                p={8} 
                display='flex'
                rounded="md"
                >
                    <VStack spacing={4}>
                        <FormControl>
                            <FormLabel>First Name</FormLabel>
                            <Input placeholder="First Name" />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Last Name</FormLabel>
                            <Input placeholder="Last Name" />
                        </FormControl>
                    </VStack>

                    <VStack spacing={4}>   
                        <FormControl>
                            <FormLabel>Email</FormLabel>
                            <Input type="email" placeholder="Email" />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Phone Number</FormLabel>
                            <Input type="tel" placeholder="Phone Number" />
                        </FormControl>
                    </VStack>  

                    
                    
                </Box>
                
            </Box>
        </Flex>
        {/* <Flex justify="center" mt={8}>
        <VStack w={{ base: '100%', md: '900px' }} p={8} bg="gray.50" rounded="md" spacing={4}>
          <FormControl>
            <FormLabel>Message</FormLabel>
            <Textarea placeholder="Write your message..." />
          </FormControl>
          <Button colorScheme="blackAlpha" bg="black" size="lg">
            Send Message
          </Button>
        </VStack>
      </Flex> */}

      {/* Footer Section */}
      <Footer /> 
  
    </Box>
  );
};

export default ContactPage;
