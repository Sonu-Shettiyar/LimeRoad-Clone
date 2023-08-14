import { Divider, Box, Skeleton, HStack, VStack, Stack, Center, SimpleGrid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import AvatarPic from "./Avatar";
import LandingCards from "./LandingCards";
import PauseOnHover from "./SlickSlider";
import React from 'react';
import axios from 'axios';
import SkeletonLoading from "./SkeletonLoading"



const avatarData = [
    { profileFilterCircle: 'https://img0.junaroad.com/images/icons/men/tshirts.png', title: 'Tshirt', id: 1 }
    ,
    { profileFilterCircle: 'https://img0.junaroad.com/images/icons/men/jeans.png', title: 'Jeans', id: 3 }
    ,
    { profileFilterCircle: 'https://img0.junaroad.com/images/icons/men/accessory.png', title: 'Watch', id: 9 },

    { profileFilterCircle: 'https://img0.junaroad.com/images/icons/men/footwear.png', title: 'Shoes', id: 6 },
    { profileFilterCircle: 'https://img0.junaroad.com/images/icons/men/trousers.png', title: 'Trousers', id: 4 }
    ,
    { profileFilterCircle: 'https://img0.junaroad.com/images/icons/men/ethnicsets.png', title: 'Ethnic sets', id: 5 }
    ,
    { profileFilterCircle: 'https://img0.junaroad.com/images/icons/men/kids.png', title: 'Kids', id: 7 }
    ,
    { profileFilterCircle: 'https://img0.junaroad.com/images/icons/women/home.png', title: 'Home', id: 8 }
    ,

    { profileFilterCircle: 'https://img0.junaroad.com/images/icons/men/shirts.png', title: 'Shirts', id: 2 }
    ,
    { profileFilterCircle: 'https://img0.junaroad.com/images/icons/men/winter.png', title: 'Winter', id: 10 }
]
export default function MenContainer() {
    const [menData, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    function FetchMenData() {
        setLoading(true)
        axios.get(`https://lane-attire-product-api.onrender.com/MenLanding`)
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

        {loading && <SkeletonLoading />}
        <Center mt={20}>

            <LandingCards key={1} data={menData} />
        </Center>
    </>
    )
}
