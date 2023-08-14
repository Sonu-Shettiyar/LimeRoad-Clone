import {
    Box, Flex, VStack, Text, Heading, Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Center,
    SimpleGrid,
} from "@chakra-ui/react";
import axios from "axios"
import React, { useEffect, useState } from "react";
import { BsChevronRight } from "react-icons/bs"
import Filter from "./Filter";
import BadgeSlickSlider from "./badgeSlickSlider";
import ProductCard from "./ProductCard";
import Pagination from "./Pagination";
import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./AuthContext";
export default function ProductPage() {
    const { isAuth } = useContext(AuthContext)
    const [data, SetData] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0)
    const [loading, setLoading] = useState(false);
    const { category } = useParams();
    const [priceVal, setPriceVal] = useState("");
    const [orderVal, setOrderVal] = useState("");
    const [lessVal, setLessVal] = useState(200000);
    const [query, setQuery] = useState("")
    const IncRease = () => {
        setPage(page + 1)
    }
    const DecRease = () => {
        setPage(page - 1)
    }


    const FetchData = (n, priceVal, orderVal, lessVal, greatVal) => {
        setLoading(true)
        axios.get(`https://lane-attire-product-api.onrender.com/Men?_limit=15&_page=${n}&q=${category}&_sort=${priceVal}&_order=${orderVal}&price_lte=${lessVal}`)
            .then((data) => {
                SetData(data.data)
                let totPage = Math.ceil((data.headers["x-total-count"]) / 15);
                setTotalPage(totPage)
                setLoading(true)
            })
    }
    // do filter by query 
    //do api update add gender to it and merge it in men section
    // useEffect(() => {
    //     axios.get(`https://lane-attire-product-api.onrender.com/Men?q=${query}`)
    //         .then((data) => {
    //             SetData(data.data)
    //             let totPage = Math.ceil((data.headers["x-total-count"]) / 15);
    //             setTotalPage(totPage)
    //             setLoading(true)
    //         })
    // }, [query])

    useEffect(() => {
        FetchData(page, priceVal, orderVal, lessVal)
    }, [page, priceVal, orderVal, lessVal])


    return <>

        <Box bgColor={"rgb(238,238,238)"} >
            <Flex letterSpacing={1} >
                <Box
                    borderColor="red"
                    w={"310px"} ml={3} mr={3} position={"fixed"} top={20} >
                    <VStack>
                        <Box p={3} textAlign={"left"} bgColor={"white"} mb={2} w={"100%"}>
                            <Heading fontSize={"sm"}>MEN {(data[0]?.category.toUpperCase())} </Heading>
                            <Text>{data.length} Products</Text>
                        </Box>
                        <Box bgColor={"white"} textAlign={"left"}>
                            <Filter data={data} priceVal={priceVal} setPriceVal={setPriceVal} orderVal={orderVal} lessVal={lessVal} setLessVal={setLessVal} query={query} setOrderVal={setOrderVal} setQuery={setQuery} />

                        </Box>
                    </VStack>

                </Box>


                {/* //---rightDiv */}


                <Box
                    borderColor="green" w={"75%"} marginLeft={"350px"} position={"static"} top={20} >
                    <Box>
                        <Box
                            marginBottom={5}
                            mt={5}
                            fontSize={12} color={"gray.500"}>
                            <Breadcrumb spacing='8px' separator={<BsChevronRight color='gray.100' mt={9} />}>
                                <BreadcrumbItem>
                                    <Link to="/">

                                        <BreadcrumbLink href='#'>Home</BreadcrumbLink>
                                    </Link>
                                </BreadcrumbItem>

                                <BreadcrumbItem>
                                    <Link to="/productPage">
                                        <BreadcrumbLink >{data[0]?.gender==="men"?"Men":"Women"}</BreadcrumbLink>

                                    </Link>
                                </BreadcrumbItem>

                                <BreadcrumbItem isCurrentPage>
                                    <BreadcrumbLink >{category}</BreadcrumbLink>
                                </BreadcrumbItem>
                            </Breadcrumb>
                        </Box>
                        {/* --------- breadCrump end*/}
                        <Box

                            mb={2}

                        >

                            <BadgeSlickSlider data={data} />
                        </Box>
                    </Box>
                    {/* -----mainDiv */}

                    <Center
                        style={{ position: "sticky" }}
                        mt={10}
                    >
                        <SimpleGrid columns={[2, null, 3]} spacing='40px' rowGap={18}>

                            {data?.map((ele, ind) => <ProductCard key={ind} {...ele} />)}


                        </SimpleGrid>
                    </Center>
                    <Pagination current={page} IncRease={IncRease} DecRease={DecRease} total={totalPage} />


                    {/* ----right div ends */}
                </Box>

            </Flex>

        </Box >

    </>
}