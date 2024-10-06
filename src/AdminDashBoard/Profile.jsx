import { Box, Grid, GridItem, Text, Avatar, Button, IconButton, Input, Flex, Icon, FormLabel, Stack, VStack, Badge} from '@chakra-ui/react';
import { variables } from '../App';
import { FaBell, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

function Pofile() {
  return (
    <Flex direction="column" align="center" overflowY="auto" maxH="100vh" bg={variables.primaryColor2} p={5}>
        {/* Main Content Container */}
        <Box bg="#ffff" p={5} mt={5} borderRadius="lg" boxShadow="md" w="full" maxW="1000px">
            <Flex justify="space-between" >
                <Flex align="center">
                    <VStack spacing={4}>
                        <Avatar size="2xl" name="Eze Chukwu" src="https://bit.ly/broken-link" />
                        <Text fontSize="2xl" fontWeight="bold">Eze ChukwuEmeka.D</Text>
                        <Text fontSize="md" fontWeight="bold" color="#001D3D">Admin</Text>
                    </VStack>

                    <Flex ml={5} align="center" justify="center" flexWrap="wrap">
                        <VStack align="flex-start" mr={8}>
                            <Text fontSize="lg" fontWeight="bold">Phone</Text>
                            <Flex align="center">
                                <Icon as={FaPhoneAlt} color="yellow.500" mr={2} />
                                <Text fontSize="md" fontWeight="bold">+234 701 098 5844</Text>
                            </Flex>
                        </VStack>

                        <VStack align="flex-start" mr={8}>
                            <Text fontSize="lg" fontWeight="bold">Email</Text>
                            <Flex align="center">
                                <Icon as={FaEnvelope} color="yellow.500" mr={2} />
                                <Text fontSize="md" fontWeight="bold">ezemekaskj@gmail.com</Text>
                            </Flex>
                        </VStack>

                        <VStack align="flex-start">
                            <Text fontSize="lg" fontWeight="bold">Location</Text>
                            <Flex align="center">
                                <Icon as={FaMapMarkerAlt} color="yellow.500" mr={2} />
                                <Text fontSize="md" fontWeight="bold">Jahi, Abuja</Text>
                            </Flex>
                        </VStack>
                    </Flex>
                </Flex>

                {/* Notification Bell */}
                <Box position="relative">
                <IconButton
                    icon={<FaBell />}
                    aria-label="Notifications"
                    isRound
                    size="sm"
                    bgColor={variables.primaryColor2}
                />
                </Box>
            </Flex>
        </Box>

        {/* Form Component */}
        <Box bg="white" p={6} borderRadius="lg" boxShadow="md" mt={6} w="full" maxW="1000px">
        <Stack direction="row" position="relative" top="-24px" left="-25px" h="25px">
            <Badge color="#fff" bgColor="#001D3D" borderTopLeftRadius="5px" fontSize="lg" fontWeight="bold">
            Personal Information
            </Badge>
        </Stack>

        <Grid templateColumns="repeat(2, 1fr)" gap={6}>
            <GridItem>
            <FormLabel fontSize="md" fontWeight="bold">Name</FormLabel>
            <Input placeholder="Eze ChukwuEmeka David" fontSize="sm" fontWeight="bold" />
            </GridItem>
            <GridItem>
            <FormLabel fontSize="md" fontWeight="bold">Email Address</FormLabel>
            <Input placeholder="ezemekaskj@gmail.com" fontSize="sm" fontWeight="bold" />
            </GridItem>
            <GridItem>
            <FormLabel fontSize="md" fontWeight="bold">Password</FormLabel>
            <Input type="password" placeholder="*************" fontSize="sm" fontWeight="bold" />
            </GridItem>
            <GridItem>
            <FormLabel fontSize="md" fontWeight="bold">Sex</FormLabel>
            <Input placeholder="Male" fontSize="sm" fontWeight="bold" />
            </GridItem>
            <GridItem>
            <FormLabel fontSize="md" fontWeight="bold">Date of Birth</FormLabel>
            <Input type="date" fontSize="sm" fontWeight="bold" />
            </GridItem>
            <GridItem>
            <FormLabel fontSize="md" fontWeight="bold">Next of Kin</FormLabel>
            <Input placeholder="Chioma Eze" fontSize="sm" fontWeight="bold" />
            </GridItem>
            <GridItem>
            <FormLabel fontSize="md" fontWeight="bold">State of Origin</FormLabel>
            <Input placeholder="Enugu State" fontSize="sm" fontWeight="bold" />
            </GridItem>
            <GridItem>
            <FormLabel fontSize="md" fontWeight="bold">Highest Level of Qualification</FormLabel>
            <Input placeholder="B.Sc Computer Science" fontSize="sm" fontWeight="bold" />
            </GridItem>
            <GridItem>
            <FormLabel fontSize="md" fontWeight="bold">L.G.A</FormLabel>
            <Input placeholder="Igboeze North" fontSize="sm" fontWeight="bold" />
            </GridItem>
            <GridItem>
            <FormLabel fontSize="md" fontWeight="bold">Town</FormLabel>
            <Input placeholder="Jahi one opposite police station" fontSize="sm" fontWeight="bold" />
            </GridItem>
        </Grid>

        <Flex justifyContent="flex-end">
            <Button
            mt={4}
            bgColor="#001D3D"
            color="#fff"
            fontSize="lg"
            fontWeight="bold"
            px="6"
            width="160px"
            h="6vh"
            >
            Save
            </Button>
        </Flex>
        </Box>
    </Flex>
  );
}

export default Pofile;
