import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Flex, HStack, Heading, SimpleGrid, Tab, TabList, TabPanel, TabPanels, Tabs, VStack, Text, Button, Badge } from "@chakra-ui/react";
import { RxDoubleArrowRight } from "react-icons/rx";
import SingleSlick from "./SingleSlick";
import { useEffect, useState } from "react";
import axios from "axios";
import SingleProductCard from "./SingleProductCard"


export default function SingleProductPage() {

    // do fetch with categroy with data you are getting as prop fro similar contern
    const [similar, setSimilar] = useState([]);
    const [casual, setCasual] = useState([]);
    const [formal, SetFormal] = useState([])
    const FetchSimilarData = (category) => {

        axios.get(`https://uptight-ray-blazer.cyclic.app/Men?q=${category}&_limit=20`)
            .then((data) => setSimilar(data.data))
    }
    const FetchCasualData = (category) => {

        axios.get(`https://uptight-ray-blazer.cyclic.app/Men?q=${category}&_limit=20`)
            .then((data) => setCasual(data.data))
    }
    const FetchFormalData = (category) => {

        axios.get(`https://uptight-ray-blazer.cyclic.app/Men?q=${category}&_limit=20`)
            .then((data) => SetFormal(data.data))
    }

    useEffect(() => {
        FetchFormalData("formalSolid")
        FetchCasualData("checkShirt")
    }, [casual, formal])

    useEffect(() => {
        FetchSimilarData("jeans")
    }, [])
    return (<Box border={"1px solid red"} width={"80%"} margin={"auto"}>

        <Box
            // border={"1px solid purple"}
            // width={}
            // marginBottom={5}
            mt={5}
            fontSize={13} color={"gray.500"}>
            <Breadcrumb spacing='8px' separator={<RxDoubleArrowRight color='gray.100' mt={9} />}>
                <BreadcrumbItem>
                    <BreadcrumbLink href='#'>Home</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                    <BreadcrumbLink href='#'>About</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink href='#'>Contact</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
        </Box>

        {/* --------breadCrumos ends */}

        <Flex>
            <VStack width={"700px"} border={"1px solid green"} mt={"10px"}>
                <Box >

                    <SingleSlick />

                </Box>
                <Box
                // border={"2px solid purple"}
                >
                    <Tabs isFitted variant='enclosed' width={"700px"} >
                        <TabList mb='1em' p={"30px"} >
                            <Tab fontSize={"md"} fontWeight={600} letterSpacing={"2px"}>SIMILAR</Tab>
                            <Tab fontSize={"md"} fontWeight={600} letterSpacing={"2px"}>CASUAL</Tab>
                            <Tab fontSize={"md"} fontWeight={600} letterSpacing={"2px"} >FORMAL SOLID</Tab>

                        </TabList>
                        <TabPanels>
                            <TabPanel>
                                <SimpleGrid columns={[2, 3, 4]} spacing='5px' rowGap={5}>

                                    {similar?.map((ele, key) => {
                                        return <SingleProductCard key={key} {...ele} />
                                    })}
                                </SimpleGrid>
                            </TabPanel>
                            <TabPanel>
                                <SimpleGrid columns={[2, null, 4]} spacing='5px' rowGap={5}>

                                    {casual?.map((ele, key) => {
                                        return <SingleProductCard key={key} {...ele} />
                                    })}
                                </SimpleGrid>
                            </TabPanel>
                            <TabPanel>
                                <SimpleGrid columns={[2, null, 4]} spacing='5px' rowGap={5}>

                                    {formal?.map((ele, key) => {
                                        return <SingleProductCard key={key} {...ele} />
                                    })}
                                </SimpleGrid>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </Box>
            </VStack>


            <Box border={"5px solid red"} width={"50%"}>
                <VStack>
                    <Heading>Title wii-ll come here</Heading>
                    <Text>Brand By Brand</Text>
                    <Flex>
                        <p>4.0 ⭐⭐⭐⭐</p>
                        <p>🛡️ Trusted</p>
                    </Flex>
                    <Box>
                        <Flex justify="center" border={"1px solid red"} width={"100%"}>
                            <Text mr={"50px"}>Select Size</Text>
                            <Text>Size Chart</Text>
                        </Flex>
                        <Button variant='outline' disabled>36</Button>
                        <Button variant='outline'>38</Button>
                        <Button variant='outline'>40</Button>
                        <Button variant='outline' disabled>42</Button>
                        <Button variant='outline' disabled>44</Button>
                        <Button variant='outline' disabled>46</Button>

                    </Box>
                    <Flex>
                        <Box>
                            <Text>MRP : Mrp</Text>
                            <Text>Price : Mrp</Text>
                            <Text>You Save : Mrp - price</Text>
                            <p>M.R.P. inclusive of all taxes</p>
                        </Box>
                        <Box>
                            <Badge>OFFER</Badge>
                            <Text>Pay Online & Get Flat 10% OFF</Text>
                        </Box>
                    </Flex>
                    <HStack>
                        <Button w={"18%"}>Heart</Button>
                        <Button w={"100%"}> ADD TO CART</Button>
                    </HStack>
                </VStack>
            </Box>




        </Flex>
    </Box>

    )
}