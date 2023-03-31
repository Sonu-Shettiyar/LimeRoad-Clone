import React, { Component } from "react";
import Slider from "react-slick";
import ProductBadge from "./ProductBadge";
import { Box } from "@chakra-ui/react";

export default function BadgeSlickSlider({ data }) {

    var settings = {

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
    let categoryData = data.map((ele) => ele.category)
    let brandData = data.map((ele) => ele.brand)
    let uniqueData = {}
    let filCategory = categoryData.map((element) => {
        if (uniqueData[element] == undefined) {
            uniqueData[element] = 1;
            return element;
        }

    })
    let filBrand = brandData.map((element) => {
        if (uniqueData[element] == undefined) {
            uniqueData[element] = 1;
            return element;
        }
    })
    let uniqueArr = []
    for (let key in uniqueData) {
        if (key !== "undefined") {
            uniqueArr.push(key)
        }
    }

    return (
        <Box style={{ padding: { base: "12px", sm: "4px", md: "8px" }, marginLeft: "30px", width: { base: "1300px", sm: "500px", md: "950px" } }}>
            <Slider {...settings}  >
                {

                    uniqueArr.map((ele, ind) => {
                        return <ProductBadge key={ind} data={ele
                        } />
                    })}

            </Slider>
        </Box>
    );
}
