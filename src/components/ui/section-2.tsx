import { Box, Flex, Grid, GridItem, Image, Text } from '@chakra-ui/react'

const Section2 = () => {
    return (
        <>
        <section className='lg:pt-40' >
            
 
        <div className='max-w-7xl p-6 '>
        <Grid templateColumns={{ base: "2fr", md: "1fr 1fr" }} gap={4}>
            <GridItem className='content-center'>
                <div className="flex flex-col  justify-center">
                    <Text className="header-title">
                        Light, Fast & Powerful
                    </Text>
                    <Text className="description-title pb-16" whiteSpace="pre-wrap">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                        mus.<br />
                        Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                    </Text>

                    <Grid
                        templateColumns={{ base: "2fr", md: "1fr 1fr" }}
                        gap={4}
                        className="w-full p-3 place-items-center" 
                    >
                        <GridItem>
                            <div className="flex flex-col items-center justify-center h-full">
                            <div className='mr-auto'>

                                <Image
                                    src='./icons/icon.svg'
                                    alt='Dan Abramov'
                                    className='h-3/4 pb-4' />

                                    <Text className='icon-title pb-4'>
                                        Title Goes Here
                                    </Text>
                                </div>
                                <Text className='icon-content pb-4' whiteSpace="pre-wrap">
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                                </Text>
                            </div>
                        </GridItem>
                        <GridItem>
                            <div className="flex flex-col items-center justify-center h-full">
                            <div className='mr-auto'>
                                <Image
                                    src='./icons/icon.svg'
                                    alt='Dan Abramov'
                                    className='h-3/4 pb-4' />
                                    <Text className='icon-title pb-4'>
                                        Title Goes Here
                                    </Text>
                                </div>
                                <Text className='icon-content pb-4' whiteSpace="pre-wrap">
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                                </Text>
                            </div>
                        </GridItem>
                    </Grid>
                </div>
            </GridItem>
            <GridItem>
                <div className="flex items-center justify-center h-full">

                    <Image
                        src='./mobile.svg'
                        alt='Dan Abramov'
                        className='h-3/4' />
                </div>
            </GridItem>
        </Grid>
        </div>
        </section>
        </>
    )

}
export default Section2;