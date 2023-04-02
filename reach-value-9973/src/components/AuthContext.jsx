import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';
import { createContext } from 'react';
import { useToast } from '@chakra-ui/react'
export const AuthContext = createContext();

// console.log(AuthContext)
const AuthContextProvider = ({ children }) => {
    const [isAuth, setIsAuth] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [User, setUser] = useState({})
    const toast = useToast()
    function CallLogin(e) {
        e.preventDefault();
        login(email, password);
    }

    const login = (email, password) => {

        fetch(`https://lane-attire-product-api.onrender.com/users?q=${email}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setIsAuth(data[0].password == password)
                setUser(data[0])
            }).catch((err) => {

                toast({
                    title: "Check your Credentials",
                    description: "Please login for Proceeding",
                    status: 'error',
                    duration: 3000,
                    isClosable: true,
                })
            })


    };


    const logout = () => {
        setIsAuth(false)
    };

    return (
        <AuthContext.Provider value={{ isAuth, User, login, logout, email, password, CallLogin, setEmail, setPassword }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;
