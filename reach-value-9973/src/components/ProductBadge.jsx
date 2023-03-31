
import { Box, Stack, Badge } from "@chakra-ui/react";
import React from "react";
export default function ProductBadge({ data }) {


    return (<Badge variant='subtle' bgColor={"white"} borderRadius={20} color='blackAlpha.800' fontSize={11} p={2} >
        {data}
    </Badge>



    )
}