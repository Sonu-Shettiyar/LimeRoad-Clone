import { MenuItem, MenuList, Box, Center, Container, SimpleGrid } from "@chakra-ui/react"

export default function HomeNav() {


    return (
        <SimpleGrid columns={[2, null, 3]} spacing='40px' p={10} pt={3}>
            <MenuList border="none" >
                <MenuItem color="black" fontSize="lg"><b>Home</b></MenuItem>
                <MenuItem >New Arrivals</MenuItem>               <MenuItem >Conn's x Flex</MenuItem>               <MenuItem >Electronics</MenuItem>               <MenuItem >Health & Wellness</MenuItem>               <MenuItem >Organization & Cleaning</MenuItem>               <MenuItem >Rugs</MenuItem>               <MenuItem >Toys & Games</MenuItem>               <MenuItem >Window Treatments</MenuItem>               <MenuItem >Home Clearance</MenuItem>               <MenuItem >Gift Cards</MenuItem>           </MenuList>

            <MenuList border="none">
                <MenuItem color="black" fontSize="lg"><b>Kitchen</b></MenuItem>              <MenuItem >Appliances</MenuItem>               <MenuItem >Bakeware</MenuItem>               <MenuItem >Cookware</MenuItem>               <MenuItem >Food Storage</MenuItem>               <MenuItem >Utensils & Gadgets</MenuItem>               <MenuItem >Shop All...</MenuItem>           </MenuList>

            <MenuList border="none" >
                <MenuItem color="black" fontSize="lg"><b>Travel & Luggage</b></MenuItem>
                <MenuItem >Carry-On Luggage</MenuItem>               <MenuItem >Checked Luggage</MenuItem>               <MenuItem >Duffle & Weekender Bags</MenuItem>               <MenuItem >Hardside Luggage</MenuItem>               <MenuItem >Luggage Sets</MenuItem>               <MenuItem >Shop All...</MenuItem>           </MenuList>

            <MenuList border="none">
                <MenuItem color="black" fontSize="lg"><b>Home Decor</b></MenuItem>
                <MenuItem >Candles & Fragrance</MenuItem>               <MenuItem >Decorative Accents</MenuItem>               <MenuItem >Lamps & Lighting</MenuItem>               <MenuItem >Throws & Throw Pillows</MenuItem>               <MenuItem >Wall Art & Decor</MenuItem>               <MenuItem >Shop All...</MenuItem>           </MenuList>

            <MenuList border="none">
                <MenuItem color="black" fontSize="lg"><b>Furniture</b></MenuItem>
                <MenuItem >Bedroom</MenuItem>               <MenuItem >Home Office</MenuItem>               <MenuItem >Kitchen & Dining Room</MenuItem>               <MenuItem >Living Room</MenuItem>               <MenuItem >Outdoor & Patio</MenuItem>               <MenuItem >Shop All...</MenuItem>           </MenuList>



        </SimpleGrid>
    )
}