/* ./components/Navbar.jsx */
import NextLink from 'next/link'
import { Link, Box, Flex, Spacer, Image,Button as ChakraButton, Grid, GridItem, Text } from '@chakra-ui/react'

import Button from './buttons';

export const Footer = () => {
  return (
    <footer className='z-10 w-full  items-center justify-between font-mono text-sm footer-bg pt-10'>
    <Grid  templateColumns={{ base: "3fr", md: "1fr 1fr 1fr" }} p={6} justify="space-between">
    <GridItem>
      <Box>
        <Flex align="center" wrap="wrap" display={'flex' }>
          <Text className='logo-name'>©2023 Yourcompany</Text>
        </Flex>
      </Box>
    </GridItem>
    <GridItem className='text-center	'>
      <Box>
        <Link href="/" className='logo-header'>
          Landing
        </Link>
      </Box>
    </GridItem>
    <GridItem className='text-right	'>
      <Box>
        <Button display={'inline-block' }>Purchase Now</Button>
      </Box>
    </GridItem>
  </Grid>
  <hr style={{ border: "2px solid #CDD1D4" }}  />

        <Grid  templateColumns={{ base: "2fr", md: "1fr 1fr" }} p={6} justify="space-between" className='pt-10'  >
    <GridItem >
      <Box>
        <Flex align="center" wrap="wrap" display={'flex' }>
          <Link className='footer-link' as={NextLink} href='/' mr={4}>
            Home
          </Link>
          <Link className='footer-link' as={NextLink} href='/about' mr={4}>
            About
          </Link>
          <Link className='footer-link' as={NextLink} href='/contact' mr={4}>
            Contact
          </Link>
        </Flex>
      </Box>
    </GridItem>
    <GridItem justifySelf="flex-end">
      <Box  >
        <Flex  gap='5'>


        <Image
        
                  src='./icons/f.svg'
                  alt='Dan Abramov'
                  className='h-3/4' />  
      <Image
                  src='./icons/instagram.svg'
                  alt='Dan Abramov'
                  className='h-3/4' />  
       <Image
                  src='./icons/linkedln.svg'
                  alt='Dan Abramov'
                  className='h-3/4' />     
                
        <Image
                  src='./icons/twitter.svg'
                  alt='Dan Abramov'
                  className='h-3/4' />
                        
                        <Image
                  src='./icons/yt.svg'
                  alt='Dan Abramov'
                  className='h-3/4' />  
  
        </Flex>
   
        </Box>
    </GridItem>
  </Grid>

  </footer>
  );
}

export default Footer;