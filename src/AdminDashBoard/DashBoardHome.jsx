import React, { useState } from 'react';
import { Box, Flex, Grid, Heading, HStack, IconButton, Text, VStack, Input, Button, InputGroup, InputLeftElement, Table, Thead, Tr, Th, Tbody, Td, Avatar, Badge, Image } from '@chakra-ui/react';
import { AddIcon, SearchIcon } from '@chakra-ui/icons';
import { variables } from '../App';
import { Link } from 'react-router-dom';
import { FaCommentAlt } from 'react-icons/fa';

// Sample event data
const events = [
  { id: 1, name: 'Home Decor Range', date: '13 Mar 2024', color: 'green.500' },
  { id: 2, name: 'Disney Princess Pink Bag 15\'', date: '13 Mar 2024', color: 'black' },
  { id: 3, name: 'Bathroom Essentials', date: '13 Mar 2024', color: 'yellow.500' },
  { id: 4, name: 'Apple Smartwatches', date: '13 Mar 2024', color: 'gray.400' }
];

// enrollmentData
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

// Sample teacher data
const teachers = [
  {
    id: 1,
    name: 'Jane Cooper',
    role: 'Form Teacher',
    avatar: 'https://bit.ly/sage-adebayo', // Placeholder avatar URL
  },
  {
    id: 2,
    name: 'Jane Cooper',
    role: 'Maths Teacher',
    avatar: 'https://bit.ly/dan-abramov', // Placeholder avatar URL
  },
];

// Month names
const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

// Helper to get days in a month
const getDaysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date()); // Manage selected date
  const [currentMonth, setCurrentMonth] = useState(selectedDate.getMonth());
  const [currentYear, setCurrentYear] = useState(selectedDate.getFullYear());

  // Highlighted dates (example data)
  const highlightedDates = {
    green: [4, 25],
    yellow: [18, 19, 27],
    darkGray: [16],
  };

  // Function to get color class for a date
  const getDayColor = (day) => {
    if (highlightedDates.green.includes(day)) return 'green.500';
    else if (highlightedDates.yellow.includes(day)) return 'yellow.400';
    else if (highlightedDates.darkGray.includes(day)) return 'gray.500';
    return 'transparent';
  };

  // Handle month navigation
  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear((prev) => prev - 1);
    } else {
      setCurrentMonth((prev) => prev - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear((prev) => prev + 1);
    } else {
      setCurrentMonth((prev) => prev + 1);
    }
  };

  const daysInMonth = getDaysInMonth(currentMonth, currentYear);
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <Flex direction="column" alignItems="center" >
      <Heading as="h2" size="md" textAlign="center" color="#001D3D" >
        {months[currentMonth]} {currentYear}
      </Heading>
      <Flex justifyContent="space-between" w="100%" my={3}>
        <Button onClick={handlePrevMonth} bg="#ffff" color="#001D3D" >&lt; Previous</Button>
        <Button onClick={handleNextMonth} bg="#ffff" color="#001D3D" >Next &gt;</Button>
      </Flex>

      <Flex wrap="wrap" justify="center" w="100%">
        {daysOfWeek.map((day, index) => (
          <Box key={index} p={2} textAlign="center" w="14%" fontWeight="bold" color="#001D3D" >
            {day}
          </Box>
        ))}
        {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((day) => (
          <Box
            key={day}
            bg={getDayColor(day)}
            p={3}
            m={1}
            color="#001D3D" 
            borderRadius="md"
            textAlign="center"
            cursor="pointer"
            w="14%"
          >
            {day}
          </Box>
        ))}
      </Flex>
    </Flex>
  );
};

