import "./navbar.css"
import { MenuItem, MenuList, Box, Center, Container, SimpleGrid } from "@chakra-ui/react"
export default function OffersNav() {

    return (
        <SimpleGrid columns={[2, null, 3]} spacing='40px' p={10} pt={3}>
            <MenuList border="none">
                <MenuItem color="black" fontSize="lg"><b>Offer's</b></MenuItem>
                <MenuItem >Active Brands</MenuItem>
                <MenuItem >Flex Exclusives</MenuItem>
                <MenuItem >Jewelry Brands</MenuItem>
                <MenuItem >Kids Brands</MenuItem>
                <MenuItem >Shoe Brands</MenuItem>
            </MenuList>
            <MenuList border="none">
                <MenuItem color="black" fontSize="lg"><b>Designer Brands</b></MenuItem>
                <MenuItem ></MenuItem>
                <MenuItem >Brahmin</MenuItem>
                <MenuItem >COACH</MenuItem>
                <MenuItem >Free People</MenuItem>
                <MenuItem >MICHAEL Michael Kors</MenuItem>
                <MenuItem >Ralph Lauren</MenuItem>
                <MenuItem >Shop All...</MenuItem>
            </MenuList>
            <MenuList border="none">
                <MenuItem color="black" fontSize="lg"><b>Men's & Brands</b></MenuItem>                <MenuItem >Columbia</MenuItem>
                <MenuItem >Crown & Ivy</MenuItem>
                <MenuItem >IZOD</MenuItem>
                <MenuItem >Levi's</MenuItem>
                <MenuItem >Polo Ralph Lauren</MenuItem>
                <MenuItem >Shop All...</MenuItem>
            </MenuList>
            <MenuList border="none">
                <MenuItem color="black" fontSize="lg"><b>Flex & Exclusive</b></MenuItem>
                <MenuItem >Flex & co</MenuItem>
                <MenuItem >Biltmore</MenuItem>
                <MenuItem >Crown & Ivy</MenuItem>
                <MenuItem >THE LIMITED</MenuItem>
                <MenuItem >Wonderly</MenuItem>
                <MenuItem >Shop All...</MenuItem>
            </MenuList>
            <MenuList border="none">
                <MenuItem color="black" fontSize="lg"><b>Beauty & Exclusive</b></MenuItem>

                <MenuItem >Bobbi Brown</MenuItem>
                <MenuItem >Clinique</MenuItem>
                <MenuItem >Elizabeth Arden</MenuItem>
                <MenuItem >Estee Lauder</MenuItem>
                <MenuItem >Shop All...</MenuItem>
            </MenuList>
            <MenuList border="none">
                <MenuItem color="black" fontSize="lg"><b>Women's Brands</b></MenuItem>

                <MenuItem >Women's Brands</MenuItem>
                <MenuItem >Crown & Ivy</MenuItem>
                <MenuItem >Lauren Ralph Lauren</MenuItem>
                <MenuItem >MICHAEL Michael Kors</MenuItem>
                <MenuItem >THE LIMITED</MenuItem>
                <MenuItem >Wonderly</MenuItem>
                <MenuItem >Shop All...</MenuItem>
            </MenuList>
            <MenuList border="none">
                <MenuItem color="black" fontSize="lg"><b>Home Brands</b></MenuItem>


                <MenuItem >Biltmore</MenuItem>
                <MenuItem >Lauren Ralph Lauren</MenuItem>
                <MenuItem >Madison Park</MenuItem>
                <MenuItem >Modern. Southern. Home.</MenuItem>
                <MenuItem >SOLITE</MenuItem>
                <MenuItem >Shop All...</MenuItem>
            </MenuList>
        </SimpleGrid>)
}
// occasion : casual wear
// color : blue
// no. of pcs : 1
// print & pattern : solids
// color family : navy blue
// neck : shirt collar
// fit : reguar fit
// sleeve type : long sleeves
// product details : expand your collection of casual staples with this modish shirt from showoff. you'll love putting this piece on with some trainers and chinos for the perfect outdoor activity with your friends.
// pockets : 2
// material : denim
// brand name : showoff
// country of origin : india
// vendor product name/short description : showoff men's spread collar solid navy blue classic shirt
// length (cms) : 76.2
// care : machine wash
// product code :19409856