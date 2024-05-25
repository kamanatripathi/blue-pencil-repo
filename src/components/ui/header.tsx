/* ./components/Navbar.jsx */
import NextLink from 'next/link'
import { Link } from '@chakra-ui/react'

import Button from './buttons';

export const Navbar = () => {
  return (


    <nav className='z-10 w-full max-w-7xl items-center justify-between font-mono text-sm lg:flex'>
     <ul  className='flex flex-end' >
         <li className='mr-4'>
         <Link className='link-header' as={NextLink} href='/home'>
          Home 
           </Link>
         </li>
         <li className='mr-4'>
         <Link className='link-header' as={NextLink} href='/home'>
             About
           </Link>
         </li>
         <li className='mr-4'>
         <Link className='link-header' as={NextLink} href='/home'>
             Contact
           </Link>

         </li>
       </ul>
       <Link href="/" className='mx-auto'>
         <p className='logo-header'>Landing</p>
       </Link>
       <Button>Buy Now</Button>
     </nav>


  );
};

export default Navbar;