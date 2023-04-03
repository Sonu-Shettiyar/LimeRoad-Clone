import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure, Button
    , Text, Flex, Image, Input, MenuItem
} from '@chakra-ui/react'
import { FormControl, FormLabel } from "@chakra-ui/react";

import React, { useState } from 'react'
import { useContext, useEffect } from 'react';
import { AuthContext } from './AuthContext';
import LoginForms from './LoginForms';

export default function Login() {
    console.log("email : gtatterton0@ehow.com",
        "password : 12345")
    const { login, isAuth, User, email, password, CallLogin, setPassword, setEmail } = useContext(AuthContext);





    const OverlayOne = () => (
        <ModalOverlay
            bg='blackAlpha.300'
            backdropFilter='blur(10px) hue-rotate(90deg)'
        />
    )


    const { isOpen, onOpen, onClose } = useDisclosure()
    const [overlay, setOverlay] = React.useState(<OverlayOne />)
    useEffect(() => {
        setTimeout(() => {

            onOpen();
        }, 5000)
    }, [])

    return (
        <>
            <MenuItem
                onClick={() => {
                    setOverlay(<OverlayOne />)
                    onOpen()
                }}
            >{isAuth ? `${User.name}` : "Sign Up"}
            </MenuItem>

            <Modal isCentered isOpen={isOpen} onClose={onClose}>
                {overlay}
                <ModalContent>
                    <ModalHeader>Sign up</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <FormControl isRequired>
                            <FormLabel>Email</FormLabel>
                            <Input placeholder='Enter email' value={email} onChange={(e) => {

                                setEmail(e.target.value)
                            }} />
                            <FormLabel>Password</FormLabel>
                            <Input placeholder='Enter password' value={password} onChange={(e) => { setPassword(e.target.value) }} />
                            <Text align="end" color="blue.600" >Forget Password ?</Text>
                            <Button mt={"9%"} bgColor="green.300" mb={"9%"} w={"100%"} onClick={CallLogin}>Login</Button>
                        </FormControl>
                    </ModalBody>
                    {/* <ModalFooter>

                        <Button onClick={onClose}>Close</Button>
                    </ModalFooter> */}
                </ModalContent>
            </Modal>
        </>
    )
}
