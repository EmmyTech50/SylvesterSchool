import React, { useState } from 'react';
import {
  Box,
  Flex,
  Heading,
  Button,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Avatar,
  Text,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  Tab,
  IconButton,
  Input,
  Checkbox,
} from '@chakra-ui/react';
import { ArrowUpIcon, ArrowDownIcon } from '@chakra-ui/icons';
import { MdSave } from 'react-icons/md';
import { variables } from '../App';

// Sample data for the uploaded and staged tables
const studentsData = [
  { name: 'Wade Warren', ca1: 60, ca2: 60, ca3: 60, total: 180, grade: 'A', imgUrl: 'https://bit.ly/2jYM25F' },
  { name: 'Emeka David', ca1: 23, ca2: 60, ca3: 60, total: 180, grade: 'A', imgUrl: 'https://bit.ly/dan-abramov' },
  { name: 'Mathew Crooks', ca1: 10, ca2: 10, ca3: 10, total: 30, grade: 'F9', imgUrl: 'https://bit.ly/ryan-florence' },
];

// Component
const ResultEntry = () => {
  const [currentYear, setCurrentYear] = useState(2024);
  const [stagedData, setStagedData] = useState(studentsData);

  // Handlers to navigate between years
  const handleYearChange = (direction) => {
    setCurrentYear((prevYear) => prevYear + direction);
  };

  return (
    <Box p={4} bg={variables.primaryColor2}>
      {/* Header Section */}
      <Flex justifyContent="space-between" mb={5} borderRadius="md" mx={5}>
        <Heading size="lg" fontWeight="bold" color="#001D3D">
          Result Entry
        </Heading>
        <Button bg="#001D3D" color="white" fontSize="md" fontWeight="bold">
          Upload New
        </Button>
      </Flex>

      <Box mb={4} mx={5}>
        <Text fontSize="lg" fontWeight="semibold" color="#001D3D">
          Result History
        </Text>
      </Box>

      {/* Tabs for "Current", "Uploaded", and "Staged" */}
      <Tabs variant="unstyled">
        <TabList display="flex" justifyContent="space-between"  borderBottom="1px solid" borderColor="gray.400" mb="20px">
          <Box display="flex">
            <Tab _selected={{ color: '#001D3D', borderBottom: '2px solid #001D3D' }} fontWeight="bold">
              Current
            </Tab>
            <Tab _selected={{ color: '#001D3D', borderBottom: '2px solid #001D3D' }} fontWeight="bold">
              Uploaded
            </Tab>
            <Tab _selected={{ color: '#001D3D', borderBottom: '2px solid #001D3D' }} fontWeight="bold">
              Staged
            </Tab>
          </Box>
          <Box display="flex" alignItems="center">
            <IconButton icon={<ArrowUpIcon />} onClick={() => handleYearChange(1)}  bgColor={variables.primaryColor2}/>
            <IconButton icon={<ArrowDownIcon />} onClick={() => handleYearChange(-1)} bgColor={variables.primaryColor2}/>
          </Box>
        </TabList>

        <TabPanels>
          {/* Current Tab */}
          <TabPanel>
            <Box bg="white" p={4} rounded="lg" boxShadow="md" mx="10px">
              <Flex justifyContent="space-between" alignItems="center" mb={4}>
                <Heading fontSize="30px" color="#001D3D">
                  English Language, {currentYear}
                </Heading>
              </Flex>
              <Text fontSize="md" color="gray.500" mb={2}>
                Staged {currentYear}
              </Text>

              {/* Editable Table for Current Results */}
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th>Save</Th>
                    <Th>Name</Th>
                    <Th>1st CA</Th>
                    <Th>2nd CA</Th>
                    <Th>3rd CA</Th>
                    <Th>Total</Th>
                    <Th>Grade</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {studentsData.map((student, index) => (
                    <Tr key={index}>
                      <Td>
                        <Checkbox colorScheme="green" defaultChecked />
                      </Td>
                      <Td>
                        <Flex alignItems="center">
                          <Avatar size="sm" name={student.name} src={student.imgUrl} mr={2} />
                          <Text fontWeight="bold" color="#001D3D">
                            {student.name}
                          </Text>
                        </Flex>
                      </Td>
                      <Td>
                        <Input defaultValue={student.ca1} />
                      </Td>
                      <Td>
                        <Input defaultValue={student.ca2} />
                      </Td>
                      <Td>
                        <Input defaultValue={student.ca3} />
                      </Td>
                      <Td>
                        <Text fontWeight="bold" color="#001D3D">
                          {student.total}
                        </Text>
                      </Td>
                      <Td>
                        <Text fontWeight="bold" color="#001D3D">
                          {student.grade}
                        </Text>
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>

              {/* Stage Button */}
              <Flex justifyContent="flex-end" mt={4}>
                <Button bg="#001D3D" color="white" fontSize="md" fontWeight="bold" onClick={() => setStagedData(studentsData)}>
                  Stage
                </Button>
              </Flex>
            </Box>
          </TabPanel>

          {/* Uploaded Tab */}
          <TabPanel>
            <Box bg="white" p={4} rounded="lg" boxShadow="md" mx="10px">
              <Heading fontSize="30px" color="#001D3D" mb={4}>
                English Language, {currentYear}
              </Heading>

              {/* Uploaded Results Table */}
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th>Name</Th>
                    <Th>1st CA</Th>
                    <Th>2nd CA</Th>
                    <Th>3rd CA</Th>
                    <Th>Total</Th>
                    <Th>Grade</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {studentsData.map((student, index) => (
                    <Tr key={index}>
                      <Td>
                        <Flex alignItems="center">
                          <Avatar size="sm" name={student.name} src={student.imgUrl} mr={2} />
                          <Text fontWeight="bold" color="#001D3D">
                            {student.name}
                          </Text>
                        </Flex>
                      </Td>
                      <Td fontWeight="bold" color="#001D3D">
                        {student.ca1}
                      </Td>
                      <Td fontWeight="bold" color="#001D3D">
                        {student.ca2}
                      </Td>
                      <Td fontWeight="bold" color="#001D3D">
                        {student.ca3}
                      </Td>
                      <Td fontWeight="bold" color="#001D3D">
                        {student.total}
                      </Td>
                      <Td fontWeight="bold" color="#001D3D">
                        {student.grade}
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>

              {/* Total Students and View All Button */}
              <Flex justifyContent="space-between" mt={4}>
                <Text color="#001D3D" fontWeight="bold">
                  543 students
                </Text>
                <Button color="#ffff" bgColor="#001D3D">
                  View All
                </Button>
              </Flex>
            </Box>
          </TabPanel>

          {/* Staged Tab */}
          <TabPanel>
            <Box bg="white" p={4} rounded="lg" boxShadow="md" mx="10px">
              <Heading fontSize="30px" color="#001D3D">
                Staged Results for {currentYear}
              </Heading>
              {/* Staged Data Table */}
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th>Name</Th>
                    <Th>1st CA</Th>
                    <Th>2nd CA</Th>
                    <Th>3rd CA</Th>
                    <Th>Total</Th>
                    <Th>Grade</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {stagedData.map((student, index) => (
                    <Tr key={index}>
                      <Td>
                        <Flex alignItems="center">
                          <Avatar size="sm" name={student.name} src={student.imgUrl} mr={2} />
                          <Text fontWeight="bold" color="#001D3D">
                            {student.name}
                          </Text>
                        </Flex>
                      </Td>
                      <Td fontWeight="bold" color="#001D3D">
                        {student.ca1}
                      </Td>
                      <Td fontWeight="bold" color="#001D3D">
                        {student.ca2}
                      </Td>
                      <Td fontWeight="bold" color="#001D3D">
                        {student.ca3}
                      </Td>
                      <Td fontWeight="bold" color="#001D3D">
                        {student.total}
                      </Td>
                      <Td fontWeight="bold" color="#001D3D">
                        {student.grade}
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>

              {/* Edit and Publish Buttons */}
              <Flex justifyContent="space-between" mt={4}>
                <Button bg="#001D3D" color="white" fontSize="md" fontWeight="bold">Edit</Button>
                <Button bg="#001D3D" color="white" fontSize="md" fontWeight="bold">Publish</Button>
              </Flex>
            </Box>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default ResultEntry;
