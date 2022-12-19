import { View } from "react-native";
import React from "react";
import { VStack, Text, HStack, ChevronRightIcon } from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";

type Props = {
    data: {
        id?: number;
        title: string;
        text: string;
        btnTxt: string;
    };
    onPress: () => void;
};

const MainCard = (props: Props) => {
    return (
        <VStack
            bg={"white"}
            w={"full"}
            p={5}
            borderRadius={"10px"}
            height={32}
            mt={1}
            mb={3}
        >
            <VStack width={"full"} space={4} height={"full"}>
                <HStack space={1}>
                    <Text
                        fontFamily={"body"}
                        fontWeight={"700"}
                        fontSize={"18px"}
                        width={"50%"}
                    >
                        {props.data.text}
                    </Text>
                    <Text
                        fontFamily={"audiowide"}
                        fontWeight={"400"}
                        fontSize={"20px"}
                        lineHeight={"40px"}
                        textAlign="center"
                        width={"50%"}
                        alignSelf="center"
                    >
                        {props.data.title}
                    </Text>
                </HStack>

                <TouchableOpacity onPress={props.onPress} style={{ flexDirection: "row" }}>
                    <Text _dark={{ color: "darkModeWhite" }}>{props.data.btnTxt}</Text>
                    <ChevronRightIcon size={5} ml={3} />
                </TouchableOpacity>
            </VStack>
        </VStack>
    );
};

export default MainCard;
