import { Flex } from "@chakra-ui/react";
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Button, Text, Image
} from '@chakra-ui/react'
import Login from "./Login"
import { useContext } from "react";
import { AuthContext } from "./AuthContext";

export default function Account() {

    const { isAuth, User } = useContext(AuthContext)
    return (
        <Menu>
            <MenuButton as={Text} colorScheme='pink'>
                Profile
            </MenuButton>

            <MenuList>


                <MenuGroup title='Profile'>
                    <Flex m={[3, null, 2]} justify="space-between">
                        <Image
                            boxSize='2rem'
                            borderRadius='full'
                            src='https://placekitten.com/120/120'
                            alt='Simon the pensive'

                        />
                        {/* <Text>name</Text>
                        <Text>Sign Up </Text> */}
                        {isAuth ? <Text>{User.name}</Text> : <Login />}
                    </Flex>

                    <MenuItem>My Account</MenuItem>
                    <MenuItem>Payments </MenuItem>
                </MenuGroup>
                <MenuDivider />
                <MenuGroup title='Help'>
                    <MenuItem>Docs</MenuItem>
                    <MenuItem>FAQ</MenuItem>
                </MenuGroup>
            </MenuList>
        </Menu>
    )
}