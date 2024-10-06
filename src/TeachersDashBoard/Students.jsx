import React from 'react';
import { Box, Flex, Table, Thead, Tbody, Tr, Th, Td, Avatar, Text, Button, IconButton, Menu, MenuButton, MenuList, MenuItem, HStack, Spacer, Heading, Select, Input} from '@chakra-ui/react';
import { ChevronDownIcon, ChevronRightIcon, ChevronLeftIcon} from '@chakra-ui/icons';
import { variables } from '../App';
import { Link } from 'react-router-dom';

const students = [
  { id: '20240001', name: 'Jenny Wilson', date: 'March 25, 2021', class: 'SSI A', imageUrl: 'https://bit.ly/2jYM25F' },
  { id: '20240001', name: 'Jenny Wilson', date: 'March 25, 2021', class: 'SSI A', imageUrl: 'https://bit.ly/dan-abramov' },
  { id: '20240001', name: 'Jenny Wilson', date: 'March 25, 2021', class: 'JSSI A', imageUrl: 'https://bit.ly/kent-c-dodds' },
  { id: '20240001', name: 'Jenny Wilson', date: 'March 25, 2021', class: 'JSS2 B', imageUrl: 'https://bit.ly/ryan-florence' },
  { id: '20240001', name: 'Jenny Wilson', date: 'March 25, 2021', class: 'JSS3 A', imageUrl: 'https://bit.ly/prosper-baba' },
];
  
function Students() {

  return (
    <Flex direction="column" align="center" overflowY="auto" maxH="100vh" bg={variables.primaryColor2} p={5}>
      
      {/* Main Content Container */}
      <Box w="full" maxW="1200px" bg={variables.primaryColor2}>
        
        <Box mt={6} mx={6}>
          {/* First Row - Non-Teaching Staff Title and Right Controls */}
          <Flex alignItems="center" justify="space-between">
            {/* Title */}
            <Heading fontSize="lg" fontWeight="bold" color="#001D3D">Students</Heading>

            {/* Right Section: Dropdown and Add Button */}
            <Flex alignItems="center" gap="4">
              {/* Dropdown */}
              <Select  outlineColor="#001D3D" width="160px" h="5vh" fontSize="md" fontWeight="bold" borderRadius="md">
                <option value="SS1A">SS1A</option>
                <option value="SS1B">SS1B</option>
                <option value="SS1C">SS1C</option>
              </Select>

              {/* Add Button */}
              <Button bgColor="#001D3D" color="#fff" fontSize="sm" fontWeight="bold" px="6" width="160px" h="6vh"><Link to="/addstudentform">
                + Add
              </Link></Button>
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

        <Box p={4} bg="#ffff" rounded="md" mx={6} mt={10}>
          <Table variant="simple" colorScheme="gray" bg="white" rounded="md" >
            <Thead>
              <Tr fontSize="lg" fontWeight="bold" color="#001D3D">
                <Th>Name</Th>
                <Th>ID</Th>
                <Th>Date</Th>
                <Th>Class</Th>
                <Th>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              {students.map((students, index) => (
                <Tr key={index}>
                  <Td>
                    <HStack spacing={3}>
                      <Avatar name={students.name} src={students.imageUrl} />
                      <Box>
                        <Text fontWeight="bold">{students.name}</Text>
                      </Box>
                    </HStack>
                  </Td>
                  <Td fontSize="md" fontWeight="bold" color="#001D3D">{students.id}</Td>
                  <Td fontSize="md" fontWeight="bold" color="#001D3D">{students.date}</Td>
                  <Td>
                    <Button size="sm" bgColor="#001D3D" color="#ffff" w="70px">
                      {students.class}
                    </Button>
                  </Td>
                  <Td>
                    <Menu>
                      <MenuButton as={IconButton} icon={<ChevronDownIcon />} variant="outline" />
                      <MenuList>
                        <MenuItem bgColor="#001D3D" color="#ffff" rounded={5}>Move</MenuItem>
                        <MenuItem>See full profile</MenuItem>
                        <MenuItem>1st Term Results</MenuItem>
                        <MenuItem>2nd Term Results</MenuItem>
                        <MenuItem>3rd Term Results</MenuItem>
                        <MenuItem>Annual report</MenuItem>
                        <MenuItem bgColor={variables.primaryColor1} w={20} rounded={5} mx={1}>Delete</MenuItem>
                      </MenuList>
                    </Menu>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>

           {/* Pagination */}
           <Flex mt={4} align="center" justifyContent="space-between">
            <Text size="md" Color="#001D3D">Overall Student Count: 100000</Text>
            <Spacer />
            <HStack spacing={4}>
              <IconButton icon={<ChevronLeftIcon />} isDisabled bg={variables.primaryColor2} color='#001D3D' fontWeight='bold'/>
              <Button colorScheme="yellow">1</Button>
              <Button color='#001D3D' bg='#ffff'>2</Button>
              <Button color='#001D3D' bg='#ffff'>3</Button>
              <IconButton icon={<ChevronRightIcon />} bg={variables.primaryColor2} color='#001D3D' fontWeight='bold'/>
            </HStack>
          </Flex> 
      </Box>

    </Flex>
  )
}

export default Students;
                    

                    
             

             
              

            
