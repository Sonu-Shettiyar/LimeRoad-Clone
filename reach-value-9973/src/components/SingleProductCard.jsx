import { Box, Heading, Image, Text } from "@chakra-ui/react"

export default function SingleProductCard({ brand, discount, category, id, image, mrp, price, title }) {


    return (
        <Box maxW='xs' borderWidth='1px' bgColor={"white"} overflow='hidden'>
            <Image src={image} alt={title} w={"100%"} />

            <Box p='4'>
                <Box display='flex' alignItems='baseline'>

                    <Box
                        display={"flex"}
                        fontWeight='semibold'
                        fontSize='10px'
                        textTransform='uppercase'
                        ml='1'
                    >
                        <Heading fontSize={12} color={"blackAlpha.700"} mr={1}>₹ {price}</Heading> <Text mr={1} color="gray.500" style={{ textDecoration: "line-through" }}>₹{mrp}</Text> <Text mr={1} color="green.300" textDecoration={"line-through"}>{discount}</Text>

                    </Box>
                </Box>

                <Box
                    ml='1'

                    mt='1'
                    fontWeight='semibold'
                    as='h6'
                    // lineHeight='tight'

                    color='gray.300'
                    letterSpacing={1}
                    noOfLines={1}
                    textAlign={"left"}
                >
                    By {brand}
                </Box>




            </Box>
        </Box>
    )
}