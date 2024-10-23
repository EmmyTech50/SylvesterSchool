import { Box, Button, Flex, HStack, Image, Input, IconButton, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';
import { variables } from '../App';

function NavBar() {
  return (
    <Flex
      as="nav"
      bg="#842D19"
      paddingInline={variables.containerMargin}
      justify="space-between"
      align="center"
      wrap="wrap"
    >
      {/* Logo Section */}
      <Box>
        <Image src='src/IconFolder/schoolLogo.png' mt='2' mb='2' w={{ base: '120px', md: '150px' }} />
      </Box>

      {/* Links & Search Section for Larger Screens */}
      <Box display={{ base: 'none', md: 'block' }} mb='2' mt='2'>
        <HStack spacing={6} mb='2' mt='2' color='#ffff'>
          <Link to="/">Home</Link>
          <Link to="/admission">Admission</Link>
          <Link to="/academics">Academics</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </HStack>
        <Input placeholder="Search" bgColor="white" maxW="100%" />
      </Box>

      {/* Menu Icon for Smaller Screens */}
      <Box display={{ base: 'block', md: 'none' }}>
        <Menu>
          <MenuButton
            as={IconButton}
            icon={<HamburgerIcon />}
            variant="outline"
            aria-label="Navigation Menu"
          />
          <MenuList>
            <MenuItem as={Link} to="/">Home</MenuItem>
            <MenuItem as={Link} to="/admission">Admission</MenuItem>
            <MenuItem as={Link} to="/academics">Academics</MenuItem>
            <MenuItem as={Link} to="/about">About</MenuItem>
            <MenuItem as={Link} to="/contact">Contact</MenuItem>
          </MenuList>
        </Menu>
      </Box>

      {/* Search Input for Smaller Screens */}
      <Box display={{ base: 'block', md: 'none' }} mb='2' mt={2} w="full">
        <Input placeholder="Search" bgColor="white" />
      </Box>
    </Flex>
  );
}

export default NavBar;
