import {
    Heading, Text, Box, Checkbox, Radio,
    InputLeftElement,
    Input,
    InputGroup,
    Grid
} from "@chakra-ui/react"
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    HStack,
    PinInput,
    PinInputField,

} from '@chakra-ui/react'
import { VStack } from "@chakra-ui/react"
import { AiOutlineMinus } from "react-icons/ai"
import { FaPlus } from "react-icons/fa"
export default function Filter({ data }) {
    return <Box w={300}>

        <Heading fontSize={"sm"} p={3}>FILTER & SORTING </Heading>
        <Accordion defaultIndex={[0]} allowMultiple>


            <AccordionItem >
                {({ isExpanded }) => (
                    <>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left'>
                                    Sort By
                                </Box>
                                {isExpanded ? (
                                    <AiOutlineMinus fontSize='12px' />
                                ) : (
                                    <FaPlus fontSize='12px' />
                                )}
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>

                            <Box>
                                <Radio>
                                    High to Low
                                </Radio>
                                <br />
                                <Radio>
                                    Low to High
                                </Radio>
                                <br />
                                <Radio>
                                    Discounts
                                </Radio>
                            </Box>
                        </AccordionPanel>
                    </>
                )}
            </AccordionItem>
            <AccordionItem>
                {({ isExpanded }) => (
                    <>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left'>
                                    Price
                                </Box>
                                {isExpanded ? (
                                    <FaPlus fontSize='12px' />
                                ) : (
                                    <FaPlus fontSize='12px' />
                                )}
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <HStack pl={8}>
                                <PinInput type='numeric'>
                                    <PinInputField border="none" borderBottom="1px" mr={2} />
                                    <p>To</p>
                                    <PinInputField
                                        ml={2} border="none" borderBottom="1px" />


                                </PinInput>
                            </HStack>
                        </AccordionPanel>
                    </>
                )}
            </AccordionItem>

            <AccordionItem>
                {({ isExpanded }) => (
                    <>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left'>
                                    Category
                                </Box>
                                {isExpanded ? (
                                    <AiOutlineMinus fontSize='12px' />
                                ) : (
                                    <FaPlus fontSize='12px' />
                                )}
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <Box textAlign={"left"}>
                                <Radio>
                                    Jeans
                                </Radio>
                                <br />
                                <Radio>
                                    Check Shirts
                                </Radio>
                                <br />

                                <Radio>
                                    Solid Color Shirts
                                </Radio>
                                <br />

                                <Radio>
                                    Black Shirts
                                </Radio>
                                <br />

                                <Radio>
                                    {/* //show black shirts plus formal shirts */}
                                    Plain and Solid
                                </Radio>
                                <br />

                                <Radio>
                                    Casual Shirts
                                </Radio>
                                <br />

                                <Radio>
                                    Shoes
                                </Radio>
                            </Box>
                            {/* add brand and all sorter and Filter */}

                        </AccordionPanel>
                    </>
                )}
            </AccordionItem>
            <AccordionItem>
                {({ isExpanded }) => (
                    <>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left'>
                                    Brand
                                </Box>
                                {isExpanded ? (
                                    <AiOutlineMinus fontSize='12px' />
                                ) : (
                                    <FaPlus fontSize='12px' />
                                )}
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <Box textAlign={"left"}>
                                <Box>
                                    <Radio>
                                        Check Shirts
                                    </Radio>
                                    <Radio>
                                        Solid Color Shirts
                                    </Radio>
                                    <Radio>
                                        Black Shirts
                                    </Radio>
                                    <Radio>
                                        {/* //show black shirts plus formal shirts */}
                                        Plain and Solid
                                    </Radio>
                                    <Radio>
                                        Casual Shirts
                                    </Radio>
                                    <Radio>
                                        Shoes
                                    </Radio>
                                </Box>
                            </Box>
                            {/* add brand and all sorter and Filter */}

                        </AccordionPanel>
                    </>
                )}
            </AccordionItem>
            <AccordionItem>
                {({ isExpanded }) => (
                    <>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left'>
                                    Color
                                </Box>
                                {isExpanded ? (
                                    <AiOutlineMinus fontSize='12px' />
                                ) : (
                                    <FaPlus fontSize='12px' />
                                )}
                            </AccordionButton>
                        </h2>

                    </>
                )}
            </AccordionItem>
            <AccordionItem>
                {({ isExpanded }) => (
                    <>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left'>
                                    Size
                                </Box>
                                {isExpanded ? (
                                    <AiOutlineMinus fontSize='12px' />
                                ) : (
                                    <FaPlus fontSize='12px' />
                                )}
                            </AccordionButton>
                        </h2>

                    </>
                )}
            </AccordionItem>
            <AccordionItem>
                {({ isExpanded }) => (
                    <>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left'>
                                    Type
                                </Box>
                                {isExpanded ? (
                                    <AiOutlineMinus fontSize='12px' />
                                ) : (
                                    <FaPlus fontSize='12px' />
                                )}
                            </AccordionButton>
                        </h2>

                    </>
                )}
            </AccordionItem>
            <AccordionItem>
                {({ isExpanded }) => (
                    <>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left'>
                                    Occasion
                                </Box>
                                {isExpanded ? (
                                    <AiOutlineMinus fontSize='12px' />
                                ) : (
                                    <FaPlus fontSize='12px' />
                                )}
                            </AccordionButton>
                        </h2>

                    </>
                )}
            </AccordionItem>
            <AccordionItem>
                {({ isExpanded }) => (
                    <>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left'>
                                    Prints & Patterns
                                </Box>
                                {isExpanded ? (
                                    <AiOutlineMinus fontSize='12px' />
                                ) : (
                                    <FaPlus fontSize='12px' />
                                )}
                            </AccordionButton>
                        </h2>

                    </>
                )}
            </AccordionItem>
            <AccordionItem>
                {({ isExpanded }) => (
                    <>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left'>
                                    Offers
                                </Box>
                                {isExpanded ? (
                                    <AiOutlineMinus fontSize='12px' />
                                ) : (
                                    <FaPlus fontSize='12px' />
                                )}
                            </AccordionButton>
                        </h2>

                    </>
                )}
            </AccordionItem>
            <AccordionItem>
                {({ isExpanded }) => (
                    <>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left'>
                                    Color
                                </Box>
                                {isExpanded ? (
                                    <AiOutlineMinus fontSize='12px' />
                                ) : (
                                    <FaPlus fontSize='12px' />
                                )}
                            </AccordionButton>
                        </h2>

                    </>
                )}
            </AccordionItem>
            <AccordionItem>
                {({ isExpanded }) => (
                    <>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left'>
                                    More...
                                </Box>
                                {isExpanded ? (
                                    <AiOutlineMinus fontSize='12px' />
                                ) : (
                                    <FaPlus fontSize='12px' />
                                )}
                            </AccordionButton>
                        </h2>

                    </>
                )}
            </AccordionItem>
        </Accordion>
    </Box>
}