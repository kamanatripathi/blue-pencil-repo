import { Box, Text , Image, Grid, GridItem} from '@chakra-ui/react'
import Button from './buttons'

const Section6 = () => {
  return (
    <section className='pricing-bg w-full clipping pb-40 '>
    <div className='p-10'>
      <Box className='flex flex-col items-center'>
        <Text className='footer-title'>A Price To Suit Everyone</Text>
        <Text className='footer-subtitle padding-10' textAlign={'center'}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus </Text>
        <Text className='pricing-title'>$40</Text>
        <Text className='pricing-subtitle pb-10'>UI Design Kit</Text>
        <Text className='pricing-sub'>See, One price. Simple.</Text>
        <Text className='text-align-center-cs'><Button variant='primary'>Purchase Now</Button></Text>
      </Box>
    </div>
  </section>
  )
}

export default Section6
