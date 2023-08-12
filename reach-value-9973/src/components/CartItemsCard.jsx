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
            maxW={{ base: '40%', sm: '20' }}
            h={20}
            src={`${image}`}
            alt={brand}
        />

        <Stack>
            <CardBody>
                <Heading size='sm'>{title}</Heading>
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