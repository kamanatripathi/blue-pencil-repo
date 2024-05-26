import { Box, Text, Image, Grid, GridItem } from '@chakra-ui/react'

const Section5 = () => {
  return (
    <>
      <section className='max-w-7xl p-6'>
        <Box>
          <Grid templateColumns={{ base: "2fr", md: "1fr 1fr" }} gap={4}>
            <GridItem>
              <div className="flex items-center justify-center h-full">

                <Image
                  src='./mention.png'
                  alt='Dan Abramov'
                  className='h-3/4' />
              </div>
            </GridItem>
            <GridItem className='content-center'>
              <div className="flex flex-col  justify-center">
                <Text className="header-title">
                  Light, Fast & Powerful
                </Text>
                <Text className="description-title" whiteSpace="pre-wrap">

                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                  mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                </Text>
              </div>
            </GridItem>

          </Grid>

        </Box>
      </section>
    </>

  )
}

export default Section5