const DashBoardHome = () => {
  return (
    <Box bg={variables.primaryColor2} overflowY="auto" maxH="100vh">
    {/* NavBar */}
    <Flex
        bg="#ffff"
        h='20vh'
        display='flex'
        justifyContent="space-between"  
        alignItems="center" 
        maxW="100%"
    >
        <Heading fontSize='xl' fontWeight='bold' mx={5}>
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
                fontSize='md' 
                fontWeight='bold'
                variant="filled"
                borderColor="gray.300"
                focusBorderColor="purple.500"
            />
        </InputGroup>
    </Flex>

      {/* Dashboard Summary Section */}
      <Box bg="white" p={5} mt={50} rounded="lg" boxShadow="md" mx={5}>
          <Text fontSize="xl" fontWeight="bold" mb={2}>Preview</Text>
          <Text fontSize='md' fontWeight='bold'  mb={2}>Schools summary</Text>

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
                  <Image src='src/IconFolder/People.png' fontSize='sm' w='10px' h='10px'/>

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
                      <Image src='src/IconFolder/Book open.png' fontSize='sm' w='10px' h='10px'/>

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
                      <Image src='src/IconFolder/Clock.png' fontSize='sm' w='10px' h='10px'/>

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
                      <Image src='src/IconFolder/Naira.png' fontSize='sm' w='10px' h='10px'/>

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
          {/* Header */}
          <Flex justifyContent="space-between" mb={3}>
            <Heading fontSize="lg" fontWeight="bold" color="#001D3D">Events</Heading>
            <IconButton icon={<AddIcon color="#001D3D" fontSize="lg"/>} bg="#ffff" />
          </Flex>

          {/* Events Table */}
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>#</Th>
                <Th>Name</Th>
                <Th textAlign="right">Date</Th>
              </Tr>
            </Thead>
            <Tbody>
              {events.map((event, index) => (
                <Tr key={event.id}>
                  <Td>{index + 1}</Td>
                  <Td>
                    <Link to={`/event/${event.id}`}>
                      <Text color={event.color} fontWeight="bold">{event.name}</Text>
                    </Link>
                  </Td>
                  <Td textAlign="right">{event.date}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
        
        {/* Calendar */}
        <Box bg="white" p={4} rounded="lg" boxShadow="md" flex="1">
          <Calendar />
        </Box>
      </Flex>

      {/* search tas & note Section */}
      <Flex mx={5} mt={10} gap={5}>

        {/* teachers search */}
        <Box bg="white" p={4} rounded="lg" boxShadow="md" w="60%">
          {/* Search Input */}
          <Input
            fontWeight="bold" 
            fontSize="lg" 
            color="#001D3D"
            placeholder="Search Teacher"
            mb={4}
            bg={variables.primaryColor2}
            borderColor="gray.300"
            focusBorderColor="purple.500"
            rounded="full"
          />

          {/* Teachers List */}
          <VStack spacing={4} align="stretch">
            {teachers.map((teacher) => (
              <HStack
                key={teacher.id}
                p={3}
                rounded="lg"
                justifyContent="space-between"
                boxShadow="sm"
                color="#001D3D"
              >
                <HStack>
                  <Avatar size="md" src={teacher.avatar} name={teacher.name} color="#001D3D"/>
                  <VStack align="start" spacing={0}>
                    <Text fontWeight="bold" fontSize="md" color="#001D3D">{teacher.name}</Text>
                    <Text fontSize="sm" color="#001D3D">{teacher.role}</Text>
                  </VStack>
                </HStack>

                <IconButton
                  icon={<FaCommentAlt />}
                  size="md"
                  color="#001D3D"
                  variant="#ffff"
                  aria-label="Message Teacher"
                />
              </HStack>
            ))}
          </VStack>
        </Box>
        
        
        {/* Notes Section */}
        <Box bg="white" p={4} rounded="lg" boxShadow="md" w="40%">
          <Flex justifyContent="center" alignItems="center" flexDirection="column" height="100px">
            <Text fontSize="lg" fontWeight="bold">  Write Something </Text>
            <Text fontSize="lg" fontWeight="bold">  to Remember  </Text>
          </Flex>

          <Flex justifyContent="center" alignItems="center" > 
            <IconButton
              icon={<AddIcon />}    
              size="lg"             
              color="#001D3D"    
              aria-label="Add a note"
              variant="#fff"       
              isRound={true}        
            />
          </Flex>
        </Box>
      </Flex>

      {/* Online Enrollment Summary Section */}
      <Box bg="white" p={4} rounded="lg" boxShadow="md"  mx={5} mt={10}>
      {/* Header */}
      <Text fontSize="xl" fontWeight="bold" mb={4} color="#001D3D">
        Online Enrollment Summary
      </Text>

      {/* Enrollment Table */}
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
                  <Text Color="#001D3D" fontSize="sm" fontWeight="bold">{enrollment.name}</Text>
                </HStack>
              </Td>
              <Td Color="#001D3D" fontSize="sm" fontWeight="bold">{enrollment.date}</Td>
              <Td Color="#001D3D" fontSize="sm" fontWeight="bold">{enrollment.classSelected}</Td>
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
