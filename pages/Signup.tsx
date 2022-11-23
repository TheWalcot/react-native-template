import { VStack, Text, useColorModeValue, ScrollView, FormControl, Input, HStack, Box, Checkbox, Button } from 'native-base'
import React from 'react'
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { SafeAreaView } from 'react-native';

type Props = {
    navigation: any
}

const signupSchema = yup.object().shape({
    email: yup.string().required("Email is required"),
    password: yup
        .string()
        .required("Please Enter your password")
        .matches(/^.{8,}$/, "Pasword must contain min 8 Characters"),

    password_again: yup.string().oneOf([yup.ref("password"), null]),
    fullName: yup.string().required("Email is required"),
    phone: yup.string().length(10).required("Phone is required"),
});

export type SignupForm = {
    email: string;
    password: string;
    password_again: string;
    phone: string;
    fullName: string;
};


const Signup = (props: Props) => {
    const {
        control,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        defaultValues: {
            email: "asd" + String(Math.random()).slice(0, 6) + "@hotmail.com",
            password: "123123123",
            password_again: "123123123",
            fullName: "Bedirhan Celayir",
            phone: "5443390800",
        },
        resolver: yupResolver(signupSchema),
    });

    const sanitizePhoneInput = (str: string) => {
        return str.length >= 10 ? str.slice(0, 10) : str;
    };


    const onSubmit = async (formData: SignupForm) => {
        console.log("formData :: ", formData)

    };

    return (
        <SafeAreaView style={{ backgroundColor: useColorModeValue("white", "black") }}>
            <VStack
                h={"full"}
                bg={"white"}
                _dark={{
                    bg: "black",
                }}
                width={"100%"}
                display="flex"
                flexDirection={"column"}
                justifyContent="center"
                px={8}
            >
                <ScrollView showsVerticalScrollIndicator={false} mt={5}>

                    <VStack mb={5}>

                        <Controller
                            control={control}
                            rules={{ required: true }}
                            render={({ field: { onChange, onBlur, value, name } }) => (
                                <FormControl my={1} isRequired isInvalid={!!errors[name]}>
                                    <FormControl.Label>
                                        <Text
                                            variant={"label"}
                                            mb={4}
                                            _dark={{
                                                color: "white",
                                            }}
                                        >
                                            Email
                                        </Text>
                                    </FormControl.Label>
                                    <Input
                                        variant="primary"
                                        placeholder={"Name"}
                                        value={value}
                                        onChangeText={onChange}
                                        onBlur={onBlur}
                                        backgroundColor={"#F5F9FE"}
                                        borderRadius={3}
                                        height={12}
                                        borderWidth={0}
                                    />
                                    <FormControl.ErrorMessage>{errors[name]?.message}</FormControl.ErrorMessage>
                                </FormControl>
                            )}
                            name="email"
                        />

                        <Controller
                            control={control}
                            rules={{ required: true }}
                            render={({ field: { onChange, onBlur, value, name } }) => (
                                <FormControl my={1} isRequired isInvalid={!!errors[name]}>
                                    <FormControl.Label>
                                        <Text
                                            variant={"label"}
                                            mb={4}
                                            _dark={{
                                                color: "white",
                                            }}
                                        >
                                            Phone Number
                                        </Text>
                                    </FormControl.Label>
                                    <HStack >
                                        <Input
                                            variant="primary"
                                            w={"100%"}
                                            placeholder={"Phone Number"}
                                            value={value}
                                            onChangeText={(event) => onChange(sanitizePhoneInput(event))}
                                            onBlur={onBlur}
                                            keyboardType={"phone-pad"}
                                            backgroundColor={"#F5F9FE"}
                                            borderRadius={3}
                                            height={12}
                                            borderWidth={0}
                                        />
                                    </HStack>
                                    <FormControl.ErrorMessage>{errors[name]?.message}</FormControl.ErrorMessage>
                                </FormControl>
                            )}
                            name="phone"
                        />
                        <Controller
                            control={control}
                            rules={{ required: true }}
                            render={({ field: { onChange, onBlur, value, name } }) => (
                                <FormControl my={1} isRequired isInvalid={!!errors[name]}>
                                    <FormControl.Label>
                                        <Text
                                            variant={"label"}
                                            mb={4}
                                            _dark={{
                                                color: "white",
                                            }}
                                        >
                                            Full Name
                                        </Text>
                                    </FormControl.Label>
                                    <Input
                                        variant="primary"
                                        placeholder={"Full name"}
                                        value={value}
                                        onChangeText={onChange}
                                        onBlur={onBlur}
                                        backgroundColor={"#F5F9FE"}
                                        borderRadius={3}
                                        height={12}
                                        borderWidth={0}
                                    />
                                    <FormControl.ErrorMessage>{errors[name]?.message}</FormControl.ErrorMessage>
                                </FormControl>
                            )}
                            name="fullName"
                        />

                        <Controller
                            control={control}
                            rules={{ required: true }}
                            render={({ field: { onChange, onBlur, value, name } }) => (
                                <FormControl my={1} isRequired isInvalid={!!errors[name]}>
                                    <FormControl.Label>
                                        <Text
                                            variant={"label"}
                                            mb={4}
                                            _dark={{
                                                color: "White",
                                            }}
                                        >
                                            Password
                                        </Text>
                                    </FormControl.Label>
                                    <Input
                                        variant="primary"
                                        placeholder={"Password"}
                                        value={value}
                                        onChangeText={onChange}
                                        onBlur={onBlur}
                                        type="password"
                                        backgroundColor={"#F5F9FE"}
                                        borderRadius={3}
                                        height={12}
                                        borderWidth={0}
                                    />
                                    <FormControl.ErrorMessage>{errors[name]?.message}</FormControl.ErrorMessage>
                                </FormControl>
                            )}
                            name="password"
                        />
                        <Controller
                            control={control}
                            rules={{ required: true }}
                            render={({ field: { onChange, onBlur, value, name } }) => (
                                <FormControl my={1} isRequired isInvalid={!!errors[name]}>
                                    <FormControl.Label>
                                        <Text
                                            variant={"label"}
                                            mb={4}
                                            _dark={{
                                                color: "white",
                                            }}
                                        >
                                            Password Again
                                        </Text>
                                    </FormControl.Label>
                                    <Input
                                        variant="primary"
                                        placeholder={"Password Again"}
                                        value={value}
                                        onChangeText={onChange}
                                        onBlur={onBlur}
                                        type="password"
                                        backgroundColor={"#F5F9FE"}
                                        borderRadius={3}
                                        height={12}
                                        borderWidth={0}
                                    />
                                    <FormControl.ErrorMessage>{errors[name]?.message}</FormControl.ErrorMessage>
                                </FormControl>
                            )}
                            name="password_again"
                        />


                    </VStack>
                    <Box mt={4}>
                        <Button
                            w={"full"}
                            variant={"large"}
                            size={"lg"}
                            bg={"#3461FD"}
                            h={"55px"}
                            onPress={handleSubmit(onSubmit)}
                        >

                            <Text
                                color={"white"}
                                fontWeight={500}
                                fontSize={"18px"}
                                lineHeight={"18px"}
                            >
                                Signup
                            </Text>
                        </Button>
                    </Box>
                </ScrollView>

            </VStack>
        </SafeAreaView>
    )
}

export default Signup