
import { HStack, Skeleton, VStack } from "native-base";
import React, { useEffect, useRef, useState } from "react";

const ProductsSkeleton = () => {
    return (
        <HStack
            style={{
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "center",
            }}>
            <OneItemSkeleton />
            <OneItemSkeleton />
            <OneItemSkeleton />
            <OneItemSkeleton />
        </HStack>
    )
}

export default ProductsSkeleton;


const OneItemSkeleton = () => {
    return (
        <VStack
            w="40%"
            maxW="200"
            space={2}
            overflow="hidden"
            rounded="md"
            py={4}
            px={3}
            m={1}
            _dark={{
                borderColor: "coolGray.500"
            }}
            _light={{
                borderColor: "coolGray.200"
            }}
        >
            <Skeleton h="125px" borderRadius="10px" />
            <Skeleton h={"20px"} px="4" py="1px" alignSelf={"center"} borderRadius="10px" />
            <Skeleton h={"20px"} px="4" py="1px" alignSelf={"center"} borderRadius="10px" />
        </VStack>
    )
}
