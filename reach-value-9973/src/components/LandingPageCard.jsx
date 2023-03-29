import { Card, CardHeader, CardBody, CardFooter, Heading, Text, Flex, Box, VStack, Image, HStack, Stack, Avatar } from '@chakra-ui/react'
export default function LandingPageCard() {

    return (
        <Box>
            <Card maxW='350' >
                <CardHeader>

                    <Heading fontSize={25} textAlign="left">
                        title
                    </Heading>
                </CardHeader>


                <CardFooter
                    justify='space-between'
                    flexWrap='wrap'
                    sx={{
                        '& > button': {
                            minW: '136px',
                        },
                    }}
                >
                    <Image
                        objectFit='cover'
                        src='https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                        alt='Chakra UI'
                    />
                    <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                        <Avatar name='Segun Adebayo' size={"sm"} src='https://bit.ly/sage-adebayo' />

                        <Box>
                            <Heading size='sm'>Segun Adebayo</Heading>
                            <Text>Creator, Chakra UI</Text>
                        </Box>
                    </Flex>
                    <Flex>
                        <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo'
                            mr={"10px"} />
                        <Avatar name='WhatsApp' src='https://drive.google.com/file/d/1C7mHctVwA90us6_ZajD-jQG0Kz6HIQI-/view?usp=sharing' />
                    </Flex>
                </CardFooter>
            </Card>
        </Box>
    )
}