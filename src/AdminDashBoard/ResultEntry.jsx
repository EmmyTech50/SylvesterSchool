import React from 'react'
import { Box, Flex, Text, Button, Heading, Grid, GridItem, Select, Stack, Badge, Image, useDisclosure, Collapse, Table, Thead, Tr, Th, Tbody, Icon, Td, VStack, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter } from '@chakra-ui/react';
import { useState } from 'react';
import SideBar from './leftSide/SideBar';
import { variables } from '../App';
import { CheckCircleIcon } from '@chakra-ui/icons';
import { Spinner } from '@chakra-ui/react';

// imports for the bar charts
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


const data = {
    labels: ['2019', '2020', '2021', '2022'],
    datasets: [
      {
        label: 'Excellent',
        data: [5000, 10000, 9000, 7000],
        backgroundColor: 'rgba(72, 207, 173, 0.8)', // Green
        borderColor: 'rgba(72, 207, 173, 1)',
        borderWidth: 1,
      },
      {
        label: 'Good',
        data: [4000, 6000, 8000, 6000],
        backgroundColor: 'rgba(255, 193, 7, 0.8)', // Yellow
        borderColor: 'rgba(255, 193, 7, 1)',
        borderWidth: 1,
      },
      {
        label: 'Poor',
        data: [2000, 3000, 4000, 3000],
        backgroundColor: 'rgba(231, 76, 60, 0.8)', // Red
        borderColor: 'rgba(231, 76, 60, 1)',
        borderWidth: 1,
      },
    ],
  };
  
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Cumulative performance of Student per season',
      },
    },
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
        beginAtZero: true,
        ticks: {
          callback: function (value) {
            return value > 1000 ? `${value / 1000}K` : value;
          },
        },
      },
    },
  };

  // Expanded Data
  const ExpandedData = [
    {
      level: 'A',
      results: ['Ready', 'Pending', 'Ready', 'Pending', 'Ready', 'Pending'],
    },
    {
      level: 'B',
      results: ['Ready', 'Pending', 'Ready', 'Pending', 'Ready', 'Pending'],
    },
    {
      level: 'C',
      results: ['Ready', 'Pending', 'Ready', 'Pending', 'Ready', 'Pending'],
    },
    {
      level: 'D',
      results: ['Ready', 'Pending', 'Ready', 'Pending', 'Ready', 'Pending'],
    },
  ];

