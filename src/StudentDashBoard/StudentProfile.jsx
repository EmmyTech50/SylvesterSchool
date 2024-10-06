import { Badge, Box, Button, Grid, Heading, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { variables } from "../App";
import EventTable from "../components/EventTable";



function StudentProfile() {
  return (
    <Box p={6} maxW="1200px" overflowY="auto" maxH="100vh" bg={variables.primaryColor2}>
      {/* Header */}
      <Heading fontSize="2xl" mb={4} mx={10}>
        Eze Chukwu Emeka
      </Heading>

      {/* Main Content */}
      <Box
        bg="white"
        p={6}
        mx={10}
        mb={50}
        rounded="md"
        boxShadow="lg"
        borderWidth="1px"
      >
  
        {/* Student Photo and Info Grid */}
        <Stack direction="row" position="relative" top="-24px" left="-25px" h="25px">
            <Badge color="#fff" bgColor="#001D3D" borderTopLeftRadius="5px" fontSize="lg" fontWeight="bold">
            Student Details
            </Badge>
        </Stack>
        <Grid templateColumns="1fr 2fr" gap={8} >
        
          <Box>
          
            <Text fontWeight="bold" mb={2}> Photo * </Text>
        
            <Image
              src="https://via.placeholder.com/150"
              alt="Student Profile"
              borderRadius="md"
              boxSize="150px"
              mb={4}
            />
        
            <Box mt={4} bg={variables.primaryColor2} h='45vh' rounded='md'>
              <Text fontWeight="bold" mb={2} mx='5px' mt='5px'>
                My Subjects *
              </Text>
              <SimpleGrid columns={2} spacing={2} mt={4} >
                <Button bgColor="#001D3D" color='#fff' mx='5px' mt='5px' >Physics</Button>
                <Button bgColor="#001D3D" color='#fff' mx='5px' mt='5px' >Chemistry</Button>
                <Button bgColor="#001D3D" color='#fff' mx='5px' mt='5px' >Agric Science</Button>
                <Button bgColor="#001D3D" color='#fff' mx='5px' mt='5px' >Mathematics</Button>
                <Button bgColor="#001D3D" color='#fff' mx='5px' mt='5px' >Computer</Button>
                <Button bgColor="#001D3D" color='#fff' mx='5px' mt='5px' >English</Button>
                <Button bgColor="#001D3D" color='#fff' mx='5px' mt='5px' >Data.P</Button>
              </SimpleGrid>
            </Box>
          </Box>

          
          <Box>
            <SimpleGrid columns={2} spacing={4}>
              <Box>
                <Text fontWeight="bold" fontSize='md'
                 mb={5}>First Name *</Text>
                <Text mb={4}>Eze ChukwuEmeka David</Text>
              </Box>

              <Box>
                <Text fontWeight="bold" fontSize='md'
                 mb={5}>Last Name *</Text>
                <Text mb={4}>Eze ChukwuEmeka David</Text>
              </Box>

              <Box>
                <Text fontWeight="bold" fontSize='md'
                 mb={5}>Date Of Birth *</Text>
                <Text mb={4}>Eze ChukwuEmeka David</Text>
              </Box>

              <Box>
                <Text fontWeight="bold" fontSize='md'
                 mb={5}>Sex *</Text>
                <Text mb={4}>Eze ChukwuEmeka David</Text>
              </Box>

              <Box>
                <Text fontWeight="bold" fontSize='md'
                 mb={5}>Password *</Text>
                <Text mb={4}>Eze ChukwuEmeka David</Text>
              </Box>

              <Box>
                <Text fontWeight="bold" fontSize='md'
                 mb={5}>Parent Name *</Text>
                <Text mb={4}>Eze ChukwuEmeka David</Text>
              </Box>

              <Box>
                <Text fontWeight="bold" fontSize='md'
                 mb={5}>Address</Text>
                <Text mb={4}>Eze ChukwuEmeka David</Text>
              </Box>

              <Box>
                <Text fontWeight="bold" fontSize='md'
                 mb={5}>State of origin *</Text>
                <Text mb={4}>Eze ChukwuEmeka David</Text>
              </Box>

              <Box>
                <Text fontWeight="bold" fontSize='md'
                 mb={5}>Local Government Area</Text>
                <Text mb={4}>Eze ChukwuEmeka David</Text>
              </Box>

              <Box>
                <Text fontWeight="bold" fontSize='md'
                 mb={5}>House</Text>
                <Text mb={4}>Eze ChukwuEmeka David</Text>
              </Box>
            </SimpleGrid>
          </Box>
          
        </Grid>

        
      </Box>


      
      <Box
      bg="white"
      p={6}
      rounded="md"
      boxShadow="lg"
      borderWidth="1px"
      mx={10}
      >
        <Stack direction="row" position="relative" top="-24px" left="-25px" h="25px">
            <Badge color="#fff" bgColor="#001D3D" borderTopLeftRadius="5px" fontSize="lg" fontWeight="bold">
            Registry Details
            </Badge>
        </Stack>
        <SimpleGrid columns={2} spacing={4}>
          <Box>
            <Text fontWeight="bold" fontSize='md' mb={5}>Class *</Text>
            <Text mb={4}>SS1A</Text>
          </Box>

          <Box>
            <Text fontWeight="bold" fontSize='md' mb={5}>Year *</Text>
            <Text mb={4}>2024</Text>
          </Box>

          <Box>
            <Text fontWeight="bold" fontSize='md' mb={5}>ID *</Text>
            <Text mb={4}>00001</Text>
          </Box>
        </SimpleGrid>
      </Box>

      <Box
      bg="white"
      p={6}
      rounded="md"
      boxShadow="lg"
      borderWidth="1px"
      w='50%'
      mt='50px'
      mx={10}
      >
        <EventTable/>
      </Box>
    </Box>
  );
}

export default StudentProfile;

          
         

          
