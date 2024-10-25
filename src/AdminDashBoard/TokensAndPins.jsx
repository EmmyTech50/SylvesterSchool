import {Box, Button, Heading, useDisclosure, HStack, Image, Stat, StatLabel, StatNumber, Tab, Table, TabList, Tabs, Tbody, Td, Text, Th, Thead, Tr, VStack, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, FormControl, FormLabel, Select, ModalFooter, ModalCloseButton, Input } from '@chakra-ui/react';
import React, {useState} from 'react';
import { MdAdd } from 'react-icons/md';
import { variables } from '../App';
import ready from '../assets/ready.png';
import pendng from '../assets/pendng.png';

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
        {status === 'Successful' ? (
          <>
            <HStack>
              <Text>Successful</Text>
              <Image src={ready}/>
            </HStack>
          </>
        ) : (
              <>
                <HStack>
                  <Text>Pending</Text>
                  <Image src={pendng}/>
                </HStack>
              </>
        )}
  </Td>
</Tr>
);
        

function TokensAndPins() {

  // Get Tokens Modal Defining:
  const { isOpen, onOpen, onClose } = useDisclosure(); 
  const [tokenInput, setTokenInput] = useState(20000);
  const tokenPriceRate = 0.875; // Price per token

   // Calculate the price based on the entered token amount
   const calculatePrice = (tokenAmount) => {
    return (tokenAmount * tokenPriceRate).toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  return (
    <>
    <Box bg={variables.primaryColor2} overflowY="auto" maxH="100vh" p={5}>
      {/* Header */}
      <HStack justifyContent="space-between" mb={5} borderRadius="md" mx={5}>
        <Heading size="lg" fontWeight="bold" color="#001D3D">
          Tokens and Pin
        </Heading>
        <Button onClick={onOpen} leftIcon={<MdAdd />} bg="#001D3D" color="white" fontSize="md" fontWeight="bold">
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

    {/* Make Form Teacher Modal */}
    <Modal isOpen={isOpen} onClose={onClose} size="lg">
      <ModalOverlay bgColor='#D9D9D9'/>
      <ModalContent bgColor='#F5FCEC'>
        <ModalHeader color="#001D3D" fontSize="xl" fontWeight="bold" align='center'>Get Token</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
            <VStack spacing={6}>
                  {/* Token Input Field */}
                  <Input
                    value={tokenInput}
                    onChange={(e) => setTokenInput(e.target.value)}
                    textAlign="center"
                    fontSize="lg"
                    w='70%'
                    placeholder="Enter token amount"
                    type="number"
                    borderColor="5px solid #001D3D" 
                    _focus={{ borderColor: ' #001D3D', boxShadow: ' #001D3D' }}
                  />
              {/* Dynamic Price Output */}
              <Text fontSize="2xl" fontWeight="bold" color="gray.700">
                ${calculatePrice(tokenInput)} {/* Display calculated price */}
              </Text>
            </VStack>
        </ModalBody>
        
        {/* Footer Buttons */}
        <ModalFooter>
          <Button outlineColor="#001D3D" color='#001D3D' mr={3} onClick={onClose}>
            Continue...
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
    </>
  );
}

export default TokensAndPins;
