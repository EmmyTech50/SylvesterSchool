import { Box, Button, Flex, Heading } from '@chakra-ui/react';
import React from 'react'
import  { useState } from 'react';

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
    }
        
    export default Calendar;
        


