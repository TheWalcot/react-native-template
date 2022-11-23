import React, { ReactNode } from "react";
import { Button, HStack, Modal, Text, VStack } from "native-base";
import { useNavigation, useRoute } from "@react-navigation/native";

type Props = {
    isModalVisible: boolean;
    closeModal: () => void;
    notification: {
        notificationTitle?: string | ReactNode;
        notificationBody?: string | ReactNode;
        notificationButtonText?: string;
        routeTo?: string | null;
    };
};
const default_errors = {
    title: "Error",
    body: "Something went wrong",
    notificationButtonText: "Try again",
};

const ErrorModal = (props: Props) => {
    const navigattion = useNavigation();
    const {
        isModalVisible,
        closeModal,

        notification: {
            notificationTitle = default_errors.title,
            notificationBody = default_errors.body,
            notificationButtonText = default_errors.notificationButtonText,
            routeTo = null,
        },
    } = props;

    const closeModalFn = () => {
        if (routeTo) {
            // Todo: fix type error
            navigattion.navigate(routeTo);
        }
        closeModal();
    };
    return (
        <>
            <Modal isOpen={isModalVisible} onClose={closeModal} avoidKeyboard bottom="4" size="lg">
                <Modal.Content>
                    <Modal.CloseButton />
                    <Modal.Header borderBottomWidth={0}>
                        <Text textAlign={"center"} fontFamily="body" fontSize={20} lineHeight={"26px"}>
                            {notificationTitle}
                        </Text>
                    </Modal.Header>

                    <Modal.Body >
                        <Text textAlign={"center"} fontFamily="body" lineHeight={"26px"} fontSize={12}>
                            {notificationBody}
                        </Text>
                    </Modal.Body>
                    <Modal.Footer borderTopWidth={0}>
                        <Button flex="1" onPress={closeModalFn} bg={"#3461FD"}>
                            {notificationButtonText}
                        </Button>
                    </Modal.Footer>
                </Modal.Content>
            </Modal>
        </>

    );
};

export default ErrorModal;
