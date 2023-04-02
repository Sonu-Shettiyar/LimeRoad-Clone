import { Card, Image, Stack, CardBody, Heading, Text, CardFooter, Button, Flex, Box, IconButton } from "@chakra-ui/react";
import { RiDeleteBin6Line } from "react-icons/ri";

export default function CartItemsCard({ title, brand, price, image, id, handleDelete }) {


    return <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
        h={20}

    >
        <Image
            // objectFit='cover'
            maxW={{ base: '40%', sm: '20' }}
            h={20}
            src={`${image}`}            // src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
            alt={brand}
        />

        <Stack>
            <CardBody>
                <Heading size='sm'>The perfect latte</Heading>


                <Flex fontSize={10} p={0} justify={"space-between"} align={"center"} variant='outline' colorScheme='dark'>
                    <Text fontSize={12}> ₹ {price}</Text> <IconButton
                        variant='outline'
                        border={"none"}
                        aria-label='Call Sage'
                        fontSize='20px'
                        onClick={() => handleDelete(id)}
                        icon={<RiDeleteBin6Line />}
                    />
                </Flex>
            </CardBody>

            <CardFooter>
                <Button variant='outline' colorScheme='dark' onClick={() => handleDelete(id)}>
                    Remove
                </Button>
            </CardFooter>
        </Stack>
    </Card >
}