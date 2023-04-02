
import { Divider, Box, Skeleton, HStack, VStack, Stack, Center, SimpleGrid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import AvatarPic from "./Avatar";
import LandingCards from "./LandingCards";
import PauseOnHover from "./SlickSlider";
import React from 'react';
import axios from 'axios';
import SkeletonLoading from "./SkeletonLoading"


const avatarData = [
    {
        "profileFilterCircle": "https:\/\/img0.junaroad.com\/images\/icons\/women\/kurtas.png",
        "title": "kurta"
    },
    {
        "profileFilterCircle": "https:\/\/img0.junaroad.com\/images\/icons\/women\/tops.png",
        "title": "top"
    },
    {
        "profileFilterCircle": "https:\/\/img0.junaroad.com\/images\/icons\/women\/sarees.png",
        "title": "saree"
    },
    {
        "profileFilterCircle": "https:\/\/img0.junaroad.com\/images\/icons\/women\/dresses.png",
        "title": "dresses"
    },
    {
        "profileFilterCircle": "https:\/\/img0.junaroad.com\/images\/icons\/women\/suits.png",
        "title": "Suits"
    },
    {
        "profileFilterCircle": "https:\/\/img0.junaroad.com\/images\/icons\/women\/ethnicsets.png",
        "title": "ethnic sets"
    },
    {
        "profileFilterCircle": "https:\/\/img0.junaroad.com\/images\/icons\/women\/bottoms.png",
        "title": "bottoms"
    },
    {
        "profileFilterCircle": "https:\/\/img0.junaroad.com\/images\/icons\/women\/bags.png",
        "title": "bags"
    },
    {
        "profileFilterCircle": "https:\/\/img0.junaroad.com\/images\/icons\/women\/footwear.png",
        "title": "footwear"
    },


    {
        "profileFilterCircle": "https:\/\/img0.junaroad.com\/images\/icons\/women\/winter.png",
        "title": "WINTER"
    }
]

export default function WomenContainer() {
    const [womenData, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    function FetchwoMenData() {
        setLoading(true)
        axios.get(`https://lane-attire-product-api.onrender.com/WomenLanding`)
            .then((ele) => {

                setData(ele.data)
                setLoading(false)
            })
    }
    useEffect(() => {
        FetchwoMenData();
    }, [])

    return (
        <>
            <AvatarPic data={avatarData} />
            <PauseOnHover />
            {loading && <SkeletonLoading />}
            <Center mt={20}>

                <LandingCards key={1} data={womenData} />
            </Center>
        </>
    )
}