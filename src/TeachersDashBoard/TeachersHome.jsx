import {
  Box,
  Heading,
  Input,
  Flex,
  InputGroup,
  InputLeftElement,
  Grid,
  HStack,
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
  VStack,
  Badge,
  Text,
  Img
} from '@chakra-ui/react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { SearchIcon, AddIcon, ChevronDownIcon } from '@chakra-ui/icons';
import { variables } from '../App';
import SearchTeachers from '../components/SearchTeachers';
import EventTable from '../components/EventTable';
import Calendar from '../components/Calender';
import WriteNote from '../components/WriteNote';
import { Link } from 'react-router-dom';


// Mock data for the chart
const data = [
  { name: "1WK", uv: 4000 },
  { name: "2WK", uv: 3000 },
  { name: "3WK", uv: 2000 },
  { name: "4WK", uv: 2780 },
  { name: "5WK", uv: 1890 },
  { name: "6WK", uv: 2390 },
  { name: "7WK", uv: 3490 },
];

// Sample event data
const events = [
  { id: 1, name: 'Home Decor Range', date: '13 Mar 2024', color: 'green.500' },
  { id: 2, name: 'Disney Princess Pink Bag 15', date: '13 Mar 2024', color: 'black' },
  { id: 3, name: 'Bathroom Essentials', date: '13 Mar 2024', color: 'yellow.500' },
  { id: 4, name: 'Apple Smartwatches', date: '13 Mar 2024', color: 'gray.400' }
];


// Main App Component
function TeachersHome() {
  return (
    <Box bg={variables.primaryColor2} overflowY="auto" maxH="100vh">
      {/* NavBar */}
      <Flex
      bg="#ffff"
      h='15vh'
      display='flex'
      justifyContent="space-between"  
      alignItems="center" 
      mb="10px"
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

      <Box
      bg="white"
      p={5}
      borderRadius="md"
      boxShadow="md"
      maxW="container.lg"
      mx="auto"
      mt={5}
      >
        {/* Header and Dropdown */}
        <Flex justify="space-between" align="center" mb={2} borderBottom='1px' borderBottomColor='#001D3D'>
          <VStack>
            <Text fontSize="md" fontWeight="bold">
              Weekly Student Attendance
            </Text>

            {/* Dropdown for selecting student */}
            <Menu>
              <MenuButton fontSize="lg" fontWeight="bold" as={Button} rightIcon={<ChevronDownIcon />} variant='#ffff'>
                Eze ChukwuEmeka David
              </MenuButton>
              <MenuList>
                <Input
                  placeholder="Search for student"
                  width="90%"
                  boxShadow="sm"
                  bg="gray.100"
                  fontWeight="bold"
                  mx={3}
                />
                <MenuItem  fontWeight="bold">Jovan Mark</MenuItem>
                <MenuItem  fontWeight="bold">Matthew Jones</MenuItem>
                <MenuItem  fontWeight="bold">Stones Crooks</MenuItem>
                <MenuItem  fontWeight="bold">John Bishop</MenuItem>
              </MenuList>
            </Menu>
          </VStack>
                
          {/* Attendance Percentage */}
          <VStack align="flex-end">
            <HStack fontWeight="bold" fontSize="lg">
              <Text>
                80%
              </Text>
              <Img src={'public/Arrow.png'}/>
            </HStack>
            <Text fontWeight="md">
              EXCELLENT
            </Text>
          </VStack>
        </Flex>
              
                


        

        {/* Search Input and Button */}
        <Flex justify="space-between" mt={4} align="center">
          {/* Chart */}
          <ResponsiveContainer width="70%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="uv" stroke="#8884d8" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>

          {/* Mark Attendance Button */}
          <Button
            colorScheme="gray"
            bg="#001D3D"
            color="white"
            px={8}
            boxShadow="md"
          ><Link to="/attendance">
            Mark Attendance
          </Link></Button>
        </Flex>
      </Box>
          
      {/* Events & SearchTeachers */}
      <Flex mx={9} mt={10} gap={5} h='51vh'>
        {/* Events */}
        <Box bg="white" p={4} rounded="lg" boxShadow="md" w="60%">
          <EventTable icon={AddIcon}/>
        </Box>

        {/* SearchTeachers */}
        <Box bg="white" p={4} rounded="lg" boxShadow="md" w="40%">
          <SearchTeachers />
        </Box>
      </Flex>

      <Box   mx={9} h='80vh' mb='10px'>
        <Grid templateColumns="repeat(3, 1fr)" gap={4} mt={10} h='60vh' >
          <Box bg="white"  rounded="lg" boxShadow="md" > 
            <Calendar/>
          </Box>
          <Box bg="white" rounded="lg" boxShadow="md" >
            <WriteNote/>
          </Box>
          <Box bg="white" rounded="lg" boxShadow="md" >
          
          </Box>
        </Grid>
      </Box>
              

      
    </Box>
  );
}

export default TeachersHome;
