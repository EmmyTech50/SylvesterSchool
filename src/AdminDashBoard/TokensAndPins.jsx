import { Badge, Box, Button, Grid, Heading, HStack, Stat, StatLabel, StatNumber, Tab, Table, TabList, Tabs, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react';
import React from 'react';
import { MdAdd } from 'react-icons/md';
import { variables } from '../App';

const StatCard = ({ label, value }) => (
  <Box bg="white" p={5} borderRadius="md" boxShadow="sm" w="100%">
    <Stat>
      <StatLabel>{label}</StatLabel>
      <StatNumber>{value}</StatNumber>
    </Stat>
  </Box>
);

const TransactionTable = () => (
  <Table variant="simple">
    <Thead>
      <Tr>
        <Th size="xl" fontWeight="1000" color="#001D3D">Transaction</Th>
        <Th size="xl" fontWeight="1000" color="#001D3D">Tokens</Th>
        <Th size="xl" fontWeight="1000" color="#001D3D">Date</Th>
        <Th size="xl" fontWeight="1000" color="#001D3D">Status</Th>
      </Tr>
    </Thead>
    <Tbody>
      <TransactionRow transaction="Request Token" tokens="5000 tokens" date="Sep 5th 2024" status="Pending" />
      <TransactionRow transaction="Request Token" tokens="5000 tokens" date="Sep 5th 2024" status="Successful" />
      <TransactionRow transaction="Request Token" tokens="5000 tokens" date="Sep 5th 2024" status="Successful" />
    </Tbody>
  </Table>
);

const TransactionRow = ({ transaction, tokens, date, status }) => (
  <Tr>
    <Td size="sm" fontWeight="500">{transaction}</Td>
    <Td size="sm" fontWeight="500">{tokens}</Td>
    <Td size="sm" fontWeight="500">{date}</Td>
    <Td>
      <Badge colorScheme={status === "Successful" ? "green" : "orange"}>
        {status}
      </Badge>
    </Td>
  </Tr>
);

function TokensAndPins() {
  return (
    
    <Box bg={variables.primaryColor2} overflowY="auto" maxH="100vh" p={5}>
      {/* Header */}
       <HStack justifyContent="space-between" mb={5} borderRadius="md" mx={5}>
        <Heading size="lg" fontWeight="bold" color="#001D3D">
          Tokens and Pin
        </Heading>
        <Button leftIcon={<MdAdd />} bg="#001D3D" color="white" fontSize="md" fontWeight="bold">
          Get Tokens
        </Button>
      </HStack>

      <Box mb={4} mx={5}>
        <Text fontSize="lg" fontWeight="semibold" color="#001D3D">Overview</Text>
      </Box>

      {/* Tabs for "Tokens history" and "Pins" */}
      <Tabs variant="unstyled" borderBottom="1px solid" borderColor="gray.400" >
        <TabList>
          <Tab _selected={{ color: "#001D3D", borderBottom: "2px solid #001D3D" }} fontWeight="bold">
            Tokens history
          </Tab>
          <Tab _selected={{ color: "#001D3D", borderBottom: "2px solid #001D3D" }} fontWeight="bold">
            Pins
          </Tab>
        </TabList>
      </Tabs>

      {/* Overview Cards */}
      <HStack spacing={8} mb={8} mt={5} mx={5}>
        <StatCard label="Total Number of Token Bought" value="1m" />
        <StatCard label="Total Number of Token Available" value="30K" />
        <StatCard label="Overall Token Expense" value="50k" />
      </HStack>

      {/* Transaction History */}
      <Box bg="white" p={5} borderRadius="md" boxShadow="sm" mx={5}>
        <Heading size="md" fontWeight="bold" mb={5}>Transaction History</Heading>
        <TransactionTable />
      </Box>
    </Box>
  );
}

export default TokensAndPins;
