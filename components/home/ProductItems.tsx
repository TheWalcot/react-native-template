import { Image, Text, VStack } from "native-base";
import React, { useEffect, useRef, useState } from "react";
import { TouchableOpacity } from "react-native";


type productType = {
    product: {
        title: string;
        secondTitle: string;
        imageUrl?: string;
    }

}
const ProductItems = (props: productType) => {
    const { product } = props;
    return (
        <TouchableOpacity

        >
            <VStack space={1} py={4} px={3} justifyContent="center" alignItems="center">
                <VStack>
                    <Image source={{ uri: "http://www.refsan.com.tr/Uploads/UrunResimleri/buyuk/TOZ-CAM-BOYASI-261310-ACIK-MAVI-a7d4.JPG" }} alt="Template" size={150} borderRadius={"10px"} />
                </VStack>

                <VStack>
                    <Text
                        fontFamily={"body"}
                        fontWeight="700"
                        fontSize="16px"
                        lineHeight="21px"
                        numberOfLines={1}
                        flexWrap={"wrap"}
                        width={"150px"}
                    >
                        {product.title}
                    </Text>

                    <Text
                        fontFamily={"body"}
                        fontWeight="400"
                        fontSize={"13px"}
                        lineHeight="17px"
                    >
                        {product.secondTitle}
                    </Text>
                </VStack>
            </VStack>
        </TouchableOpacity>
    )
}

export default ProductItems;