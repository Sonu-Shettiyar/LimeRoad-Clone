import { Divider, Box, Skeleton, HStack, VStack, Stack, Center, SimpleGrid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import AvatarPic from "./Avatar";
import LandingCards from "./LandingCards";
import LandingPageCard from "./LandingPageCard";
import PauseOnHover from "./SlickSlider";
import React from 'react';
import axios from 'axios';



const avatarData = [
    { profileFilterCircle: 'https://img0.junaroad.com/images/icons/men/tshirts.png', title: 't-shirt', id: 1 }
    ,
    { profileFilterCircle: 'https://img0.junaroad.com/images/icons/men/shirts.png', title: 'shirts', id: 2 }
    ,
    { profileFilterCircle: 'https://img0.junaroad.com/images/icons/men/jeans.png', title: 'jeans', id: 3 }
    ,
    { profileFilterCircle: 'https://img0.junaroad.com/images/icons/men/trousers.png', title: 'trousers', id: 4 }
    ,
    { profileFilterCircle: 'https://img0.junaroad.com/images/icons/men/ethnicsets.png', title: 'ethnic sets', id: 5 }
    ,
    { profileFilterCircle: 'https://img0.junaroad.com/images/icons/men/footwear.png', title: 'footwear', id: 6 }
    ,
    { profileFilterCircle: 'https://img0.junaroad.com/images/icons/men/kids.png', title: 'kids', id: 7 }
    ,
    { profileFilterCircle: 'https://img0.junaroad.com/images/icons/women/home.png', title: 'Home', id: 8 }
    ,
    { profileFilterCircle: 'https://img0.junaroad.com/images/icons/men/accessory.png', title: 'accessory', id: 9 }
    ,
    { profileFilterCircle: 'https://img0.junaroad.com/images/icons/men/winter.png', title: 'WINTER', id: 10 }
]
export default function MenContainer() {
    const [menData, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    function FetchMenData() {
        setLoading(true)
        axios.get(`https://uptight-ray-blazer.cyclic.app/MenLanding`)
            .then((ele) => {

                setData(ele.data)
                setLoading(false)
            })
    }

    useEffect(() => {
        FetchMenData();
    }, [])



    return (<>


        <AvatarPic data={avatarData} />
        <PauseOnHover />

        {loading && <SimpleGrid mt={30} columns={[2, null, 3]} spacing='40px'>
            <Skeleton height='350px' />
            <Skeleton height='350px' />
            <Skeleton height='350px' />
            <Skeleton height='350px' />
            <Skeleton height='350px' />
            <Skeleton height='350px' />
        </SimpleGrid>}
        <Center mt={20}>

            <LandingCards key={1} data={menData} />
        </Center>
    </>
    )
}
