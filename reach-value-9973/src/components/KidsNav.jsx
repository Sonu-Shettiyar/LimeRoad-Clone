import { MenuItem, MenuList, Box, Center, Container, SimpleGrid } from "@chakra-ui/react"
import "./navbar.css"
export default function kidsNav() {

    return (

        <SimpleGrid columns={[2, null, 3]} spacing='40px' p={10} pt={3} >
            <MenuList border={"none"}>
                <MenuItem color="black" fontSize="lg"><b>Kids</b></MenuItem>

                <MenuItem >New Arrival</MenuItem>
                <MenuItem >Baby Essentials</MenuItem>
                <MenuItem >Birthday & Holiday</MenuItem>
                <MenuItem >Character Shop</MenuItem>
                <MenuItem >The Culture Shop</MenuItem>
                <MenuItem >Dresswear</MenuItem>
                <MenuItem >Gift for Kids</MenuItem>
                <MenuItem >Kid's Shoes</MenuItem>
                <MenuItem >Nursery & Decor</MenuItem>
                <MenuItem >Toys & Games</MenuItem>
                <MenuItem >Baby & Kids Clearance</MenuItem>
                <MenuItem >Gift Cards</MenuItem>
            </MenuList>
            <MenuList>
                <MenuItem color="black" fontSize="lg"><b>Boy's Clothing</b></MenuItem>

                <MenuItem >Boy's Clothing</MenuItem>
                <MenuItem >Activewear</MenuItem>
                <MenuItem >Jeans</MenuItem>
                <MenuItem >Pants</MenuItem>
                <MenuItem >Shits</MenuItem>
                <MenuItem >Suits & Dresswear</MenuItem>
                <MenuItem >Shop All...</MenuItem>
            </MenuList>
            <MenuList>
                <MenuItem color="black" fontSize="lg"><b>Junior's Clothing</b></MenuItem>

                <MenuItem >Activewear</MenuItem>
                <MenuItem >Dresses</MenuItem>
                <MenuItem >Jeans</MenuItem>
                <MenuItem >Plus Size</MenuItem>
                <MenuItem >Tops</MenuItem>
                <MenuItem >Shop All...</MenuItem>
            </MenuList>
            <MenuList>
                <MenuItem color="black" fontSize="lg"><b>Girl's Clothing</b></MenuItem>
                <MenuItem >Activewear</MenuItem>
                <MenuItem >Dresses & Shirts</MenuItem>
                <MenuItem >Jeans</MenuItem>
                <MenuItem >Sets & Outfits</MenuItem>
                <MenuItem >Tops</MenuItem>
                <MenuItem >Shop All...</MenuItem>
            </MenuList>
            <MenuList>
                <MenuItem color="black" fontSize="lg"><b>Shop by Size</b></MenuItem>
                <MenuItem >Boys (8-20)</MenuItem>
                <MenuItem >Free People</MenuItem>
                <MenuItem >Michael Kors</MenuItem>
                <MenuItem >Ralph Lauren</MenuItem>
                <MenuItem >Shop All...</MenuItem>
            </MenuList>
            <MenuList>
                <MenuItem color="black" fontSize="lg"><b>Gifts by Recipient</b></MenuItem>
                <MenuItem >For the Foodie</MenuItem>
                <MenuItem >For the Hostess</MenuItem>
                <MenuItem >For the Outdoorsman</MenuItem>
                <MenuItem >For the Sports Fan</MenuItem>
                <MenuItem >For the Techie</MenuItem>
                <MenuItem >Gift Cards</MenuItem>
                <MenuItem >Shop All...</MenuItem>
            </MenuList>
        </SimpleGrid>
    )
}