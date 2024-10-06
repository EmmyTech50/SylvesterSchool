import React from 'react';
import { Box, Flex, Table, Thead, Tbody, Tr, Th, Td, Avatar, Text, Button, IconButton, HStack, Spacer, Heading,Input } from '@chakra-ui/react';
import {  ChevronRightIcon, ChevronLeftIcon} from '@chakra-ui/icons';
import { variables } from '../App';

const students = [
  { name: 'Jenny Wilson',   imageUrl: 'https://bit.ly/2jYM25F' },
  { name: 'Jenny Wilson',   imageUrl: 'https://bit.ly/dan-abramov' },
  { name: 'Jenny Wilson',   imageUrl: 'https://bit.ly/kent-c-dodds' },
  { name: 'Jenny Wilson',   imageUrl: 'https://bit.ly/ryan-florence' },
  { name: 'Jenny Wilson',   imageUrl: 'https://bit.ly/prosper-baba' },
];
  
function Attendance() {
  return (
    <Flex direction="column" align="center" overflowY="auto" maxH="100vh" bg={variables.primaryColor2} p={5}>
      
      {/* Main Content Container */}
      <Box w="full" maxW="1200px" bg={variables.primaryColor2}>
        
        <Box mt={6} mx={6}>
          {/* First Row - Non-Teaching Staff Title and Right Controls */}
          <Flex alignItems="center" justify="space-between">
            {/* Title */}
            <Heading fontSize="lg" fontWeight="bold" color="#001D3D">Attendance</Heading>

            {/* Right Section: Dropdown and Add Button */}
            <Flex>
              13 May 2024
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
                <Th>Mark</Th>
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

                    {/* Attendance Mark */}
                    <Td>
                    <HStack spacing={4}>
                        <Button colorScheme="green" size="sm">
                        Present
                        </Button>
                        <Button colorScheme="red" size="sm">
                        Absent
                        </Button>
                    </HStack>
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

export default Attendance;
                    

                    
             

             
              

            
