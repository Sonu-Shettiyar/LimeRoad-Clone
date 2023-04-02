import { Link } from "react-router-dom"
import "./navbar.css"
import { MenuItem, MenuList, Box, Center, Container, SimpleGrid } from "@chakra-ui/react"
export default function MenNav() {

    return (<SimpleGrid columns={[2, null, 3]} spacing='40px' p={10} pt={3}  >

        <MenuList border={"none"} >
            <Link to={"/productPageCat/men"}>
                <MenuItem color="black" fontSize="lg"><b>Men's Clothing</b></MenuItem>
            </Link>
            <Link to={"/productPageCat/solidplain"}>    <MenuItem >Dress Shirts</MenuItem></Link>

            <Link to={"/productPageCat/jeans"}>
                <MenuItem >Jeans</MenuItem>

            </Link>
            <MenuItem >Pants</MenuItem>
            <MenuItem >Shirts</MenuItem>
            <MenuItem >Suits Separates</MenuItem>
            <MenuItem >Shop All...</MenuItem>
        </MenuList>
        <MenuList>
            <Link to={"/productPageCat/shoes"}>
                <MenuItem color="black" fontSize="lg"><b>Shoes</b></MenuItem>

            </Link>            <MenuItem >Boots</MenuItem>
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
            <Link to={"/productPageCat/watch"}>

                <MenuItem color="black" fontSize="lg"><b>Men's Accessorie's</b></MenuItem>
            </Link>
            <Link to={"/productPageCat/watch"}>

                <MenuItem >Watch's & Belt</MenuItem>
            </Link>
            <MenuItem >Gifts & Gadgets</MenuItem>
            <MenuItem >Hats</MenuItem>
            <MenuItem >Ties & Pocket Squares</MenuItem>
            <MenuItem >Wallets & Money Clips</MenuItem>
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