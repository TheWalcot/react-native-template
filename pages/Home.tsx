import { Box, HStack, Image, ScrollView, Skeleton, Text, VStack } from "native-base";
import React, { useEffect, useRef, useState } from "react";
import { Dimensions, SafeAreaView, TouchableOpacity } from "react-native";
import MainCard from "../components/home/MainCard";
import ProductItems from "../components/home/ProductItems";
import ProductsSkeleton from "../components/skeletons/ProductsSkeleton";


const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;


type Props = {
    navigation: any
}

const Home = (props: Props) => {

    const { navigation } = props;

    const mainCardFunction = () => {
        console.log("mainCardFunction")
    }


    return (
        <SafeAreaView
            style={{
                backgroundColor: "transparent",
                flex: 1,
                paddingTop: 25,
                paddingBottom: windowHeight / 12,
            }}
        >
            <VStack style={{ flex: 1 }} bg={"transparent"}>
                <HStack justifyContent={"center"} alignItems={"center"}>
                    <Text
                        fontFamily={"audiowide"}
                        fontWeight={"400"}
                        fontSize={"30px"}
                        color={"black"}
                        lineHeight={"40px"}
                        textAlign="center"
                        py={3}
                        width={"100%"}
                    >
                        Company Name
                    </Text>
                </HStack>

                <ScrollView
                    showsVerticalScrollIndicator={false}
                    py={2}
                    bg={"transparent"}
                    mb={2}
                    mx={3}

                >
                    <Box my={2}>
                        {/* mx={8} this is old values*/}
                        <MainCard data={dummyDataForMainCard} onPress={mainCardFunction} />
                    </Box>
                    <VStack flexDirection={"row"} flexWrap={"wrap"} paddingBottom={12} justifyContent={"center"}  >
                        {dummyDataForProduct ?
                            dummyDataForProduct.map((product) => <ProductItems product={product} />)
                            : (
                                <ProductsSkeleton />
                            )}
                    </VStack>
                </ScrollView>


            </VStack>
        </SafeAreaView>
    )
}



export default Home;





const dummyDataForMainCard = {
    id: 3,
    title: "string",
    text: "string",
    btnTxt: "string",
};

const dummyDataForProduct = [
    { title: "Product1", secondTitle: "Product1-1" },
    { title: "Product2", secondTitle: "Product2-1" },
    { title: "Product3", secondTitle: "Product3-1" },
    { title: "Product4", secondTitle: "Product4-1" },
    { title: "Product5", secondTitle: "Product5-1" },
    { title: "Product6", secondTitle: "Product6-1" },
    { title: "Product7", secondTitle: "Product7-1" },
]