import LandingPageCard from "./LandingPageCard";
import { Box, SimpleGrid } from "@chakra-ui/react";

export default function LandingCards({ data }) {
    return (


        <SimpleGrid columns={[2, null, 3]} spacing='15px'>


            {


                data?.map((ele, ind) => {
                    return (
                        <LandingPageCard key={ind + 1} {...ele} />

                    )
                })

            }
        </SimpleGrid>
    )
} 