import { Box, Flex, Heading, Text, Image, HStack, ButtonGroup, Spacer, VStack, Stack, Container } from "@chakra-ui/react"
import React from "react"
import { PhoneIcon, AddIcon, WarningIcon, Search2Icon } from '@chakra-ui/icons'
import { AiOutlineBook } from "react-icons/ai";
import { GiShoppingCart } from "react-icons/gi"
import { RiAccountCircleLine } from "react-icons/ri"
export default function Navbar() {



    return (
        <Box width="100%" border='1px' borderColor='gray.200' mt={0} boxShadow='rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;'>

            <Flex minWidth='100%' pr='20' pl='90' pt='0' alignItems='center' gap='2'>

                <HStack gap={"33px"}>
                    <img
                        // boxSize='100px'
                        // objectFit='cover'
                        width={150}
                        src='https://lh3.googleusercontent.com/B75DMJ47oi2P3NC-2EdNwgecgsNYdqrG-rtHkqkpkw8dHyhFDCSFE8AH9DAamaJvmp58Hy1bVzLC8NtsS7L_776S2kljTWoxT8AJN4IbH7sTNULyKtno5aai2ac04z6Hveo1dbMr9lgbe_fMieHNKOraIhkmZM9T5K9cxTP6AlUhJz-ykVp94Ed2QU5vJ9tc2Wi5uniBDSd75ks2lw_a7TOQzzh7ibAHYAQJlF3FtICZtyHtq2f_PVWexgaRm9Jywqjsmfdq9ZSjFnKI5qdgbLax4152bsU-PC3swX1qO3EVc4sayEmft55zmyGPhppwpC4uyWH86FqrYoZoGCbp5aL9zajFOP4DbPXvUC8SBTwqH2MDeFfJVbmWSa-FgecxQhHsjvgtBMEo1hFtJReeEEatliDFllu94A7GqKaShQoEqsJiXJ5OGkQoEC6LlvKXznkzwThmAnZWfZ7UskVhW0VFhAPFDt2q36CW_dXJdm5tMas-1tlETyPygITp6csjn_FbkFdqHLIB55FNo0aklm3T5KrtIppaka2KUF5lOefp8_JDBa1TVUCvAPMQB8Aa-8AupYqOlzaaXM2ZsK4p615KPWSy00t7n3ISMko-b96bCEyqaKVQ6FpQmjyw-NuspRQrNeO6avV_LIXW35cHwj9a0yoYDRjGw2ywvfa9COuLIVS5vg5SsSN6sWTI2dee1bK9l2-nL-EYfG5-Tx9d5105EBxikHqAAdEk0hQ1o5M4_vwoLSiuYGZ20IoSsO4POKWdNiWYapL28fqBqQUuN3GBWZAjJcrV0YRm-ZWyoxYLbmkpnOSG7TEEHbKH91Iob8TG9jQEJn0pbcF1oJWX1zvJleLk6A8uH_165IOzjfDboa1WYHoN7jYjNCRLw5dYWhKz9pvIhzYnMXjl6s-1h4PG6zOMqE2HY74x8OqbnM6TZKtS1QTKNrl1-XQXrfQby4_jgI8NNTp-oLqB0HD7asQ=w432-h188-s-no?authuser=0'

                        alt='Dan Abramov'
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