import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Flex, HStack, Heading, SimpleGrid, Tab, TabList, TabPanel, TabPanels, Tabs, VStack, Text, Button, Badge } from "@chakra-ui/react";
import { BsChevronRight } from "react-icons/bs";
import SingleSlick from "./SingleSlick";
import { useEffect, useState } from "react";
import axios from "axios";
import { AiOutlineHeart } from "react-icons/ai"
import SingleProductCard from "./SingleProductCard"
import { Link, useParams } from "react-router-dom";
import ToastExample from "./toast";
import { useToast } from '@chakra-ui/react'
import { Navigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import { useContext } from "react";
export default function SingleProductPage() {
    const toast = useToast()
    const { isAuth } = useContext(AuthContext);
    const [similar, setSimilar] = useState([]);
    const [casual, setCasual] = useState([]);
    const [formal, SetFormal] = useState([]);
    const [singleData, setSingleData] = useState([]);
    const { Product_id } = useParams();
    const [btnText, setBtnText] = useState("ADD TO CART")
    const [navState, setNavState] = useState(false)

    const FetchSimilarData = (category) => {

        axios.get(`https://lane-attire-product-api.onrender.com/Men?q=${category}&_limit=20`)
            .then((data) => setSimilar(data.data))
    }
    const FetchCasualData = (category) => {

        axios.get(`https://lane-attire-product-api.onrender.com/Men?q=${category}&_limit=20`)
            .then((data) => setCasual(data.data))
    }
    const FetchFormalData = (category) => {

        axios.get(`https://lane-attire-product-api.onrender.com/Men?q=${category}&_limit=20`)
            .then((data) => SetFormal(data.data))
    }

    const SingleData = (val) => {
        axios.get(`https://lane-attire-product-api.onrender.com/Men/${val}`)
            .then((data) => setSingleData(data.data))
    }


    useEffect(() => {
        SingleData(Product_id)
    }, [Product_id])
    useEffect(() => {
        FetchFormalData("formalSolid")
        FetchCasualData("checkShirt")
    }, [casual, formal])

    const { title, brand, category, discount, id, image, mrp, price } = singleData;

    useEffect(() => {
        FetchSimilarData(category)
    }, [category])

    const AddToCart = () => {
        if (!isAuth) {
            toast({
                title: "Not Logged In",
                description: "Please login for Proceeding",
                status: 'error',
                duration: 3000,
                isClosable: true,
            })
            setNavState(true)
            return;
        }
        fetch('https://lane-attire-product-api.onrender.com/cartItems', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(singleData)
        }).then((res) => {
            toast({
                title: title.toUpperCase(),
                description: "Added to Cart Succesfully",
                status: 'success',
                duration: 3000,
                isClosable: true,
            })
            setBtnText("ADDED TO CART")
        })

    }
    if (navState) {
        return <Navigate to="/login" />
    }

    return (<Box
        width={"80%"} margin={"auto"}>

        <Box

            mt={5}
            fontSize={13} color={"gray.500"}>
            <Breadcrumb spacing='8px' separator={<BsChevronRight color='gray.100' mt={9} />}>
                <BreadcrumbItem>
                    <Link to="/"> <BreadcrumbLink >Home</BreadcrumbLink></Link>
                </BreadcrumbItem>

                <BreadcrumbItem>
                    <Link to="/productPage">
                        <BreadcrumbLink >Products-Page</BreadcrumbLink>

                    </Link>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <Link to={`/productPageCat/${category}`}>
                        <BreadcrumbLink >{category}</BreadcrumbLink>

                    </Link>
                </BreadcrumbItem>
                <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink >{title}</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
        </Box>

        {/* --------breadCrumos ends */}

        <Flex>
            <VStack width={"700px"}
                // border={"1px solid green"}
                mt={"10px"}>
                <Box bgColor={"rgb(238,238,238)"}>

                    <SingleSlick image={image} />

                </Box>
                <Box
                // border={"2px solid purple"}
                >
                    <Tabs isFitted variant='enclosed' width={"700px"}>
                        <TabList mb='1em' p={"30px"} >
                            <Tab fontSize={"md"} fontWeight={600} letterSpacing={"2px"}>SIMILAR</Tab>
                            <Tab fontSize={"md"} fontWeight={600} letterSpacing={"2px"}>CASUAL</Tab>
                            <Tab fontSize={"md"} fontWeight={600} letterSpacing={"2px"} >FORMAL SOLID</Tab>

                        </TabList>
                        <TabPanels bgColor={"rgb(238,238,238)"}>
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


            <Box
                //  border={"5px solid red"} 
                lineHeight={10} fontSize={18} width={"50%"} textAlign={"left"} ml={4} mt={2} pl={2}>
                <Heading >{title?.toUpperCase()}</Heading>
                <Text> By {brand}</Text>
                <Flex justifyContent={"space-between"}>
                    <p>4.0 ⭐⭐⭐⭐</p>
                    <p>🛡️100% Trusted</p>
                </Flex>
                <Box>
                    <Flex justify="space-between" p={5} pb={1}>
                        <Heading size={"md"} >Select Size</Heading>
                    </Flex>
                    <HStack m={"25px"}>
                        <Button variant='outline' disabled>36</Button>
                        <Button variant='outline' disabled>38</Button>
                        <Button variant='outline' >40</Button>
                        <Button variant='outline' >42</Button>
                        <Button variant='outline' >44</Button>
                        <Button variant='outline' disabled>46</Button>

                    </HStack>
                </Box>
                <Flex>
                    <Box>
                        <Text>MRP : {mrp} Rs</Text>
                        <Text>Price : {price} Rs</Text>
                        <Text>You Save : {mrp} Rs - {price} Rs</Text>
                        <p style={{ color: "grey" }}>M.R.P. inclusive of all taxes</p>
                    </Box>
                    <Box>
                        <Badge color='green.300' >
                            OFFER
                        </Badge>
                        <Text color='green.300'>Pay Online & Get Flat 10% OFF</Text>
                    </Box>
                </Flex>
                <HStack mt={5}>
                    <Button w={"15%"} fontSize={38} p={30} bgColor='green.300' ><AiOutlineHeart /></Button>
                    <Button w={"95%"} fontSize={25} p={30} bgColor='green.300' onClick={AddToCart} > {btnText}</Button>
                </HStack>
                <Box mt={10}>
                    <Tabs align='end' variant='line'>
                        <Heading align="start" size={"sm"} position={"relative"} top={15}>SIZE CHART :</Heading>
                        <TabList>
                            <Tab>Centimeter</Tab>
                            <Tab>Inches</Tab>
                        </TabList>
                        <TabPanels>
                            <TabPanel>
                                <img style={{ width: "100%" }} src="./images/CentiMeter.png" />
                            </TabPanel>
                            <TabPanel>
                                <img style={{ width: "100%" }} src="./images/inInches.png" />

                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                    <Text color={"gray.400"} fontSize={16}>Sizechart provided is as per the garment measurement and not the body</Text>
                    <Box mt={5} mb={4}>
                        <Heading size={"md"}>DELIVERY & RETURN</Heading>
                        <Text color={"gray.400"} fontSize={18}>metros :

                        </Text>
                        <p style={{ color: "black", marginTop: "-10px" }}>3-5 working days</p>

                        <Text color={"gray.400"} fontSize={18}>other cities :
                            <p style={{ color: "black", marginTop: "-10px" }}>5-7 working days</p>
                        </Text>
                        <Text color={"gray.400"} fontSize={18}>areas serviceable only by speed post :
                            <p style={{ color: "black", marginTop: "-10px" }}>15 working days</p>
                        </Text>
                        <Text>7 days, no hassle returns! <a href="" style={{ color: "pink" }}> details...
                        </a></Text>
                    </Box>
                    <Box>
                        <Heading size={"md"}>
                            Care

                        </Heading>
                        <Text mt={3} color={"gray.400"} lineHeight={5} letterSpacing={0}>
                            machine wash with mild detergent/do not bleach/colors tobe washed separately/tumble dry/gentle cycle/denim nedd heavy cycle/dry inside out inshade/do no
                        </Text>                </Box>
                </Box>

                <Box>
                    <Heading size={"md"} mt={"20px"} mb={"8px"}>Product Description</Heading>
                    <VStack align={"start"} style={{ color: "grey", marginLeft: "5px", letterSpacing: 0, lineHeight: 1.5 }}>
                        <Text fontSize={"sm"}>occasion :<span style={{ color: "black" }}>casual wear</span></Text>
                        <Text fontSize={"sm"}>color : <span style={{ color: "black" }}>refer image</span></Text>
                        <Text fontSize={"sm"}>no. of pcs : <span style={{ color: "black" }}>1</span></Text>
                        <Text fontSize={"sm"}>print & pattern : <span style={{ color: "black" }}>solid & checks</span></Text>
                        <Text fontSize={"sm"}>color family : <span style={{ color: "black" }}>refer image</span></Text>
                        <Text fontSize={"sm"}>neck :  <span style={{ color: "black" }}>refer image</span></Text>
                        <Text fontSize={"sm"}>fit : <span style={{ color: "black" }}>regular fit</span></Text>
                        <Text fontSize={"sm"}>sleeve type : <span style={{ color: "black" }}>Yes</span></Text>
                        <Text fontSize={"sm"}>product details : <span style={{ color: "black" }}>expand your collection of casual staples with this modish shirt from showoff. you'll love putting this piece on with some trainers and chinos for the perfect outdoor activity with your friends.</span></Text>
                        <Text fontSize={"sm"}>pockets : <span style={{ color: "black" }}>2</span></Text>
                        <Text fontSize={"sm"}>material : <span style={{ color: "black" }}>fabric</span></Text>
                        <Text fontSize={"sm"}>brand name : <span style={{ color: "black" }}>{brand}</span></Text>
                        <Text fontSize={"sm"}>country of origin : <span style={{ color: "black" }}>India</span></Text>
                        <Text fontSize={"sm"}>length : <span style={{ color: "black" }}>small, medium, large</span></Text>
                        <Text fontSize={"sm"}>care : <span style={{ color: "black" }}>see above</span></Text>
                        <Text fontSize={"sm"}>product code : <span style={{ color: "black" }}>{"2Sd49"}{id}</span></Text>
                    </VStack>
                </Box>


                <Box>

                    <Heading size={"md"} mt={"20px"} mb={"8px"}>PRODUCT DETAILS</Heading>
                    <ul style={{ color: "grey", marginLeft: "20px", letterSpacing: 0, lineHeight: 1.5 }} >
                        <li>be a head turner by wearing this casual shirt from classic polo and grab it in light blue colour.</li>
                        <li>showcase this top in wonderful prints and wear it for casual wear occasions.</li>
                        <li>buy this outstanding collection in a 36 size & get it in fabric made of cotton material.</li>
                        <li>bored of the conventional shirt look? well, these casual shirts in shirt collar neck designs and short sleeves will give you a whole new dimension!
                        </li>
                        <li>look dapper in casual shirts priced at ₹1349 and benefit 10% .</li>
                    </ul>
                    <Button mt={10}>SELLER DETAILS</Button>
                </Box>
            </Box>




        </Flex>
    </Box>

    )
}


