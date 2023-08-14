import React from "react";
import Slider from "react-slick";
import ProductBadge from "./ProductBadge";
import { Box } from "@chakra-ui/react";

export default function BadgeSlickSlider({ data }) {
    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 10,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const uniqueData = {};

    data.forEach((ele) => {
        if (ele.category && !uniqueData[ele.category]) {
            uniqueData[ele.category] = true;
        }
        if (ele.brand && !uniqueData[ele.brand]) {
            uniqueData[ele.brand] = true;
        }
    });

    const uniqueArr = Object.keys(uniqueData).filter(key => key !== "undefined");

    return (
        <Box
            style={{
                padding: { base: "12px", sm: "4px", md: "8px" },
                marginLeft: "30px",
                width: { base: "1300px", sm: "500px", md: "950px" }
            }}
        >
            <Slider {...settings}>
                {uniqueArr.map((ele, ind) => (
                    <ProductBadge key={ind} data={ele} />
                ))}
            </Slider>
        </Box>
    );
}
