import {
    Avatar, AvatarBadge,
    Text,
    AvatarGroup,
    Wrap,
    WrapItem,
    VStack,
    Center,
    Container, Divider

} from '@chakra-ui/react'

export default function AvatarPic({ data }) {

    return (

        <Wrap ml={20} >

            <WrapItem>
                <VStack borderRight='1px' borderColor={'green.500'} h={70} pr={4}>
                    <Avatar size={"lg"} color={"red.100"} name='Man Ybrahmov' src='https:/.ly/dan-abramov' />
                    <Text fontSize={12}>MY FEED</Text>
                </VStack>
            </WrapItem>

            {
                data?.map((ele, ind) => {
                    return <WrapItem key={ind} >
                        <VStack ml={4}>
                            <Avatar size={"lg"} name={ele.title} src={ele.profileFilterCircle} />
                            <Text fontSize={12}>{ele.title}</Text>
                        </VStack>
                    </WrapItem>
                })
            }

            <Divider border={"none"} p={2} />

        </Wrap>
    )
}