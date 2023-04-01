import "./navbar.css"
import { MenuItem, MenuList, Box, Center, Container, SimpleGrid } from "@chakra-ui/react"
export default function MenNav() {

    return (<SimpleGrid columns={[2, null, 3]} spacing='40px' p={10} pt={3}  >

        <MenuList border={"none"} >
            <MenuItem color="black" fontSize="lg"><b>Men's Clothing</b></MenuItem>
            <MenuItem >Dress Shirts</MenuItem>
            <MenuItem >Jeans</MenuItem>
            <MenuItem >Pants</MenuItem>
            <MenuItem >Shirts</MenuItem>
            <MenuItem >Suits Separates</MenuItem>
            <MenuItem >Shop Al...</MenuItem>
        </MenuList>
        <MenuList>
            <MenuItem color="black" fontSize="lg"><b>Shoes</b></MenuItem>
            <MenuItem >Boots</MenuItem>
            <MenuItem >Casual Shoes</MenuItem>
            <MenuItem >Dres Shoes</MenuItem>
            <MenuItem >Slippers</MenuItem>
            <MenuItem >Sneakers</MenuItem>
            <MenuItem >Shop All...</MenuItem>
        </MenuList>
        <MenuList>
            <MenuItem color="black" fontSize="lg"><b>Big & Tall Clothing</b></MenuItem>
            <MenuItem >Active & Outdoor</MenuItem>
            <MenuItem >Pants</MenuItem>
            <MenuItem >Polos</MenuItem>
            <MenuItem >Shirts</MenuItem>
            <MenuItem >Suits & Sports Coats</MenuItem>
            <MenuItem >Shop All...</MenuItem>
        </MenuList>
        <MenuList>
            <MenuItem color="black" fontSize="lg"><b>Men's Accessorie's</b></MenuItem>
            <MenuItem >Belt & Suspenders</MenuItem>
            <MenuItem >Gifts & Gadgets</MenuItem>
            <MenuItem >Hats</MenuItem>
            <MenuItem >Ties & Pocket Squares</MenuItem>
            <MenuItem >Wallets & Money Clips</MenuItem>
            <MenuItem >Shop All...</MenuItem>
        </MenuList>
        <MenuList>
            <MenuItem color="black" fontSize="lg"><b>Men's Jewelary & Watches</b></MenuItem>
            <MenuItem >Bracelets</MenuItem>
            <MenuItem >Jewelary Sets</MenuItem>
            <MenuItem >Necklaces</MenuItem>
            <MenuItem >Rings</MenuItem>
            <MenuItem >Watches</MenuItem>
            <MenuItem >Shop All...</MenuItem>
        </MenuList>
        <MenuList>
            <MenuItem color="black" fontSize="lg"><b>Kids</b></MenuItem>
            <MenuItem >Active & Outdoor</MenuItem>
            <MenuItem >Graphics Tees</MenuItem>
            <MenuItem >Hoodies & Sweatshirts</MenuItem>
            <MenuItem >Jeans</MenuItem>
            <MenuItem >Shirts</MenuItem>
            <MenuItem >Shop All...</MenuItem>
        </MenuList>
        {/* </MenuList> */}
    </SimpleGrid>
    )
}