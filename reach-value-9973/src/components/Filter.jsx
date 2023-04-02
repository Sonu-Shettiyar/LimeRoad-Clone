import {
    Heading, Text, Box, Checkbox, Radio,
    InputLeftElement,
    Input,
    InputGroup,
    Grid,
    RadioGroup
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
export default function Filter({ data, setPriceVal, query, setQuery, setLessVal, priceVal, setOrderVal, orderVal, lessVal }) {

    const handleRadioChange = (e) => {
        setPriceVal("price")
        setOrderVal(e)
        if (e == "disc") {
            setOrderVal("desc")
            setPriceVal("discount")
        }
    }
    const setPriceLimit = (e) => {

        setLessVal(e)

    }


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
                                <RadioGroup onChange={e => handleRadioChange(e)} value={orderVal}>
                                    <Radio value="asc">
                                        Low to High
                                    </Radio>
                                    <br />
                                    <Radio
                                        value="desc">
                                        High to Low
                                    </Radio >
                                    <br />

                                </RadioGroup>
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
                                    Set Limit
                                </Box>
                                {isExpanded ? (
                                    <FaPlus fontSize='12px' />
                                ) : (
                                    <FaPlus fontSize='12px' />
                                )}
                            </AccordionButton>
                        </h2>
                        <AccordionPanel fontSize={12} pb={4}>
                            <p>Show below :</p>
                            <HStack pt={2} pl={8}>
                                <PinInput type='numeric' max="5" onChange={e => setPriceLimit(e)}>
                                    <PinInputField border="none" borderBottom="1px" mr={2} />
                                    <PinInputField
                                        ml={2} border="none" borderBottom="1px" />
                                    <PinInputField border="none" borderBottom="1px" mr={2} />
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
                                <RadioGroup onChange={e => setQuery(e)}>
                                    <Radio value="jeans" name="category">
                                        Jeans
                                    </Radio>
                                    <br />
                                    <Radio value="checkShirt" name="category">
                                        Check Shirts
                                    </Radio>
                                    <br />

                                    <Radio value="formalSolid" name="category">
                                        Solid Color Shirts
                                    </Radio>
                                    <br />

                                    <Radio value="BlackPlain" name="category">
                                        Black Shirts
                                    </Radio>
                                    <br />

                                    <Radio value="blackSolid" name="category">
                                        {/* //show black shirts plus formal shirts */}
                                        Plain and Solid
                                    </Radio>
                                    <br />

                                    <Radio value="casual" name="category">
                                        Casual Shirts
                                    </Radio>
                                    <br />

                                    <Radio value="shoes" name="category">
                                        Shoes
                                    </Radio>
                                </RadioGroup>
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