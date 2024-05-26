import { Box, Flex, Grid, GridItem, Image, Text } from '@chakra-ui/react'
import Button from './buttons'

const Section1 = () => {
  return (
    <>
      <section className='max-w-7xl p-6'>

        <Grid templateColumns={{ base: "2fr", md: "1fr 1fr" }} gap={4}>
          <GridItem className='content-center'>
            <div className="flex flex-col  justify-center">
              <Text className="landing-title">
                Introduce Your Product Quickly & Effectively
              </Text>
              <Text className="landing-subtitle">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
              </Text>
            </div>
            <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }}
              gap={2}
              className="pt-3"
              textAlign={{base:"center", lg:"left"}}
              justifyContent={{ base: "left", md: "flex-start", }}
                         >
              <GridItem>
                <Button variant='primary'>Purchase UI Kit</Button>
              </GridItem>
              <GridItem>
                <Button variant='secondary'>Learn More</Button>
              </GridItem>
            </Grid>

          </GridItem>
          <GridItem>
            <Image
            className='landing-img'
              //className="absolute top-0 lg-h-screen w-1/2 md:w-fulls" 
              src='./designer_1.png'
              alt='Dan Abramov'
            />
          </GridItem>
        </Grid>

      </section>
    </>

  )
}

export default Section1
