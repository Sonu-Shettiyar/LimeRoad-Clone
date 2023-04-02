import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";
import Login from "./Login";
import LoginForms from "./LoginForms"
import { Link } from "react-router-dom";


export default function LoginAfter() {


    return (

        <Box h={"95vh"} bgImage={"https://img3.junaroad.com/catalogues/2389792/64272baf3b204.jpg"}>
            <Flex align={"center"} p={50}>

                <Container borderRadius={20} bgColor={"white"}>
                    <Heading mt={10} >
                        Sign In
                    </Heading>
                    <LoginForms />
                    <Text>Not have an account ? <Link to={"/signUp"}>Creat new account</Link> </Text>
                </Container>
            </Flex>
        </Box>
    )
}