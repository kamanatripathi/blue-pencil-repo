/* ./components/Navbar.jsx */
import NextLink from 'next/link'
import { Link, Box, Flex, Spacer, Button as ChakraButton, Grid, GridItem } from '@chakra-ui/react'

import Button from './buttons';

export const Navbar2 = () => {
  return (
    <nav className='z-10 w-full max-w-7xl items-center justify-between font-mono text-sm'>
      {/* <Flex align="center" justify="space-between" wrap="wrap" p={6}> */}
      <Grid templateColumns={{ base: "3fr", md: "1fr 1fr 1fr" }} p={6} justify="space-between " align="center" >
      <GridItem className='text-start'>
        <Box>
          <Link href="/" className='logo-header-2'>
            Landing
          </Link>
        </Box>
        </GridItem>
      <GridItem className='text-center'>

      <Box>
          <Flex align="center" wrap="wrap" display={{ base: 'none', md: 'flex' }}>
            <Link className='logo-header-3 ' as={NextLink} href='/home' mr={4}>
              Home
            </Link>
            <Link className='logo-header-3' as={NextLink} href='/about' mr={4}>
              About
            </Link>
            <Link className='logo-header-3' as={NextLink} href='/contact' mr={4}>
              Contact
            </Link>
          </Flex>
        </Box>
        </GridItem>

        <GridItem className='text-end'>
        <Box>
        <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }}
              gap={2}
              className="pt-3"
              textAlign={{base:"center", lg:"left"}}
              justifyContent={{ base: "left", md: "flex-start", }}
                         >
              <GridItem>
                
          <Button display={{ base: 'none', md: 'inline-block' }}>Purchase UI Kit</Button>
          </GridItem> 
          <GridItem>

          <Button variant='tertial' display={{ base: 'none', md: 'inline-block' }}>Contact Us</Button> &nbsp;
        </GridItem>
        </Grid>
        </Box>
        </GridItem>
        </Grid>
    </nav>
  );
}

export default Navbar2;