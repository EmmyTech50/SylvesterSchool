import {
    Box,
    Grid,
    HStack,
    Heading,
    Input,
    Thead,
    Tr,
    Th,
    Tbody,
    Td,
    Badge,
    Avatar,
    SimpleGrid,
    
  } from '@chakra-ui/react';
import { MdSearch } from 'react-icons/md';
 
  
  // Mock data for the chart
  const chartData = {
    labels: ['1WK', '2WK', '3WK', '4WK', '5WK', '7WK'],
    datasets: [
      {
        label: 'Attendance',
        data: [4000, 3000, 2000, 3500, 2800, 3200],
        borderColor: '#3182CE',
        backgroundColor: 'rgba(49, 130, 206, 0.1)',
      },
    ],
  };
  
  // Table Component for Events
  const EventsTable = () => (
    <Table variant="simple" size="md">
      <Thead>
        <Tr>
          <Th>Name</Th>
          <Th>Date</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>Home Decor Range</Td>
          <Td>13 Mar 2024</Td>
        </Tr>
        <Tr>
          <Td>Disney Princess Pink Bag</Td>
          <Td>13 Mar 2024</Td>
        </Tr>
        <Tr>
          <Td>Bathroom Essentials</Td>
          <Td>13 Mar 2024</Td>
        </Tr>
      </Tbody>
    </Table>
  );
  
  // Main App Component
  function TeachersHome() {
    return (
      <Box bg="gray.100" minH="100vh" p={5}>
        {/* Header */}
        <HStack justifyContent="space-between" mb={6}>
          <Heading size="lg">Dashboard</Heading>
          <HStack spacing={2}>
            <MdSearch size={24} />
            <Input placeholder="Search..." variant="outline" w="300px" />
          </HStack>
        </HStack>
  
        {/* Grid for the Layout */}
        <Grid templateColumns="repeat(2, 1fr)" gap={6}>
          {/* Weekly Attendance */}
          <Box bg="white" p={5} borderRadius="md" boxShadow="sm">
            <Heading size="md" mb={4}>
              Weekly Student Attendance
            </Heading>
            <line data={chartData} />
          </Box>
  
          {/* Events */}
          <Box bg="white" p={5} borderRadius="md" boxShadow="sm">
            <Heading size="md" mb={4}>
              Events
            </Heading>
            <EventsTable />
          </Box>
  
          {/* Calendar and Write Section */}
          <Box bg="white" p={5} borderRadius="md" boxShadow="sm">
            <Heading size="md" mb={4}>
              Calendar
            </Heading>
            <Text>September 2021</Text>
            {/* Add a simple calendar component here */}
          </Box>
  
          <Box bg="white" p={5} borderRadius="md" boxShadow="sm">
            <Heading size="md" mb={4}>
              Write Something To Remember
            </Heading>
            {/* Add a text editor or a simple text box */}
            <Text>Add your notes here...</Text>
          </Box>
  
          {/* Teacher List */}
          <Box bg="white" p={5} borderRadius="md" boxShadow="sm">
            <Heading size="md" mb={4}>
              Teachers
            </Heading>
            <VStack align="stretch" spacing={4}>
              <HStack>
                <Avatar name="Jane Cooper" />
                <Box>
                  <Text>Jane Cooper</Text>
                  <Text fontSize="sm" color="gray.500">
                    Senior Teacher
                  </Text>
                </Box>
              </HStack>
              <HStack>
                <Avatar name="John Bishop" />
                <Box>
                  <Text>John Bishop</Text>
                  <Text fontSize="sm" color="gray.500">
                    Mathematics Teacher
                  </Text>
                </Box>
              </HStack>
            </VStack>
          </Box>
  
          {/* Subject List */}
          <Box bg="white" p={5} borderRadius="md" boxShadow="sm">
            <Heading size="md" mb={4}>
              My Subjects
            </Heading>
            <SimpleGrid columns={2} spacing={4}>
              <Badge colorScheme="blue" p={3} borderRadius="md">
                English Language
              </Badge>
              <Badge colorScheme="yellow" p={3} borderRadius="md">
                Further Maths
              </Badge>
              <Badge colorScheme="red" p={3} borderRadius="md">
                Mathematics
              </Badge>
            </SimpleGrid>
          </Box>
        </Grid>
      </Box>
    );
  }
  
  export default TeachersHome;
  