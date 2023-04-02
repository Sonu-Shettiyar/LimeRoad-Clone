import { FormControl, FormLabel, Input, Button, Box, Text } from "@chakra-ui/react";
import { AuthContext } from './AuthContext';
import { useContext } from "react";
import { Navigate } from "react-router-dom";
export default function LoginForms() {

    const { login, isAuth, email, password, CallLogin, setEmail, setPassword } = useContext(AuthContext);

    if (isAuth) {
        return <Navigate to={"/"} />
    }
    return (
        <Box mt={10} mb={20} >
            <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <Input placeholder='Enter email' value={email} onChange={(e) => {

                    setEmail(e.target.value)
                }} />
                <FormLabel mt={6}>Password</FormLabel>
                <Input placeholder='Enter password' type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                <Text align="end" color="blue.600">Forget Password ?</Text>
                <Button bgColor={"green.300"} w={"100%"} mt={"10%"} onClick={CallLogin}>Login</Button>
            </FormControl>
        </Box>)
}