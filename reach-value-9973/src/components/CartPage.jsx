import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Box, Text, Divider, Flex
} from '@chakra-ui/react';
import React, { useEffect, useState } from "react"
import { useDisclosure, Input, Button } from "@chakra-ui/react";
import { GiShoppingCart } from "react-icons/gi";
import axios from "axios"
import { PhoneIcon, AddIcon, WarningIcon, Search2Icon, ChevronDownIcon } from '@chakra-ui/icons'
import CartItemsCard from './CartItemsCard';
import Delivery from './Delivery';
import { useToast } from '@chakra-ui/react'

export default function DrawerExample() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const toast = useToast()
    const [cartData, setCartData] = useState([]);
    const [mrP, setMrp] = useState(0);
    const [pricE, setPrice] = useState(0);
    const fetchData = () => {
        axios.get(`https://lane-attire-product-api.onrender.com/cartItems`)
            .then((data) => setCartData(data.data))
    }

    function handleDelete(id) {
        console.log("working")
        fetch(`https://lane-attire-product-api.onrender.com/cartItems/${id}`, {
            method: "Delete",
            headers: {
                "Content-Type": "application/json"

            }
        }).then((data) => {

        })


    }

    const GetPrice = () => {
        axios.get(`https://lane-attire-product-api.onrender.com/cartItems`)
            .then((data) => {
                let totalMrp = 0;
                let totalPrice = 0;
                data.data.forEach(element => {
                    totalMrp += +element.mrp;
                    totalPrice += +element.price;
                });
                setMrp(totalMrp);
                setPrice(totalPrice);
            })
    }

    useEffect(() => {
        GetPrice()
        fetchData()
    }, [cartData])
    return (
        <Box >

            < GiShoppingCart ref={btnRef} colorScheme='teal' onClick={onOpen} fontSize={26} />

            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent mt={20} mr={5}>
                    <DrawerCloseButton />
                    <DrawerHeader>Your Cart items</DrawerHeader>

                    <DrawerBody>
                        {
                            cartData.length == 0 ? <Text>Your Cart is Empty !</Text> : cartData?.map((ele, ind) => {
                                return <CartItemsCard {...ele} handleDelete={handleDelete} key={ind} />

                            })
                        }
                    </DrawerBody>
                    <Divider />
                    <Box ml={5} mr={5} mb={0}>
                        <Flex fontWeight={500} justify={"space-between"}>
                            <Text >Total Price :</Text>
                            {mrP}Rs
                        </Flex>

                        <Flex fontWeight={500} justify={"space-between"}>

                            <Text fontWeight={500}>Discounted price : </Text>
                            {+pricE} Rs
                        </Flex>
                        <Flex fontWeight={500} justify={"space-between"}>
                            <Text fontWeight={500}>You Save : </Text>
                            {+mrP - +pricE} Rs
                        </Flex>
                        <Flex fontWeight={500} justify={"space-between"}>

                            <Text fontSize={"lg"} fontWeight={700}>Grand Total :</Text> {pricE} Rs
                        </Flex>
                    </Box >
                    <DrawerFooter >
                        {/* <Button  >Proceed to Payment</Button> */}
                        <Delivery text={"Proceed to Payment"} />
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </Box >
    )
}