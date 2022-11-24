import { Box, ChevronRightIcon, Image, Text, View, VStack } from 'native-base';
import React, { useState } from 'react'
import { Dimensions, TouchableOpacity } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Carousel from 'react-native-reanimated-carousel';

type Props = {}

type TutorialDataType = { data: tutorialItem[] };

type tutorialItem = {
    title: string;
    context: string;
    imageUrl: string;
};

const tutorialData: TutorialDataType = {
    data: [
        {
            title: "Welcome to App Name",
            context: "Lets chill and lose weight together.",
            imageUrl:
                "https://images.unsplash.com/photo-1585664811087-47f65abbad64?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        },
        {
            title: "Delivery Every Day",
            context: "Select your delivery time while doing your stuff until enjoying our products.",
            imageUrl:
                "https://images.unsplash.com/photo-1582902281043-69c645f40cd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        },
        {
            title: "Settings for you",
            context: "You can set your preferred language and UI Mode from Settings at your profile segment.",
            imageUrl:
                "https://images.unsplash.com/photo-1569144157595-7a2d2e32258f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        },
    ],
};

const Tutorial = (props: Props) => {
    const width = Dimensions.get('window').width;

    const [activeSlide, setActiveSlide] = useState(0);

    const renderItem = ({ item, index }: { item: any; index: any }) => {
        return (
            <VStack justifyContent={"center"} alignItems={"center"} alignContent={"center"} p={3} flex={1} space={8}>
                <Image source={{ uri: item.imageUrl }} alt="Heem" size={"250px"} borderRadius={"125px"} resizeMode="cover" />
                <Text fontFamily={"body"} fontWeight="700" fontSize={"22px"} lineHeight="22px">
                    {item.title}
                </Text>
                <Text mx={10} fontFamily={"body"} fontWeight="400" fontSize={"15px"} lineHeight="21px">
                    {item.context}
                </Text>
            </VStack>
        );
    };
    return (
        <VStack flex={1} pt={20} pb={10} justifyContent="center" alignSelf={"center"} >
            {activeSlide != tutorialData.data.length - 1 ? (
                <Box position={"absolute"} right={10} top={16}>
                    <TouchableOpacity
                        style={{ flexDirection: "row", alignItems: "center" }}
                        onPress={() => {
                            console.log("home a navigate")

                        }}
                    >
                        <Text
                            fontFamily={"body"}
                            fontWeight="400"
                            fontSize={"15px"}
                            lineHeight="21px"
                            color={"black"}

                        >
                            Skip
                        </Text>
                        <ChevronRightIcon size={4} color={"black"} />
                    </TouchableOpacity>
                </Box>
            ) : null}


            <GestureHandlerRootView>
                <Carousel
                    loop={false}
                    width={width}
                    height={width}
                    // autoPlay={true}
                    data={tutorialData.data}
                    scrollAnimationDuration={400}
                    onSnapToItem={(index) => setActiveSlide(index)}
                    renderItem={renderItem}
                />
            </GestureHandlerRootView>

        </VStack>
    )
}

export default Tutorial