
import React from "react";
import AvatarPic from "./Avatar";
import PauseOnHover from "./SlickSlider";

const avatarData = [
    {
        "profileFilterCircle": "https:\/\/img0.junaroad.com\/images\/icons\/women\/kurtas.png",
        "title": "kurtas"
    },
    {
        "profileFilterCircle": "https:\/\/img0.junaroad.com\/images\/icons\/women\/tops.png",
        "title": "tops"
    },
    {
        "profileFilterCircle": "https:\/\/img0.junaroad.com\/images\/icons\/women\/dresses.png",
        "title": "dresses"
    },
    {
        "profileFilterCircle": "https:\/\/img0.junaroad.com\/images\/icons\/women\/sarees.png",
        "title": "sarees"
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

    return (
        <>
            <AvatarPic data={avatarData} />
            <PauseOnHover />
        </>
    )
}