import React, { useState } from 'react';
import { Box, Flex, Grid, Heading, HStack, IconButton, Text, VStack, Input, Button, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { AddIcon, SearchIcon } from '@chakra-ui/icons';
import { variables } from '../App';

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
    <Flex direction="column" alignItems="center" w="100%">
      <Heading as="h2" size="lg" textAlign="center">
        {months[currentMonth]} {currentYear}
      </Heading>
      <Flex justifyContent="space-between" w="100%" my={3}>
        <Button onClick={handlePrevMonth}>&lt; Previous</Button>
        <Button onClick={handleNextMonth}>Next &gt;</Button>
      </Flex>

      <Flex wrap="wrap" justify="center" w="100%">
        {daysOfWeek.map((day, index) => (
          <Box key={index} p={2} textAlign="center" w="14%" fontWeight="bold">
            {day}
          </Box>
        ))}
        {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((day) => (
          <Box
            key={day}
            bg={getDayColor(day)}
            p={3}
            m={1}
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
                focusBorderColor="blue.300"
            />
        </InputGroup>
    </Flex>

      {/* Dashboard Summary Section */}
      <Box bg="white" p={5} mt={5} rounded="lg" boxShadow="md" mx={5}>
        <Text fontSize="xl" fontWeight="bold" mb={2}>Preview</Text>
        <Text fontSize="md" fontWeight="bold" mb={2}>Schools summary</Text>
      </Box>

      {/* Events & Calendar Section */}
      <Flex mx={5} mt={10} gap={5}>

        {/* Events */}
        <Box bg="white" p={4} rounded="lg" boxShadow="md" flex="1">
          <HStack justifyContent="space-between" mb={3}>
            <Text fontSize="lg" fontWeight="bold">Events</Text>
            <IconButton icon={<AddIcon />} />
          </HStack>
          <VStack spacing={3}>
            <Text>Visitor Oscar Bronga - 12 Sept 2024</Text>
            <Text>Driving Practical - 15 Sept 2024</Text>
            <Text>Parents Assembly - 18 Sept 2024</Text>
          </VStack>
        </Box>
        
        {/* Calendar */}
        <Box bg="white" p={4} rounded="lg" boxShadow="md" flex="1">
          <Calendar />
        </Box>
      </Flex>

      {/* Online Enrollment Summary Section */}
      <Box bg="white" p={5} mt={10} rounded="lg" boxShadow="md" mx={5}>
        <Text fontSize="lg" fontWeight="bold" mb={4}>Online Enrollment Summary</Text>
        <Grid templateColumns="repeat(4, 1fr)" gap={4} mt={2}>
          <Box>Name</Box>
          <Box>Date</Box>
          <Box>Class Selected</Box>
          <Box>Payment</Box>
        </Grid>
        <Grid templateColumns="repeat(4, 1fr)" gap={4} mt={2}>
          <Box>Jenny Wilson</Box>
          <Box>15 Sept, 12:30</Box>
          <Box>Senior Secondary</Box>
          <Box>Paid</Box>
        </Grid>
      </Box>
    </Box>
  );
};

export default DashBoardHome;