function ResultEntry() {

  // handles open portal
  const { isOpen: isOpenPortal, onOpen: onOpenPortal, onClose: onClosePortal } = useDisclosure();

  // State to manage expansion
  const { isOpen, onToggle } = useDisclosure();

  // Get the first two rows and the rest separately
  const firstTwoRows = ExpandedData.slice(0, 2); // Always visible
  const expandableRows = ExpandedData.slice(2);  // Expandable

  return (
    <Flex direction="column" align="center" overflowY="auto" maxH="100vh" bg={variables.primaryColor2} p="6">
      
        {/* Main Content Container */}
        <Box w="full" maxW="1200px" bg={variables.primaryColor2}>
                                
            {/* Title */}
            <Heading fontSize="lg" fontWeight="bold" mb="4" mx={5}>Result Entry</Heading>

            {/* Results Delivered per Class Section */}
            <Box
            mb="6"
            bg="white"
            p={5}
            mt={50}
            rounded="lg"
            boxShadow="md"
            mx={5}
            >
                <Stack direction="row" position="relative" top="-20px" left="-20px" h="25px">
                    <Badge color="#ffff" bgColor="#001D3D" fontSize="md" fontWeight="bold" borderTopLeftRadius="5px">
                    Results Delivered per class
                    </Badge>
                </Stack>

                {/* Result with Expandable button */}
                <Box>
                    
                <Table variant="simple">
                  <Thead>
                    <Tr>
                      <Th>JSS 1</Th>
                      <Th>JSS 2</Th>
                      <Th>JSS 3</Th>
                      <Th>SS 1</Th>
                      <Th>SS 2</Th>
                      <Th>SS 3</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {/* Render the first two rows that are always visible */}
                    {firstTwoRows.map((row, rowIndex) => (
                      <Tr key={rowIndex}>
                        {row.results.map((status, colIndex) => (
                          <Td key={colIndex} textAlign="center">
                            {status === 'Ready' ? (
                              <>
                                <VStack>
                                  <Image src='public/ready.png'/>
                                  <Text>Ready</Text>
                                </VStack>
                              </>
                            ) : (
                              <>
                                <VStack>
                                  <Image src='public/pendng.png'/>
                                  <Text>Pending</Text>
                                </VStack>
                              </>
                            )}
                          </Td>
                        ))}
                        <Td>
                          <Text>{row.level}</Text>
                        </Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
                
                {/* Collapsible content with the remaining rows */}
                <Collapse in={isOpen} animateOpacity>
                  <Table variant="simple">
                    <Tbody>
                      {expandableRows.map((row, rowIndex) => (
                        <Tr key={rowIndex}>
                          {row.results.map((status, colIndex) => (
                            <Td key={colIndex} textAlign="center">
                              {status === 'Ready' ? (
                                <>
                                  <VStack>
                                    <Image src='public/ready.png'/>
                                    <Text>Ready</Text>
                                  </VStack>
                                </>
                              ) : (
                                <>
                                  <VStack>
                                    <Image src='public/pendng.png'/>
                                    <Text>Pending</Text>
                                  </VStack>
                                </>
                              )}
                            </Td>
                          ))}
                          <Td>
                            <Text>{row.level}</Text>
                          </Td>
                        </Tr>
                      ))}
                    </Tbody>
                  </Table>
                </Collapse>
                    {/* Expand Button */}
                    <Flex justify='flex-end'>
                      <Button onClick={onToggle} mb={4} mt={4} color='#ffff' bgColor='#001D3D' fontSize='md' fontWeight='bold'>
                      {isOpen ? 'Collapse' : 'Expand'}
                      </Button>
                    </Flex>
                </Box>
            </Box>


            {/* Action Buttons */}
            <Flex mb="6" mx={5} flexWrap="wrap" gap="4">
                <Box
                    bg="white"
                    borderRadius="lg"
                    p="4"
                    textAlign="center"
                    boxShadow="sm"
                    flex="1"
                    h="20vh"
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Box>
                        <Text fontSize="lg" fontWeight="bold">Open Result Portal</Text>
                        <Text color={variables.primaryColor1} fontSize="sm" fontWeight="bold">Results Are Still Pending.</Text>
                    </Box>
                    <Button onClick={onOpenPortal} mt="2" color="#ffff" bgColor="#001D3D" fontSize="md" fontWeight="bold">Open Result Portal</Button>
                </Box>

                <Box
                    bg="white"
                    borderRadius="lg"
                    p="4"
                    textAlign="center"
                    boxShadow="sm"
                    flex="1"
                    h="20vh"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Box textAlign="center">
                        <Text fontSize="lg" fontWeight="bold">View Progressive Report</Text>
                        <Select mt="2" size="sm" placeholder="View" width="120px" fontSize="sm" fontWeight="bold" outlineColor="#001D3D">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </Select>
                    </Box>
                </Box>
            </Flex>

            {/* Chart Section */}
            <Box bg="white" borderRadius="lg" p="4" boxShadow="sm" mx={5} h='100vh'>
            <Text fontSize="lg" fontWeight="bold" mb="4">Cumulative performance of Students per season</Text>

            {/* Placeholder for Chart */}
            <Box p="4" height="85vh" border="1px solid" borderColor="gray.200" borderRadius="md">
                <Text textAlign="center"> <Bar data={data} options={options} /> </Text>
            </Box>
            </Box>

        </Box>


        {/* Open Portal Modal */}
        <Modal isOpen={isOpenPortal} onClose={onClosePortal} size="lg">
          <ModalOverlay bgColor='#D9D9D9'/>
          <ModalContent bgColor='#F5FCEC'>
            <ModalHeader color="#001D3D" fontSize="xl" fontWeight="bold" align='center'>Open Portal</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <VStack>
                  <Text fontSize='md' fontWeight='bold' color={variables.primaryColor1}>Results are still pending, some student </Text>    
                  <Text fontSize='md' fontWeight='bold' color={variables.primaryColor1}>will not be able to see their result,</Text>    
                  <Text fontSize='md' fontWeight='bold' color={variables.primaryColor1}>do you wish to proceed</Text>    
                  
                </VStack>
            </ModalBody>
            
            {/* Footer Buttons */}
            <ModalFooter>
              <Flex justify='center' align='center'>
                <Button outlineColor="#001D3D" color='#001D3D'  onClick={onClosePortal}>
                  Open
                </Button>
              </Flex>
            </ModalFooter>
          </ModalContent>
        </Modal>
    </Flex>
  )
}

export default ResultEntry