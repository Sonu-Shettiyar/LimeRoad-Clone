import { Skeleton, SimpleGrid } from "@chakra-ui/react";
import React from "react";

export default function SkeletonLoading() {

    return (<SimpleGrid mt={30} columns={[2, null, 3]} spacing='40px'>
        <Skeleton height='350px' />
        <Skeleton height='350px' />
        <Skeleton height='350px' />
        <Skeleton height='350px' />
        <Skeleton height='350px' />
        <Skeleton height='350px' />
    </SimpleGrid>
    )
}