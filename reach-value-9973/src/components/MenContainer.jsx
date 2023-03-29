import { Divider, Box } from "@chakra-ui/react";
import AvatarPic from "./Avatar";
import LandingPageCard from "./LandingPageCard";
import PauseOnHover from "./SlickSlider";
let avatarData = [
    {
        "profileFilterCircle": "https:\/\/img0.junaroad.com\/images\/icons\/men\/tshirts.png",
        "title": "t-shirt"
    },
    {
        "profileFilterCircle": "https:\/\/img0.junaroad.com\/images\/icons\/men\/shirts.png",
        "title": "shirts"
    },
    {
        "profileFilterCircle": "https:\/\/img0.junaroad.com\/images\/icons\/men\/jeans.png",
        "title": "jeans"
    },
    {
        "profileFilterCircle": "https:\/\/img0.junaroad.com\/images\/icons\/men\/trousers.png",
        "title": "trousers"
    },
    {
        "profileFilterCircle": "https:\/\/img0.junaroad.com\/images\/icons\/men\/ethnicsets.png",
        "title": "ethnic sets"
    },
    {
        "profileFilterCircle": "https:\/\/img0.junaroad.com\/images\/icons\/men\/footwear.png",
        "title": "footwear"
    },
    {
        "profileFilterCircle": "https:\/\/img0.junaroad.com\/images\/icons\/men\/kids.png",
        "title": "kids"
    },
    {
        "profileFilterCircle": "https:\/\/img0.junaroad.com\/images\/icons\/women\/home.png",
        "title": "Home"
    },
    {
        "profileFilterCircle": "https:\/\/img0.junaroad.com\/images\/icons\/men\/accessory.png",
        "title": "accessory"
    },
    {
        "profileFilterCircle": "https:\/\/img0.junaroad.com\/images\/icons\/men\/winter.png",
        "title": "WINTER"
    }
]
export default function MenContainer() {

    return (<>

        <AvatarPic data={avatarData} />
        <PauseOnHover />


        <Box mt={20}>
            <LandingPageCard />
        </Box>
    </>
    )
}