import {
    Box, Container, Flex, VStack, Text, Heading, Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Center,
    SimpleGrid,
} from "@chakra-ui/react";
import axios from "axios"
import React, { useEffect, useState } from "react";
import { RxDoubleArrowRight } from "react-icons/rx"
import Navbar from "./Navbar";
import ProductBadge from "./ProductBadge"
import Filter from "./Filter";
import BadgeSlickSlider from "./badgeSlickSlider";
import ProductCard from "./ProductCard";
import Pagination from "./Pagination";
export default function ProductPage() {
    const [data, SetData] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0)

    const IncRease = () => {
        setPage(page + 1)
    }
    const DecRease = () => {
        setPage(page - 1)
    }

    const FetchData = (n) => {
        axios.get(`https://uptight-ray-blazer.cyclic.app/Men?_limit=15&_page=${n}`)
            .then((data) => {
                SetData(data.data)
                let totPage = Math.ceil((data.headers["x-total-count"]) / 15);
                setTotalPage(totPage)
            })
    }
    useEffect(() => {
        console.log("re render")
        FetchData(page)
        return ""
    }, [page])
    return <>

        <Box bgColor={"rgb(238,238,238)"}>
            <Flex letterSpacing={1} >
                <Box
                    //  border={"1px"} 
                    borderColor="red"
                    w={"310px"} ml={3} mr={3} position={"fixed"} top={20} >
                    <VStack>
                        <Box p={3} textAlign={"left"} bgColor={"white"} mb={2} w={"100%"}>
                            <Heading fontSize={"sm"}>MEN {(data[0]?.category.toUpperCase())} </Heading>
                            <Text>{data.length} Products</Text>
                        </Box>
                        <Box bgColor={"white"} textAlign={"left"}>
                            <Filter data={data} />

                        </Box>
                    </VStack>

                </Box>


                {/* //---rightDiv */}


                <Box
                    //  border={"1px"}
                    borderColor="green" w={"75%"} marginLeft={"350px"} position={"static"} top={20} >
                    <Box>
                        <Box
                            // border={"1px solid purple"}
                            marginBottom={5}
                            mt={5}
                            fontSize={12} color={"gray.500"}>
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
                        {/* --------- breadCrump end*/}
                        <Box
                            // style={{ width: "50%" }}
                            // border={"1px solid purple"}
                            mb={2}

                        >

                            <BadgeSlickSlider data={data} />
                        </Box>
                    </Box>
                    {/* -----mainDiv */}

                    <Center
                        //  border={"1px solid red"}
                        style={{ position: "sticky" }}
                        mt={10}
                    >

                        <SimpleGrid columns={[2, null, 3]} spacing='40px' rowGap={18}>
                            {
                                data?.map((ele, ind) => <ProductCard key={ind} {...ele} />)
                            }

                        </SimpleGrid>
                    </Center>
                    <Pagination current={page} IncRease={IncRease} DecRease={DecRease} total={totalPage} />


                    {/* ----right div ends */}
                </Box>

            </Flex>

        </Box >

    </>
}