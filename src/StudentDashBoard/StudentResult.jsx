import React from "react"
import {
  Box,
  VStack,
  HStack,
  Input,
  Button,
  Text,
  Select,
  Flex,
  Alert,
  AlertTitle,
} from "@chakra-ui/react";
import { variables } from "../App";
import { FaBell } from "react-icons/fa";


function StudentResult() {
  return (
    <Box bg={variables.primaryColor2} >
      <VStack
        p={6}
        borderRadius="md"
        spacing={4}
        mx={10}
      >
        
        {/* Notification bar */}
        <Alert status="info" borderRadius="lg" bg='gray.100'>
          <FaBell />
          <Flex justify="space-between" align="center" w="full">
            <AlertTitle ml={5}>
              <Flex justify='flex-start' flexDirection='column'>
                <Text fontSize="lg" fontWeight="bold">Update</Text>
                <Text fontSize="md" fontWeight="bold">The 2024 Results are out. Click to check</Text>
              </Flex>
            </AlertTitle>

            <Text fontSize="xs" fontWeight="bold" color="gray.500">9:41 AM</Text>
          </Flex>
        </Alert>



        {/* Form Title */}
        <Text fontSize="lg" fontWeight="bold" color="gray.700">
          Check/Print Your Result
        </Text>

        {/* Form inputs */}
        <HStack w="full" spacing={4}>
          <VStack align="start" w="full">
            <Text fontWeight="medium">Year</Text>
            <Select placeholder="Choose Year" focusBorderColor="blue.500" fontWeight="sm">
              <option value="2024">2024</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
            </Select>
          </VStack>

          <VStack align="start" w="full">
            <Text fontWeight="medium">Pin</Text>
            <Input placeholder="Paste your token" focusBorderColor="blue.500" fontWeight="sm"/>
          </VStack>
        </HStack>

        <HStack w="full" spacing={4}>
          <VStack align="start" w="full">
            <Text fontWeight="medium">Session</Text>
            <Select placeholder="Choose Term" focusBorderColor="blue.500" fontWeight="sm">
              <option value="term1">Term 1</option>
              <option value="term2">Term 2</option>
              <option value="term3">Term 3</option>
            </Select>
          </VStack>

          <VStack align="start" w="full">
            <Text fontWeight="medium">Serial Number</Text>
            <Input placeholder="Paste your serial number to proceed" focusBorderColor="blue.500" fontWeight="sm"/>
          </VStack>
        </HStack>
      </VStack>

      {/* Submit button */}
      <Flex  justifyContent="flex-end" mx={5}>
        <Button
          mx={10}
          bgColor="#001D3D" 
          color='#fff'
          mt={4}
          colorScheme="blue"
          size="lg"
          fontSize="md"
          borderRadius="md"
        >
          Check Result
        </Button>
      </Flex>
       
        
    </Box>
  );
}

export default StudentResult;
