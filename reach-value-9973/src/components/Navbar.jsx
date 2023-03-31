import { Box, Flex, Heading, Text, Image, HStack, ButtonGroup, Spacer, VStack, Stack, Container } from "@chakra-ui/react"
import React from "react"
import { PhoneIcon, AddIcon, WarningIcon, Search2Icon } from '@chakra-ui/icons'
import { AiOutlineBook } from "react-icons/ai";
import { GiShoppingCart } from "react-icons/gi"
import { RiAccountCircleLine } from "react-icons/ri"
export default function Navbar() {



    return (
        <Box position={"sticky"} bgColor={"white"} top={0} zIndex={9999} width="100%" border='1px' borderColor='gray.200' mt={0} boxShadow='rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;'>

            <Flex minWidth='100%' pr='20' pl='90' pt='0' alignItems='center' gap='2'>

                <HStack gap={"33px"}>
                    <img
                        // boxSize='100px'
                        // objectFit='cover'
                        width={150}
                        src="./images/LaneLogoCropped.png"
                        alt='Lane Attire'
                    />

                    <Heading fontSize='15'>WOMEN</Heading>
                    <Heading size='sm' fontSize='15'>MEN</Heading>
                    <Heading size='sm' fontSize='15'>KIDS</Heading>
                    <Heading size='sm' fontSize='15'>HOME</Heading>
                    <Heading size='sm' fontSize='15' color="red.500">OFFERS</Heading>

                </HStack>

                <Spacer />


                <ButtonGroup gap='10'>




                    <VStack pt={3} >

                        <AiOutlineBook fontSize={20} />
                        <Text fontSize="11">
                            SCRAPBOOK</Text>
                    </VStack>



                    <VStack pt={3}>
                        {/* <Search2Icon boxSize={5} /> */}
                        <Search2Icon fontSize={20} />

                        <Text fontSize="11">

                            SEARCH
                        </Text>
                    </VStack>

                    <VStack pt={2} >
                        <GiShoppingCart fontSize={26} />
                        <Text fontSize="11">
                            CART
                        </Text>
                    </VStack>

                    <VStack pt={2} >
                        <RiAccountCircleLine fontSize={26} />

                        <Text fontSize="11">
                            PROFILE
                        </Text>
                    </VStack>


                </ButtonGroup>

            </Flex>
        </Box >
    )
}

//add real Icons rigth side