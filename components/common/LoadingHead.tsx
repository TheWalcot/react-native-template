import { View, Text } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";

type Props = {};

const LoadingHead = (props: Props) => {
    return (
        <View
            style={{
                backgroundColor: "transparent",
                alignItems: "center",
                justifyContent: "center",
                flex: 1,
            }}
        >
            <LottieView
                style={{ height: 200, alignSelf: "center", marginBottom: 30, backgroundColor: "transparent" }}
                source={require("../../assets/animations/flyingHead.json")}
                autoPlay
                speed={0.7}
                loop={true}
            />
        </View>
    );
};

export default LoadingHead;
