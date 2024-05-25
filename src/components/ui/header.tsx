/* ./components/Navbar.jsx */
import NextLink from 'next/link'
import { Link, Box, Flex, Spacer, Button as ChakraButton } from '@chakra-ui/react'

import Button from './buttons';

export const Navbar = () => {
  return (
    <nav className='z-10 w-full max-w-7xl items-center justify-between font-mono text-sm'>
      <Flex align="center" justify="space-between" wrap="wrap" p={6}>
        <Box>
          <Link href="/" className='logo-header'>
            Landing
          </Link>
        </Box>
        <Spacer />
        <Box>
          <Flex align="center" wrap="wrap" display={{ base: 'none', md: 'flex' }}>
            <Link className='link-header' as={NextLink} href='/home' mr={4}>
              Home
            </Link>
            <Link className='link-header' as={NextLink} href='/about' mr={4}>
              About
            </Link>
            <Link className='link-header' as={NextLink} href='/contact' mr={4}>
              Contact
            </Link>
          </Flex>
        </Box>
        <Spacer />
        <Box>
          <Button display={{ base: 'none', md: 'inline-block' }}>Buy Now</Button>
        </Box>
      </Flex>
    </nav>
  );
}

export default Navbar;