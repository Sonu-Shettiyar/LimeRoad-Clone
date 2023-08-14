import { Container, Flex, Heading } from "@chakra-ui/react";
import Login from "./Login";
import LoginForms from "./LoginForms"
import { FormControl, FormLabel, Input, Button, Box, Text } from "@chakra-ui/react";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useToast } from '@chakra-ui/react'


export default function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [succes, SetStatus] = useState(false);
    const toast = useToast()
    const CallLogin = () => {

        let userInfo = {
            name: name,
            password: password,
            email: email
        }
        fetch(`https://lane-attire-product-api.onrender.com/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userInfo)
        }).then((res) => {
            toast({
                title: "Registered Succesfully",
                description: "Please login for Proceeding",
                status: 'success',
                 
                duration: 4000,
                isClosable: true,
            })
            SetStatus(true)

        })
    }
    if (succes) {
        return <Navigate to={"/login"} />
    }
    return (

        <Box h={"95vh"} bgImage={"https://img3.junaroad.com/catalogues/2389792/64272baf3b204.jpg"}>
            <Flex align={"center"} p={50}>

                <Container borderRadius={20} bgColor={"white"}>
                    <Heading mt={10} >
                        Create New Account
                    </Heading>
                    <Box mt={10} mb={20} >
                        <FormControl isRequired>
                            <FormLabel>Enter your first name</FormLabel>
                            <Input placeholder='Enter your first name' value={name} onChange={(e) => {

                                setName(e.target.value)
                            }} />
                            <FormLabel>Enter your last name</FormLabel>
                            <Input placeholder='Enter your last name' />
                            <FormLabel>Enter your email</FormLabel>
                            <Input placeholder='Enter your email' value={email} onChange={(e) => {

                                setEmail(e.target.value)
                            }} />
                            <FormLabel mt={6}>Create Password</FormLabel>
                            <Input placeholder='create password' value={password} onChange={(e) => { setPassword(e.target.value) }} />
                            <Button bgColor={"green.300"} w={"100%"} mt={"10%"} onClick={CallLogin}>Register </Button>
                        </FormControl>
                    </Box>
                </Container>
            </Flex>
        </Box >
    )
}