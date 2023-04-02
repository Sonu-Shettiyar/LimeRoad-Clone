import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Box,
} from '@chakra-ui/react'
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    Button, Text
} from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import { useEffect, useRef, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { useToast } from '@chakra-ui/react'
import axios from 'axios'
export default function OrderPlaced() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const toast = useToast()
    const [redirect, Setredirect] = useState([])

    const { current } = useRef([])


    // if (redirect) {
    //     toast({
    //         title: "Redirecting...",
    //         description: "redirecting to homepage",
    //         status: 'success',
    //         duration: 4000,
    //         isClosable: true,
    //     })
    // }
    const deleteItems = (id) => {
        axios.delete(`https://lane-attire-product-api.onrender.com/cartItems/${id}`)
    }
    useEffect(() => {
        axios.get(`https://lane-attire-product-api.onrender.com/cartItems`)
            .then((data) => {
                Setredirect(data.data)

            })

    }, [])
    if (redirect.length != 0) {
        redirect.forEach((ele, ind) => {
            deleteItems(ele.id)
        })
        setTimeout(() => {

            return <Navigate to="/" />
        }, 4000)

    }
    return (
        <>
            <Button onClick={onOpen}>Pay</Button>

            <Modal onClose={onClose} bgColor="red" isOpen={isOpen} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Successfull !</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Alert
                            status='success'
                            variant='subtle'
                            flexDirection='column'
                            alignItems='center'
                            justifyContent='center'
                            textAlign='center'
                            height='300px'
                        >
                            <AlertIcon boxSize='50px' mr={0} />
                            <AlertTitle mt={4} mb={1} fontSize='lg'>
                                Order Placed !
                            </AlertTitle>
                            <AlertDescription maxWidth='sm'>
                                Thanks for purchasing with us. Your product will be delivered in 4-5 working days.
                                Have a nice day
                            </AlertDescription>
                        </Alert>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={onClose}>Close</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}