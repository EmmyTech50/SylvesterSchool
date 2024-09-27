import React from 'react'
import { Avatar, Box, Button, Flex, Grid, Heading, HStack, IconButton, Input, Menu, MenuButton, MenuItem, MenuList, Select, Text } from '@chakra-ui/react';
import { FaEllipsisV } from 'react-icons/fa';
import { variables } from '../App';




const staff = [
    { name: 'Emeka.D', role: 'Nurse', avatar: '/path-to-image' },
    { name: 'Philip.M', role: 'Buser', avatar: '/path-to-image' },
    { name: 'Mathew.D', role: 'Cleaner', avatar: '/path-to-image' },
    { name: 'Mathew.D', role: 'Cleaner', avatar: '/path-to-image' },
    { name: 'Mathew.D', role: 'Cleaner', avatar: '/path-to-image' },
    { name: 'Mathew.D', role: 'Cleaner', avatar: '/path-to-image' },
    { name: 'Mathew.D', role: 'Cleaner', avatar: '/path-to-image' },
    { name: 'Mathew.D', role: 'Cleaner', avatar: '/path-to-image' },
    { name: 'Mathew.D', role: 'Cleaner', avatar: '/path-to-image' },
    { name: 'Mathew.D', role: 'Cleaner', avatar: '/path-to-image' },
    { name: 'Mathew.D', role: 'Cleaner', avatar: '/path-to-image' },
    { name: 'Mathew.D', role: 'Cleaner', avatar: '/path-to-image' },
    // Add more staff here
  ];
  
function TeachersAndStaff() {
  return (
    <Flex direction="column" align="center" overflowY="auto" maxH="100vh" bg={variables.primaryColor2} p={5}>
      
      {/* Main Content Container */}
      <Box w="full" maxW="1200px" bg={variables.primaryColor2}>
        
        <Box mt={6} mx={6}>
          {/* First Row - Non-Teaching Staff Title and Right Controls */}
          <Flex alignItems="center" justify="space-between">
            {/* Title */}
            <Heading fontSize="lg" fontWeight="bold" color="#001D3D">Non-Teaching Staff</Heading>

            {/* Right Section: Dropdown and Add Button */}
            <Flex alignItems="center" gap="4">
              {/* Dropdown */}
              <Select placeholder="Non-Teaching Staff" outlineColor="#001D3D" width="160px" h="5vh" fontSize="md" fontWeight="bold" borderRadius="md">
                <option value="teachers">Teachers</option>
                <option value="cleaners">Cleaners</option>
                <option value="nurses">Nurses</option>
              </Select>

              {/* Add Button */}
              <Button bgColor="#001D3D" color="#fff" fontSize="sm" fontWeight="bold" px="6" width="160px" h="6vh">
                + Add
              </Button>
            </Flex>
          </Flex>

          {/* Second Row - Search Bar */}
          <Box mt="4">
            <Input
              h="7vh"
              placeholder="Search"
              fontSize="md"
              fontWeight="bold"
              width="250px"
              bg="white"
              borderRadius="md"
            />
          </Box>
        </Box>

        <Box mx={6} mt={7}>
          {/* Staff Cards Grid */}
          <Grid templateColumns="repeat(auto-fit, minmax(250px, 1fr))" gap={6}>
            {staff.map((person, index) => (
              <Box
                key={index}
                bg="#ffff"
                borderRadius="5px"
                p="4"
                display="flex"
                justifyContent="space-between"
              >
                <Box>
                  <Avatar name={person.name} src={person.avatar} mb="2" />
                  <Text fontSize="md" fontWeight="bold">{person.name}</Text>
                  <Text fontSize="sm" fontWeight="bold">{person.role}</Text>
                </Box>
                <Box>
                  <Menu>
                    <MenuButton as={IconButton} aria-label="Options" icon={<FaEllipsisV />} bg="#ffff" />
                    <MenuList>
                      <MenuItem>View Profile</MenuItem>
                      <MenuItem>Delete</MenuItem>
                    </MenuList>
                  </Menu>
                </Box>
              </Box>
            ))}
          </Grid>
        </Box>

        {/* Pagination */}
        <Box
          mx={5}
          mb={5}
          mt={5}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <HStack>
            <Text color="#001D3D" fontSize="xl" fontWeight="bold">Overall Staff Count</Text>
            <Text fontSize="md" fontWeight="bold">100</Text>
          </HStack>

          <HStack spacing="4" mt="6">
            <Button bgColor={variables.primaryColor2} color="#ffff">1</Button>
            <Button bgColor={variables.primaryColor2} color="#ffff">2</Button>
            <Button bgColor={variables.primaryColor2} color="#ffff">3</Button>
          </HStack>
        </Box>
      </Box>
    </Flex>
  )
}

export default TeachersAndStaff
                    

                    
             

             
              

            
