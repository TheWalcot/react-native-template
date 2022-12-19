import { View, ActivityIndicator } from "react-native";
import React from "react";
import { Heading, HStack, Modal, Spinner, Text, VStack } from "native-base";
import LoadingHead from "./LoadingHead";

type Props = {
  isVisible: boolean;
  loadingModalTxt: string;
  customComponent?: string;
};

const LoadingModal = (props: Props) => {
  const { isVisible, loadingModalTxt, customComponent } = props;

  if (!isVisible) {
    return null;
  }
  return (
    <Modal
      isOpen={isVisible}
      style={{
        backgroundColor: "rgba(68, 68, 70, 0.6) ",
        flex: 1,
        justifyContent: "center",
      }}
    >
      {!customComponent && (
        <VStack space={4} justifyContent="center" alignItems={"center"}>
          <Text
            color="primary.100"
            fontSize="40px"
            fontWeight={400}
            lineHeight={"50px"}
          >
            {loadingModalTxt}
          </Text>
          <Spinner color={"primary.100"} size="lg" />
        </VStack>
      )}
      {customComponent === "LoadingHead" && <LoadingHead />}
    </Modal>
  );
};

export default LoadingModal;
