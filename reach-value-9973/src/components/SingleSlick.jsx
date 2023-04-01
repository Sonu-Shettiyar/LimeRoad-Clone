import { Box, Center } from "@chakra-ui/react";
import "./SingleSlick.module.css"
import Slider from "react-slick";
let arr = ["https://img3.junaroad.com/uiproducts/18291072/zoom_0-1646810576.jpg",
    "https://img3.junaroad.com/uiproducts/18291072/zoom_0-1646810576.jpg", "https://img3.junaroad.com/uiproducts/18291072/zoom_0-1646810576.jpg", "https://img3.junaroad.com/uiproducts/18291072/zoom_0-1646810576.jpg"]
export default function SingleSlick({ image }) {


    const settings = {
        customPaging: function (i) {
            return (
                <a>
                    <img src={`${image}`} />
                </a>
            );
        },
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1
    };
    return (
        <Box id="SingleSlick" style={{ width: "700px" }} >
            <Slider {...settings} border={"1px solid green"} style={{ padding: "1%" }}>
                <div>
                    <img src={`${image}`} style={{ width: "95%" }} />
                </div>
                <div>
                    <img src={`${image}`} style={{ width: "95%" }} />
                </div>
                <div>
                    <img src={`${image}`} style={{ width: "95%" }} />


                </div>
                <div>
                    <img src={`${image}`} style={{ width: "95%" }} />


                </div>
            </Slider>
        </Box>
    );
}
