import React from 'react'

function ForgetPassword() {
  return (
   
      <Box minH="100vh" bg={variables.primaryColor2} display="flex" justifyContent="center" alignItems="center">
        <Box
          bg="white"
          display="flex"
          borderRadius="lg"
          boxShadow="md"
          maxW="400px"
          overflow="hidden"
        >
          {/* Left Side: Forgot Password Form */}
          <VStack
            spacing={6}
            align="start"
            p={10}
            w="50%"
            bg="white"
          >
            <Heading color="#001D3D" size="lg">
              Forgot Password <span role="img" aria-label="lock">🔒</span>
            </Heading>
            <Text color="#001D3D" fontWeight="bold">Don't worry!</Text>
            <Text color="#001D3D" fontWeight="sm" mb={4}>
              Enter the email address associated with your account, and we’ll send you instructions to reset your password.
            </Text>
  
            {/* Email Input */}
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input type="email" placeholder="Enter your email" />
            </FormControl>
            
            <FormControl>
              <FormLabel>Role</FormLabel>
              <Select value='Role'>
                <option>Staff</option>
                <option>Student</option>
                <option>Admin</option>
              </Select>
            </FormControl>
  
            {/* Reset Password Button */}
            <Button w="full" bgColor="#001D3D" color='#ffff' size="lg">
              Submit
            </Button>
          </VStack>
  
          {/* Right Side: Image */}
          <Box w="50%" display={{ base: "none", md: "block" }}>
            <Image
              src=""
              alt="Forgot Password"
              objectFit="cover"
              h="full"
              w="full"
            />
          </Box>
        </Box>
      </Box>
  )
}

export default ForgetPassword