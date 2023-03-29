import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
import { Flex, Square, Text, Divider } from "@chakra-ui/react";

const slidingImage = [
    {
        "image": "https://img1.junaroad.com//assets/images/mobileNotif/img-1658918101342.jpg?crsl_pos=0"
    },
    {
        "image": "https://img1.junaroad.com//assets/images/mobileNotif/img-1667988209100.jpg?crsl_pos=0"
    },
    {
        "image": "https://img1.junaroad.com//assets/images/mobileNotif/img-1651469168362.jpg?crsl_pos=0"
    },
    {
        "image": "https://img1.junaroad.com//assets/images/mobileNotif/img-1674029296684.jpg?crsl_pos=0"
    },
    {
        "image": "https://img1.junaroad.com//assets/images/mobileNotif/img-1676008328934.jpg?crsl_pos=0"
    },
    {
        "image": "https://img1.junaroad.com//assets/images/mobileNotif/img-1678466728484.jpg?crsl_pos=0"
    },
    {
        "image": "https://img1.junaroad.com//assets/images/mobileNotif/img-1679910119705.jpg?crsl_pos=0"
    },
    {
        "image": "https://img1.junaroad.com//assets/images/mobileNotif/img-1679910400865.jpg?crsl_pos=0"
    },
    {
        "image": "https://img1.junaroad.com//assets/images/mobileNotif/img-1667388470485.jpg?crsl_pos=0"
    }
]
export default class PauseOnHover extends Component {
    render() {
        var settings = {
            dots: true,
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2500,
            pauseOnHover: true
        };
        return (
            <div>


                <div style={{ backgroundColor: "#FFE8F0" }}>
                    <Flex p={2}>
                        <Square>
                            <img src="https://img0.junaroad.com/images/icons/130440_discount.gif" width={68} style={{ padding: "5px" }} alt="" />

                        </Square>
                        <div style={{ textAlign: "left", padding: "10px 0px 0px 10px" }}>
                            {/* <h2>Pay Online & Get Flat 10% Off</h2>
                             */}

                            <Text fontSize={15} fontWeight={"bold"}>Pay Online & Get Flat 10% Off</Text>
                            <Text fontSize={"sm"}>Paytm, Gpay, PhonePe, Net Banking, Debit & Credit Cards</Text>
                        </div>
                    </Flex>
                </div>
                <Slider {...settings}>
                    {
                        slidingImage?.map((ele, ind) => {
                            return <div key={ind}>
                                <img src={ele.image} />
                            </div>
                        })
                    }

                </Slider>
            </div>
        );
    }
}
