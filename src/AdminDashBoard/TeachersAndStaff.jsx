import React, { useState } from 'react';
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Avatar,
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  HStack,
  IconButton,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Select,
  Text,
  VStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
} from '@chakra-ui/react';
import { FaEllipsisV } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { variables } from '../App';

// AssignSubjectsModal (New Modal)
const subjects = {
  GENERAL: ['Physics', 'Chemistry', 'Biology', 'Further Mathematics', 'Agricultural Science'],
  SCIENCE: ['Math', 'English', 'Civic Education', 'Economics'],
  ART: ['Government', 'Literature – In- English', 'C-R-K', 'Fine Art', 'French'],
  Commercial: ['Commerce', 'Data Processing'],
  Trade: ['Book Keeping', 'Typewriting', 'Office Practice'],
};

const AssignSubjectsModal = ({ isOpen, onClose }) => {
  const [selectedSubjects, setSelectedSubjects] = useState([]);

  const toggleSubject = (subject) => {
    if (selectedSubjects.includes(subject)) {
      setSelectedSubjects(selectedSubjects.filter((s) => s !== subject));
    } else {
      setSelectedSubjects([...selectedSubjects, subject]);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg">
      <ModalOverlay bgColor='#D9D9D9' />
      <ModalContent>
        <ModalHeader color='#001D3D' fontWeight="bold" fontSize="md" align="center">Assign Subjects</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {Object.keys(subjects).map((category) => (
            <VStack align="flex-start" spacing={3} mb={4} key={category}>
              <Text fontWeight="bold" fontSize="md">{category}</Text>
              <Grid templateColumns="repeat(auto-fit, minmax(120px, 1fr))" gap={5} width="100%">
                {subjects[category].map((subject) => (
                  <Button
                    size='sm'
                    color={selectedSubjects.includes(subject) ? '#ffff' : "#001D3D"}
                    outlineColor={"#001D3D"}
                    variant='#ffff'
                    key={subject}
                    onClick={() => toggleSubject(subject)}
                    bgColor={selectedSubjects.includes(subject) ? "#001D3D" : '#ffff'}
                   
                  >
                    {subject}
                  </Button>
                ))}
              </Grid>
            </VStack>
          ))}
        </ModalBody>

        <ModalFooter>
          <Button bgColor="#001D3D" color='#ffff' mr={3} onClick={onClose}>
            Assign ({selectedSubjects.length})
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

const staff = [
  { name: 'Emeka.D', role: 'Nurse', avatar: '/path-to-image' },
  { name: 'Philip.M', role: 'Buser', avatar: '/path-to-image' },
  { name: 'Mathew.D', role: 'Cleaner', avatar: '/path-to-image' },
  { name: 'Mathew.D', role: 'Cleaner', avatar: '/path-to-image' },
  { name: 'Mathew.D', role: 'Cleaner', avatar: '/path-to-image' },
  { name: 'Mathew.D', role: 'Cleaner', avatar: '/path-to-image' },
  { name: 'Mathew.D', role: 'Cleaner', avatar: '/path-to-image' },
  { name: 'Mathew.D', role: 'Cleaner', avatar: '/path-to-image' },
  { name: 'Mathew.D', role: 'Cleaner', avatar: '/path-to-image' },
  // Add more staff here
];

function TeachersAndStaff() {
  // Modal states
  const { isOpen, onOpen, onClose } = useDisclosure(); // Delete Dialog
  const { isOpen: isRestrictOpen, onOpen: onRestrictOpen, onClose: onRestrictClose } = useDisclosure(); // Restrict Dialog
  const { isOpen: isAddOpen, onOpen: onAddOpen, onClose: onAddClose } = useDisclosure(); // Add Staff Modal
  const { isOpen: isAssignOpen, onOpen: onAssignOpen, onClose: onAssignClose } = useDisclosure(); // Assign Subject Modal
  const { isOpen: isFormTeacherOpen, onOpen: onFormTeacherOpen, onClose: onFormTeacherClose } = useDisclosure(); // Make Form Teacher Modal

  const cancelRef = React.useRef();

  return (
    <>
      <Flex direction="column" align="center" overflowY="auto" maxH="100vh" bg="#f0f0f0" p={[2, 4, 5]}>
        <Box w="full" maxW="1200px" p={4}>
          {/* Title and Add Button */}
          <Flex justify="space-between" alignItems="center">
            <Heading fontSize="lg" color="#001D3D">Teaching Staff</Heading>
            <Flex>
              <Select width="160px" fontSize="md" fontWeight="bold">
                <option value="">All</option>
                <option value="teaching">Teaching Staff</option>
                <option value="nonstaff">Non-Teaching Staff</option>
              </Select>
              <Button bgColor="#001D3D" color="#fff" ml={4} onClick={onAddOpen}>
                + Add
              </Button>
            </Flex>
          </Flex>

          {/* Search Input */}
          <Box mt={4}>
            <Input 
             h="7vh"
             placeholder="Search"
             fontSize="md"
             fontWeight="bold"
             width="250px"
             bg="white"
             borderRadius="md"
            />
          </Box>

          {/* Staff List */}
          <Grid templateColumns="repeat(auto-fit, minmax(250px, 1fr))" gap={6} mt={6}>
            {staff.map((person, index) => (
              <Box key={index} 
              bg="white" 
              h='25vh'
              p={4} 
              borderRadius="md"
              display="flex"
              justifyContent="space-between"
              >
                <VStack >
                  <Avatar name={person.name} src={person.avatar} />
                  <Text fontWeight="bold">{person.name}</Text>
                  <Text>{person.role}</Text>
                </VStack>
                <Menu>
                  <MenuButton as={IconButton} icon={<FaEllipsisV />}  bg="#ffff" />
                  <MenuList>
                    <MenuItem onClick={onAssignOpen} fontSize="sm" fontWeight="bold">Assign a Subject</MenuItem>
                    <MenuItem onClick={onFormTeacherOpen} fontSize="sm" fontWeight="bold">Make Form Teacher</MenuItem>
                    <MenuItem fontSize="sm" fontWeight="bold"><Link to='/staff/profile'>View Profile</Link></MenuItem>
                    <MenuItem fontSize="sm" fontWeight="bold"><Link to='/staff/students'>View Student List</Link></MenuItem>
                    <HStack spacing={2} mx={4} mt={2}>
                      <Button colorScheme="red" onClick={onRestrictOpen}>Restrict</Button>
                      <Button colorScheme="red" onClick={onOpen}>Delete</Button>
                    </HStack>
                  </MenuList>
                </Menu>
              </Box>
            ))}
            </Grid>

              {/* Pagination */}
              <Box
                mx={5}
                mb={5}
                mt={5}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <HStack>
                  <Text color="#001D3D" fontSize="xl" fontWeight="bold">Overall Staff Count</Text>
                  <Text fontSize="md" fontWeight="bold">100</Text>
                </HStack>

                <HStack spacing="4" mt="6">
                  <Button bgColor="#001D3D" color='#ffff'>1</Button>
                  <Button bgColor="#001D3D" color='#ffff'>2</Button>
                  <Button bgColor="#001D3D" color='#ffff'>3</Button>
                </HStack>
              </Box>
            
          
        </Box>

        {/* Add Staff Modal */}
        <Modal isOpen={isAddOpen} onClose={onAddClose} size="lg">
          <ModalOverlay bgColor='#D9D9D9'/>
          <ModalContent>
            <ModalHeader color="#001D3D" fontSize="xl" fontWeight="bold" align='center'>Add New Staff</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Grid templateColumns="repeat(2, 1fr)" gap={4}>
                <FormControl>
                  <FormLabel color="#001D3D" fontSize="sm" fontWeight="bold">Name</FormLabel>
                  <Input placeholder="Name" />
                </FormControl>
                <FormControl>
                  <FormLabel color="#001D3D" fontSize="sm" fontWeight="bold" >Email Address</FormLabel>
                  <Input placeholder="Email Address" />
                </FormControl>
                <FormControl>
                  <FormLabel color="#001D3D" fontSize="sm" fontWeight="bold" >Phone</FormLabel>
                  <Input placeholder="Phone" />
                </FormControl>
                <FormControl>
                  <FormLabel color="#001D3D" fontSize="sm" fontWeight="bold" >Password</FormLabel>
                  <Input type="password" placeholder="Password" />
                </FormControl>
                <FormControl>
                  <FormLabel color="#001D3D" fontSize="sm" fontWeight="bold" >Sex</FormLabel>
                  <Input placeholder="Sex" />
                </FormControl>
                <FormControl>
                  <FormLabel color="#001D3D" fontSize="sm" fontWeight="bold">Date of Birth</FormLabel>
                  <Input placeholder="Date of Birth" type="date" />
                </FormControl>
                <FormControl>
                  <FormLabel color="#001D3D" fontSize="sm" fontWeight="bold">Highest Level of Qualification</FormLabel>
                  <Input placeholder="Highest Level of Qualification" />
                </FormControl>
                <FormControl>
                  <FormLabel color="#001D3D" fontSize="sm" fontWeight="bold">State of Origin</FormLabel>
                  <Input placeholder="State of Origin" />
                </FormControl>
                <FormControl>
                  <FormLabel color="#001D3D" fontSize="sm" fontWeight="bold">Local Government Area</FormLabel>
                  <Input placeholder="Local Government Area" />
                </FormControl>
                <FormControl>
                  <FormLabel color="#001D3D" fontSize="sm" fontWeight="bold">Next of Kin</FormLabel>
                  <Input placeholder="Next of Kin" />
                </FormControl>
                <FormControl>
                  <FormLabel color="#001D3D" fontSize="sm" fontWeight="bold">Town</FormLabel>
                  <Input placeholder="Town" />
                </FormControl>
              </Grid>
            </ModalBody>
            <ModalFooter>
              <Button w={20} bgColor="#001D3D" color='#ffff' mr={3} onClick={onAddClose}>
                Add
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

        {/* Assign Subject Modal (Integrated) */}
        <AssignSubjectsModal isOpen={isAssignOpen} onClose={onAssignClose} />

        {/* Make Form Teacher Modal */}
        <Modal isOpen={isFormTeacherOpen} onClose={onFormTeacherClose} size="lg">
          <ModalOverlay bgColor='#D9D9D9'/>
          <ModalContent>
            <ModalHeader color="#001D3D" fontSize="xl" fontWeight="bold" align='center'>Make Form Teacher</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            
             {/* Add form teacher assignment form or content here */}
             <Text color="#001D3D" fontWeight="bold" align='center'>Assign this staff as the form teacher to:</Text>
              <FormControl mt={4}>
                <FormLabel color="#001D3D" fontWeight="bold">Select Class</FormLabel>
                <Select placeholder="Select class" outlineColor="#001D3D" color='#001D3D'>
                  <option value="class1">Class 1</option>
                  <option value="class2">Class 2</option>
                  <option value="class3">Class 3</option>
                  {/* Add more classes as needed */}
                </Select>
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button w={20} bgColor="#001D3D" color='#ffff' mr={3} onClick={onFormTeacherClose}>
                Assign
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

        {/* Delete Confirmation Dialog */}
        <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
        >
          <AlertDialogOverlay bgColor='#D9D9D9'>
            <AlertDialogContent >
              <AlertDialogHeader fontSize="lg" fontWeight="bold">
                Delete Staff
              </AlertDialogHeader>
              <AlertDialogBody fontSize="sm" fontWeight="bold">
                Are you sure you want to delete this staff? This action cannot be undone.
              </AlertDialogBody>
              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={onClose} mr={5} bgColor="#001D3D" color='#ffff' >
                  Cancel
                </Button>
                <Button colorScheme="red" onClick={() => { /* handle delete logic */ }}>
                  Delete
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>

        {/* Restrict Confirmation Dialog */}
        <AlertDialog
          isOpen={isRestrictOpen}
          leastDestructiveRef={cancelRef}
          onClose={onRestrictClose}
        >
          <AlertDialogOverlay bgColor='#D9D9D9'> 
            <AlertDialogContent>
              <AlertDialogHeader fontSize="lg" fontWeight="bold">
                Restrict Staff
              </AlertDialogHeader>
              <AlertDialogBody fontSize="sm" fontWeight="bold">
                Are you sure you want to restrict this staff? This action may affect their access rights.
              </AlertDialogBody>
              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={onRestrictClose} mr={5} bgColor="#001D3D" color='#ffff'>
                  Cancel
                </Button>
                <Button colorScheme="yellow" onClick={() => { /* handle restrict logic */ }}>
                  Restrict
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </Flex>
    </>
  );
}

export default TeachersAndStaff;
              
