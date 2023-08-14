import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button, Input, Text, Textarea, Radio
} from '@chakra-ui/react'
import React from 'react'
import { useDisclosure, FormControl, FormLabel } from '@chakra-ui/react'
import OrderPlaced from './OrderPlaced';
import { useNavigate } from "react-router-dom";

export default function Delivery({ text }) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [city, setCity] = React.useState(false);
    const [numbeR, setNumber] = React.useState(false);
    const [method, setMethod] = React.useState(false);



    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
    const navigate = useNavigate();
    const handlePay = () => {

        if (city && numbeR) {

            alert("Order Succesfully Placed....")
            navigate("/");
            onClose();
        } else {
            alert("Please provide details....")
        }
    }

    return (
        <>
            <Button colorScheme='green' onClick={onOpen}>{text}</Button>


            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Shipment Address :</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl isRequired>
                            <FormLabel>City & State:</FormLabel>
                            <Input ref={initialRef} onChange={(e) => setCity(true)} placeholder='Your Address' isRequired />
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>Mobile Number :</FormLabel>
                            <Input placeholder='Mobile Number'
                                onChange={(e) => setNumber(true)}
                                type="text" isRequired />

                            <Text mb='8px' isRequired>Detail Address :</Text>
                            <Textarea

                                placeholder='Provide your delivery address......'
                                size='sm'
                            />
                        </FormControl>
                        <FormControl mt={4} isRequired>
                            <FormLabel>Pay through :</FormLabel>
                            <Radio mr={3} id="radio" name="payment">
                                UPI
                            </Radio>
                            <Radio id="radio" name="payment">
                                Cash On Delivery
                            </Radio>

                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button onClick={handlePay}><OrderPlaced /></Button>
                    </ModalFooter>
                </ModalContent>
            </Modal >
        </>
    )
}