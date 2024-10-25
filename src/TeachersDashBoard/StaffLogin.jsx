import {
    Box,
    VStack,
    Heading,
    Text,
    Input,
    Button,
    HStack,
    Image,
    FormControl,
    FormLabel,
    InputGroup,
    InputRightElement,
  } from "@chakra-ui/react";
import { useState } from "react";
import { variables } from "../App";
import { Link } from "react-router-dom";
import LoginPc from "../assets/StaffLogin.png";
  
  function StaffLogin() {
    const [showPassword, setShowPassword] = useState(false);
  
    const handlePasswordVisibility = () => setShowPassword(!showPassword);
  
    return (
        <Box minH="100vh" bg={variables.primaryColor2} display="flex" justifyContent="center" alignItems="center">
            <Box
            bg="white"
            display="flex"
            borderRadius="lg"
            boxShadow="md"
            maxW="800px"
            overflow="hidden"
            >
            {/* Left Side: Login Form */}
            <VStack
                spacing={6}
                align="start"
                p={10}
                w="50%"
                bg="white"
            >
                <Heading color="#001D3D" size="lg">
                    Welcome Back <span role="img" aria-label="wave">👋</span>
                </Heading>
                <Text color="#001D3D" fontWeight="bold">Teachers</Text>
                <Text color="#001D3D" fontSize='sm' fontWeight="bold" mb={4}>
                Log in to access the admin dashboard, manage school data, and oversee operations. Welcome back to Sylvester Standard High School!
                </Text>
    
                {/* Form */}
                <FormControl>
                <FormLabel color="#001D3D" fontSize='md' fontWeight="bold">Email</FormLabel>
                <Input type="email" placeholder="Enter your email" />
                </FormControl>
    
                <FormControl>
                <FormLabel color="#001D3D" fontSize='md' fontWeight="bold">Password</FormLabel>
                <InputGroup>
                    <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="At least 8 characters"
                    />
                    <InputRightElement width="4.5rem">
                    <Button size="sm" onClick={handlePasswordVisibility}>
                        {showPassword ? "Hide" : "Show"}
                    </Button>
                    </InputRightElement>
                </InputGroup>
                </FormControl>
    
                {/* Options and Submit Button */}
                <HStack justify="space-between" w="full">
                <Link to="/staff/result">Forgot Password?</Link>
                </HStack>
    
                <Button w="full" bgColor="#001D3D" color='#ffff' size="lg">
                Sign in
                </Button>
            </VStack>
    
            {/* Right Side: Image */}
            <Box w="50%" display={{ base: "none", md: "block" }}>
                <Image
                src={LoginPc}
                alt="Teacher on PC"
                objectFit="cover"
                h="full"
                w="full"
                />
            </Box>
            </Box>
        </Box>
    );
  }
  
  export default StaffLogin;
  