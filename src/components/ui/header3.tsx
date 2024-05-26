/* ./components/Navbar.jsx */
import NextLink from 'next/link'
import { Link, Box, Flex, Spacer, Button as ChakraButton, Grid, GridItem } from '@chakra-ui/react'

import Button from './buttons';

export const Navbar3 = () => {
  return (
    <nav className='z-10 w-full max-w-7xl items-center justify-between font-mono text-sm'>
      {/* <Flex align="center" justify="space-between" wrap="wrap" p={6}> */}
      <Grid templateColumns={{ base: "2fr", md: "1fr 1fr" }} pb={6}  >
      <GridItem className='text-start'>
        <Box>
          <Link href="/" className='logo-header-2'>
            Landing
          </Link>
        </Box>
        </GridItem>
      <GridItem className='grid-btn' >

      <Box >
          <div className='block text-end  align-center text-wrap' >
          <Flex display={{ base: 'none', lg: 'flex' }} alignItems='center'>

            <Link className='logo-header-3' as={NextLink} href='/' mr={4}>
              Home
            </Link>
            <Link className='logo-header-3' as={NextLink} href='/about' mr={4}>
              About
            </Link>
            <Link className='logo-header-3' as={NextLink} href='/contact' mr={4}>
              Contact
            </Link>
            <Button display={{ base: 'none', md: 'inline-block' }}>Purchase UI Kit</Button>
            </Flex>
          </div>
      </Box>
        </GridItem>
        </Grid>
    </nav>
  );
}

export default Navbar3;