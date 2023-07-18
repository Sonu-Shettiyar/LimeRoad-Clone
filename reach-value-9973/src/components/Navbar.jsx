import { Box, Flex, Heading, Text, Image, HStack, ButtonGroup, Spacer, VStack, Stack, Container, Menu, MenuList, MenuItem, MenuButton, Button } from "@chakra-ui/react"
import React from "react"
import { PhoneIcon, AddIcon, WarningIcon, Search2Icon, ChevronDownIcon } from '@chakra-ui/icons';
import { AiOutlineBook } from "react-icons/ai";
import { GiShoppingCart } from "react-icons/gi";
import { RiAccountCircleLine } from "react-icons/ri";
import Account from "./Acccount";
import WomenNav from "./WomenNav";
import MenNav from "./MenNav";
import KidsNav from "./KidsNav";
import HomeNav from "./HomeNav";
import DrawerExample from "./CartPage"
import OffersNav from "./OffersNav";
import { Link } from "react-router-dom"
export default function Navbar() {



    return (
        <Box position={["sticky"]} bgColor={"white"} top={0} zIndex={9999} width={["50%", '80%', '100%']} border='1px' borderColor='gray.200' mt={0} boxShadow='rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;'>

            <Flex maxWidth={'100%'} pr={['5', '10', '20']} pl={['5', '10', '20']} pt='0' alignItems='center' gap={[1, null, 2]}>

                <HStack gap={["5px", '10px', '33px']}>
                    <Link to={"/"} >
                        <img
                            width={150}
                            src="/images/LaneLogoCropped.png"
                            alt='Lane Attire'
                        /></Link>

                    <Box><Menu >
                        {({ isOpen }) => (
                            <>
                                <MenuButton size='sm' fontSize={['8', '10', '12', '15']}
                                    isactive={isOpen} as={Heading} rightIcon={<ChevronDownIcon />}>
                                    WOMEN


                                </MenuButton>
                                <MenuList color="gray.500" border="none" bg={"rgb(238,238,238)"}>
                                    <WomenNav />
                                </MenuList>
                            </>
                        )}
                    </Menu></Box>

                    <Box ><Menu>
                        {({ isOpen }) => (
                            <>
                                <MenuButton size='sm' fontSize='15'
                                    isactive={isOpen} as={Heading} rightIcon={<ChevronDownIcon />}>
                                    MEN


                                </MenuButton>
                                <MenuList color="gray.500" border="none" bg={"rgb(238,238,238)"}>
                                    <MenNav />
                                </MenuList>
                            </>
                        )}
                    </Menu></Box>
                    {/* <Heading size='sm' fontSize='15'>MEN</Heading> */}
                    <Box><Menu>
                        {({ isOpen }) => (
                            <>
                                <MenuButton size='sm' fontSize='15'
                                    isactive={isOpen} as={Heading} rightIcon={<ChevronDownIcon />}>
                                    KIDS


                                </MenuButton>
                                <MenuList color="gray.500" border="none" bg={"rgb(238,238,238)"}>
                                    <KidsNav />
                                </MenuList>
                            </>
                        )}
                    </Menu></Box>
                    {/* <Heading size='sm' fontSize='15'>KIDS</Heading> */}
                    <Box><Menu>
                        {({ isOpen }) => (
                            <>
                                <MenuButton size='sm' fontSize='15'
                                    isactive={isOpen} as={Heading} rightIcon={<ChevronDownIcon />}>
                                    HOME


                                </MenuButton>
                                <MenuList color="gray.500" border="none" bg={"rgb(238,238,238)"}>
                                    <HomeNav />
                                </MenuList>
                            </>
                        )}
                    </Menu></Box>
                    <Box><Menu>
                        {({ isOpen }) => (
                            <>
                                <MenuButton size='sm' fontSize='15' color="red.500"
                                    isactive={isOpen} as={Heading} rightIcon={<ChevronDownIcon />}>
                                    OFFERS


                                </MenuButton>
                                <MenuList>
                                    <OffersNav />
                                </MenuList>
                            </>
                        )}
                    </Menu></Box>


                </HStack>

                <Spacer />


                <ButtonGroup gap='10'>




                    <VStack pt={3} >

                        <AiOutlineBook fontSize={20} />
                        <Text fontSize="11">
                            SCRAPBOOK</Text>
                    </VStack>



                    <VStack pt={3}>
                        <Search2Icon fontSize={20} />
                        <Text fontSize="11">

                            SEARCH
                        </Text>
                    </VStack>

                    <VStack pt={2} >
                        {/* <GiShoppingCart fontSize={26} /> */}
                        <DrawerExample />
                        <Text fontSize="11">
                            CART
                        </Text>
                    </VStack>

                    <VStack pt={2} >
                        <RiAccountCircleLine fontSize={26} />
                        <Account />
                        {/* <Text fontSize="11">
                            PROFILE
                        </Text> */}
                    </VStack>


                </ButtonGroup>

            </Flex>
        </Box >
    )
}

//add real Icons rigth side