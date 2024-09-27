import React from 'react'
import { Box, Flex, Text, Button, Heading, Grid, GridItem, Select, Stack, Badge, Image } from '@chakra-ui/react';
import { useState } from 'react';
import SideBar from './leftSide/SideBar';
import { variables } from '../App';




function ResultEntry() {

  const [isExpanded, setIsExpanded] = useState(false);
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

                {/* Grid Container for the Class Items */}
                <Box
                    mt={5}
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Grid templateColumns="repeat(6, 1fr)" gap="4">
                    {["JSS 1", "JSS 2", "JSS 3", "SS 1", "SS 2", "SS 3"].map((className, idx) => (
                        <GridItem key={className} textAlign="center">
                        <Text fontSize="md" fontWeight="bold" mb={5}>{className}</Text>
                        {idx % 2 === 0 ? <Image src="src/IconFolder/ready.png" boxSize="6" /> : <Image src="src/IconFolder/pendng.png" boxSize="6" />}
                        <Text mt={5} fontSize="md" fontWeight="bold" color={idx % 2 === 0 ? "green.500" : "orange.500"}>
                            {idx % 2 === 0 ? "Ready" : "Pending"}
                        </Text>
                        </GridItem>
                    ))}
                    </Grid>

                    {/* Expand Button */}
                    <Button mb="5" color='#ffff' bgColor='#001D3D' fontSize='md' fontWeight='bold' onClick={() => setIsExpanded(!isExpanded)}>
                    {isExpanded ? "Collapse" : "Expand"}
                    </Button>
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
                    <Button mt="2" color="#ffff" bgColor="#001D3D" fontSize="md" fontWeight="bold">Open Result Portal</Button>
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
            <Box bg="white" borderRadius="lg" p="4" boxShadow="sm" mx={5}>
            <Text fontSize="lg" fontWeight="bold" mb="2">Cumulative performance of Students per season</Text>

            {/* Placeholder for Chart */}
            <Box p="4" height="200px" border="1px solid" borderColor="gray.200" borderRadius="md">
                <Text textAlign="center">[Bar Chart Placeholder]</Text>
            </Box>
            </Box>

        </Box>
    </Flex>
  )
}

export default ResultEntry