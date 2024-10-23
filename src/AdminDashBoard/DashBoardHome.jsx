import React, { useState } from 'react';
import {
  Box,
  Flex,
  Grid,
  Heading,
  HStack,
  Text,
  Input,
  Button,
  InputGroup,
  InputLeftElement,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Avatar,
  Badge,
  Image,
} from '@chakra-ui/react';
import { SearchIcon, AddIcon } from '@chakra-ui/icons';
import EventTable from '../components/EventTable';
import SearchTeachers from '../components/SearchTeachers';
import Calendar from '../components/Calender';
import { variables } from '../App';

// Enrollment data
const enrollmentData = [
  {
    id: 1,
    name: 'Jenny Wilson',
    date: '13 Sep, 12:30',
    classSelected: 'Senior Secondary',
    paymentStatus: 'Paid',
  },
  {
    id: 2,
    name: 'Jenny Wilson',
    date: '13 Sep, 12:30',
    classSelected: 'Senior Secondary',
    paymentStatus: 'Paid',
  },
  {
    id: 3,
    name: 'Jenny Wilson',
    date: '13 Sep, 12:30',
    classSelected: 'Senior Secondary',
    paymentStatus: 'Paid',
  },
];

const DashBoardHome = () => {
  const [noteVisible, setNoteVisible] = useState(false);
  const [noteContent, setNoteContent] = useState('');

  const handleNoteClick = () => {
    setNoteVisible(!noteVisible);
  };

  const handleInputChange = (event) => {
    setNoteContent(event.target.value);
  };

  return (
    <Box bg={variables.primaryColor2} overflowY="auto" maxH="100vh">
      {/* NavBar */}
      <Flex
        bg="#ffff"
        h="20vh"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        maxW="100%"
      >
        <Heading fontSize="xl" fontWeight="bold" mx={5}>
          Dashboard
        </Heading>

        {/* Search Input */}
        <InputGroup maxW="500px" mx={5}>
          <InputLeftElement pointerEvents="none">
            <SearchIcon color="#001D3D" />
          </InputLeftElement>
          <Input
            type="text"
            placeholder="Search Teachers, Events and more..."
            bg={variables.primaryColor2}
            fontSize="md"
            fontWeight="bold"
            variant="filled"
            borderColor="gray.300"
            focusBorderColor="purple.500"
          />
        </InputGroup>
      </Flex>

      {/* Dashboard Summary Section */}
      <Box bg="white" p={5} mt={50} rounded="lg" boxShadow="md" mx={5}>
        <Text fontSize="xl" fontWeight="bold" mb={2}>Preview</Text>
        <Text fontSize='md' fontWeight='bold' mb={2}>Schools summary</Text>

        <Grid templateColumns="repeat(4, 1fr)" gap={4} mb={5} p={5}>
          <Box bg="pink.100" p={4} rounded="lg">
            <Box
              display="inline-flex"
              alignItems="center"
              justifyContent="center"
              borderRadius="full"
              boxSize={{ base: '30px', md: '30px' }} 
              bg={variables.primaryColor2}
              bgColor="pink"
            >
              <Image src='public/people.png' fontSize='sm' w='10px' h='10px' />
            </Box>
            <Text fontSize="xl" fontWeight="bold">100K</Text>
            <Text fontSize='md' fontWeight='bold'>Total Employees</Text>
            <Text fontSize='10px' fontWeight='bold'>Teachers and Staffs</Text>
          </Box>

          <Box bg="orange.100" p={4} rounded="lg">
            <Box
              display="inline-flex"
              alignItems="center"
              justifyContent="center"
              borderRadius="full"
              boxSize={{ base: '30px', md: '30px' }} 
              bg={variables.primaryColor2}
              bgColor="orange.200"
            >
              <Image src='public/Book open.png' fontSize='sm' w='10px' h='10px' />
            </Box>
            <Text fontSize="xl" fontWeight="bold">1M</Text>
            <Text fontSize='md' fontWeight='bold'>Total Students</Text>
          </Box>

          <Box bg="green.100" p={4} rounded="lg">
            <Box
              display="inline-flex"
              alignItems="center"
              justifyContent="center"
              borderRadius="full"
              boxSize={{ base: '30px', md: '30px' }} 
              bg={variables.primaryColor2}
              bgColor="green"
            >
              <Image src='public/Clock.png' fontSize='sm' w='10px' h='10px' />
            </Box>
            <Text fontSize="xl" fontWeight="bold">5</Text>
            <Text fontSize='md' fontWeight='bold'>Upcoming Events</Text>
            <Text fontSize='10px' fontWeight='bold'>Graduation Party</Text>
          </Box>

          <Box bg="purple.100" p={4} rounded="lg">
            <Box
              display="inline-flex"
              alignItems="center"
              justifyContent="center"
              borderRadius="full"
              boxSize={{ base: '30px', md: '30px' }} 
              bg={variables.primaryColor2}
              bgColor="purple"
            >
              <Image src='public/Naira.png' fontSize='sm' w='10px' h='10px' />
            </Box>
            <Text fontSize="xl" fontWeight="bold">20M</Text>
            <Text fontSize='md' fontWeight='bold'>Revenue</Text>
            <Text fontSize='10px' fontWeight='bold'>2024 currently</Text>
          </Box>
        </Grid>
      </Box>

      {/* Events & Calendar Section */}
      <Flex mx={5} mt={10} gap={5}>
        {/* Events */}
        <Box bg="white" p={4} rounded="lg" boxShadow="md" w='50%'>
          <EventTable />
        </Box>

        {/* Calendar */}
        <Box bg="white" p={4} rounded="lg" boxShadow="md" flex="1">
          <Calendar />
        </Box>
      </Flex>

      {/* Search Tasks & Note Section */}
      <Flex mx={5} mt={10} gap={5}>
        <Box bg="white" p={4} rounded="lg" boxShadow="md" w="60%">
          <SearchTeachers />
        </Box>

        <Box bg="white" p={4} rounded="lg" boxShadow="md" w="40%">
          <Flex direction="column" alignItems="center" justifyContent="center" textAlign="center">
            <Text fontSize='lg' fontWeight='bold'>Write Something</Text>
            <Text fontSize="lg" fontWeight="bold">  to Remember  </Text>
            <Button 
              onClick={handleNoteClick} 
              leftIcon={<AddIcon />} 
              size="lg"             
              color="#001D3D"    
              aria-label="Add a note"
              variant="#fff" 
              mt={5}>
            </Button>
            {/* Conditionally render the input for the note */}
            {noteVisible && (
              <Input
                mt={4}
                placeholder="Write your note here..."
                value={noteContent}
                onChange={handleInputChange}
                textAlign="center"
              />
            )}
          </Flex>
        </Box>

      </Flex>

      {/* Online Enrollment Summary Section */}
      <Box bg="white" p={4} rounded="lg" boxShadow="md" mx={5} mt={10}>
        <Text fontSize="xl" fontWeight="bold" mb={4} color="#001D3D">
          Online Enrollment Summary
        </Text>

        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Date</Th>
              <Th>Class Selected</Th>
              <Th>Payment</Th>
              <Th></Th> {/* Empty for the View button */}
            </Tr>
          </Thead>
          <Tbody>
            {enrollmentData.map((enrollment) => (
              <Tr key={enrollment.id}>
                <Td>
                  <HStack>
                    <Avatar size="sm" name={enrollment.name} />
                    <Text color="#001D3D" fontSize="sm" fontWeight="bold">{enrollment.name}</Text>
                  </HStack>
                </Td>
                <Td color="#001D3D" fontSize="sm" fontWeight="bold">{enrollment.date}</Td>
                <Td color="#001D3D" fontSize="sm" fontWeight="bold">{enrollment.classSelected}</Td>
                <Td>
                  <Badge color="green" bg="#ffff">{enrollment.paymentStatus}</Badge>
                </Td>
                <Td>
                  <Button bgColor="#001D3D" color="#ffff" size="sm" rounded="full">
                    View
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Box>
  );
};

export default DashBoardHome;
