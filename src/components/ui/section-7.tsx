import { Box, Flex, Grid, GridItem, Image, Text } from '@chakra-ui/react'
import Button from './buttons'

const Section7 = () => {
    return (
        <>
            <section>



                <Grid templateColumns={{ base: "2fr", md: "1fr 1fr" }} >
                    <GridItem>
                        <div className="flex items-center  h-full">
                            <Image
                                src='./feature-7.jpg'
                                alt='Dan Abramov'
                                className='h-full' />
                        </div>
                    </GridItem>
                    <GridItem className='content-center'>
                <div className="flex flex-col  justify-center  pr-20">
                       <div className='pb-5'>
                       <Text className="header-title">
                            Light, Fast & Powerful </Text>
                        </div> 
                        <Text className="description-title pb-10" whiteSpace="pre-wrap">

                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                            mus.<br/>
                            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                        </Text>
                     

                        <Grid templateColumns={{ base: "2fr", md: "1fr 1fr" }} gap={4}>
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

                </Grid>

            </section>
        </>

    )
}

export default Section7
