import { Card, CardHeader, CardBody, CardFooter, Heading, Text, Flex, Box, VStack, Image, HStack, Stack, Avatar } from '@chakra-ui/react'
import { Link, Navigate } from "react-router-dom"
export default function LandingPageCard({ createdBy, image, createdByImage, followers, heading, landingImage, like }) {

    return (

        <Card maxW='350' >
            <CardHeader pt={2} pb={0} mb={0} >

                <Box>
                    <Text letterSpacing={"4px"} fontSize={15} pb={0} mb={0} textAlign="left">
                        {heading}
                    </Text>
                </Box>
            </CardHeader>


            <CardFooter
                mt={0}
                justify='space-between'
                flexWrap='wrap' >
                <img
                    width={"100%"} src={image ? image : landingImage}
                    alt={heading}
                />
                <Flex gap='2' alignItems='center' flexWrap='wrap'>
                    <Avatar name={createdBy} size={"sm"} src={createdByImage} />

                    <Box>
                        <Heading size='sm'>{createdBy}</Heading>
                        <Text>{followers} followers</Text>
                    </Box>
                </Flex>
                <Flex>
                    <VStack>
                        <Avatar name='Segun Adebayo' src='https://www.citypng.com/public/uploads/preview/-516103803914ac88ggaa5.png'
                            mr={"10px"} />
                        <Text size={"sm"}>{like} Likes</Text>
                    </VStack>
                    <VStack>
                        <Link to={"https://api.whatsapp.com/send?text=Checkout+this+amazing+fashion+blog+at+Limeroad%21%20Stock+Up+On+Regulars%21%20https://www.limeroad.com/formal-trousers-stock-up-on-regulars-by-kanika-crystal-st640ef670fd1d3c4563ab02ed?src_id=feed_story__0"}>


                            <Avatar name='WhatsApp' src='https://freepngimg.com/thumb/logo/70086-logo-whatsapp-computer-viber-icons-free-download-image-thumb.png' />
                            <Text>Share</Text>

                        </Link>
                    </VStack>
                </Flex>
            </CardFooter>
        </Card>

    )
}