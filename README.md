Orange Color:842D19
Ash Color 2:DEDACE
Blacl Color 3:0C0D0D

 {/* Contact Form Section */}
        <Box p={8} bg={variables.primaryColor2} minH="100vh" display="flex" justifyContent="center" alignItems="center">
            <Box
            bg="white"
            p={8}
            boxShadow="lg"
            borderRadius="md"
            maxW={{ base: '100%', md: '80%', lg: '60%' }}
            w="100%"
            >
                <Stack direction='row' position='relative' top='-32px' left='-32px' h='25px'>
                    <Badge  color='#ffff' bgColor='blue' borderTopLeftRadius='5px'>
                        Student Details
                    </Badge>
                </Stack>   
                <Heading size="lg" mb={6} color="#7F342E" textAlign="center">
                Fill in your Details
                </Heading>
                <Grid
                templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }}
                gap={6}
                >
                    
                    {/* Form Fields for Personal Information */}
                    <GridItem colSpan={{ base: 1, md: 1 }}>
                        <FormControl id="firstName" mb={4}>
                        <FormLabel>First Name</FormLabel>
                        <Input type="text" placeholder="John" />
                        </FormControl>
                        <FormControl id="lastName" mb={4}>
                        <FormLabel>Last Name</FormLabel>
                        <Input type="text" placeholder="Doe" />
                        </FormControl>
                        <FormControl id="email" mb={4}>
                        <FormLabel>Email</FormLabel>
                        <Input type="email" placeholder="john.doe@example.com" />
                        </FormControl>
                        <FormControl id="phone" mb={4}>
                        <FormLabel>Phone</FormLabel>
                        <Input type="tel" placeholder="+1 234 567 890" />
                        </FormControl>
                    </GridItem>

                    {/* Form Fields for Address Information */}
                    <GridItem colSpan={{ base: 1, md: 1 }}>
                        <FormControl id="address" mb={4}>
                        <FormLabel>Address</FormLabel>
                        <Input type="text" placeholder="123 Main St" />
                        </FormControl>
                        <FormControl id="city" mb={4}>
                        <FormLabel>City</FormLabel>
                        <Input type="text" placeholder="New York" />
                        </FormControl>
                        <FormControl id="state" mb={4}>
                        <FormLabel>State</FormLabel>
                        <Input type="text" placeholder="NY" />
                        </FormControl>
                        
                    </GridItem>
                    
                </Grid>

                
            </Box>
        </Box>
        <Box p={8} bg={variables.primaryColor2} minH="100vh" display="flex" justifyContent="center" alignItems="center">
            <Box
            bg="white"
            p={8}
            boxShadow="lg"
            borderRadius="md"
            maxW={{ base: '100%', md: '80%', lg: '60%' }}
            w="100%"
            >
                <Stack direction='row' position='relative' top='-32px' left='-32px' h='25px'>
                    <Badge  color='#ffff' bgColor='blue' borderTopLeftRadius='5px'>
                        Parent Details
                    </Badge>
                </Stack>
                <Heading size="lg" mb={6} color="#7F342E" textAlign="center">
                Fill in your Details
                </Heading>
                <Grid
                templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }}
                gap={6}
                >
                    
                    {/* Form Fields for Personal Information */}
                    <GridItem colSpan={{ base: 1, md: 1 }}>
                        <FormControl id="firstName" mb={4}>
                        <FormLabel>First Name</FormLabel>
                        <Input type="text" placeholder="John" />
                        </FormControl>
                        <FormControl id="lastName" mb={4}>
                        <FormLabel>Last Name</FormLabel>
                        <Input type="text" placeholder="Doe" />
                        </FormControl>
                       
                    </GridItem>

                    {/* Form Fields for Address Information */}
                    <GridItem colSpan={{ base: 1, md: 1 }}>
                        <FormControl id="address" mb={4}>
                            <FormLabel>Address</FormLabel>
                            <Input type="text" placeholder="123 Main St" />
                        </FormControl>
                        <FormControl id="city" mb={4}>
                            <FormLabel>City</FormLabel>
                            <Input type="text" placeholder="New York" />
                        </FormControl>
                       
                    </GridItem>
                    
                </Grid>

                {/* Submit Button */}
                <Box display="flex" justifyContent="center" mt={6}>
                    <Button colorScheme="blue" size="lg" px={8}>
                        Proceed
                    </Button>
                </Box>
            </Box>
        </Box>

<!-- forget password -->
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