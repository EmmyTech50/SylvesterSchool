import React from 'react'
import { useState } from 'react';
import { variables } from '../App'
import { Box, Flex, Grid, Heading, HStack, IconButton, Image, Input, InputGroup, InputLeftElement, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import { AddIcon, SearchIcon } from '@chakra-ui/icons'




// Month names
const months = [
    'January', 'February', 'March', 'April', 'May', 'June', 
    'July', 'August', 'September', 'October', 'November', 'December'
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
      if (highlightedDates.green.includes(day)) {
        return 'green.500';
      } else if (highlightedDates.yellow.includes(day)) {
        return 'yellow.400';
      } else if (highlightedDates.darkGray.includes(day)) {
        return 'gray.500';
      }
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
  
    // Handle date click
    const handleDateClick = (day) => {
      const newDate = new Date(currentYear, currentMonth, day);
      setSelectedDate(newDate);
      alert(`Selected Date: ${newDate.toDateString()}`);
    };
  
    const daysInMonth = getDaysInMonth(currentMonth, currentYear);
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
function DashBoardHome() {

  return (
    <Box bg={variables.primaryColor2} overflowY="auto" maxH="100vh">

            {/* NarBar */}
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

            {/* Events, Calendar */}
            <HStack spacing={4} align="stretch" mt={10} mx={5}> 
            
                {/* Events Section */}
                <Box bg="white" p={4} rounded="lg" boxShadow="md" w='75%' h='50vh'>
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

                {/* Calendar Section */}
                <Box bg="white" p={4} rounded="lg" boxShadow="md" w='25%' >
                <VStack spacing={6} w="25%">
      <Heading as="h2" size="lg" textAlign="center">
        {months[currentMonth]} {currentYear}
      </Heading>

      {/* Month Navigation */}
      <Flex justifyContent="space-between" w="100%">
        <Button onClick={handlePrevMonth}>&lt; Previous</Button>
        <Button onClick={handleNextMonth}>Next &gt;</Button>
      </Flex>

      {/* Calendar Days */}
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
            color={highlightedDates[day] ? 'white' : 'black'}
            p={3}
            m={1}
            borderRadius="md"
            textAlign="center"
            cursor="pointer"
            onClick={() => handleDateClick(day)}
            w="14%" // Set width to 14% to account for 7 columns
          >
            {day}
          </Box>
        ))}
      </Flex>
    </VStack>
                </Box>

               
            </HStack >
            <HStack spacing={4} align="stretch" mt={10} mx={5}> 
            
                {/* Events Section */}
                <Box bg="white" p={4} rounded="lg" boxShadow="md" w='75%' h='50vh'>
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

                 {/* Notes Section */}
                 <Box bg="white" p={4} rounded="lg" boxShadow="md">
                    <Text fontSize="lg" fontWeight="bold" mb={3}>Write Something to Remember</Text>
                    <Input placeholder="Add a note..." />
                </Box>

               
            </HStack >

            {/* Online Enrollment Summary */}
            <Box bg="white" p={5} mt={5} rounded="lg" boxShadow="md" mx={5}>

                

                <Text fontSize="lg" fontWeight="bold" mb={4}>Online Enrollment Summary</Text>
                <Grid templateColumns="repeat(4, 1fr)" gap={4}>
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
                <Grid templateColumns="repeat(4, 1fr)" gap={4} mt={2}>
                    <Box>Jenny Wilson</Box>
                    <Box>15 Sept, 12:30</Box>
                    <Box>Senior Secondary</Box>
                    <Box>Paid</Box>
                </Grid>
            </Box>
        </Box>
  )
}

export default DashBoardHome