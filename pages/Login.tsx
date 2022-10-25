import { View, SafeAreaView } from "react-native";
import React from "react";
import {
  VStack,
  Text,
  FormControl,
  Input,
  Button,
  Spinner,
  Image,
} from "native-base";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useFonts, Poppins_400Regular } from "@expo-google-fonts/poppins";

type Props = {};

const loginSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  password: yup.string().required("Password is required"),
});

type LoginForm = {
  name: string;
  password: string;
};

const Login = (props: Props) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      name: "Yusuf",
      password: "123456789",
    },
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (formData: LoginForm) => {
    console.log("formData :: ", formData);
  };
  const NoConnectionImg = require("../assets/images/loginPageLogo.png");

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <VStack flex={1} bg={"white"} mx={8}>
        <VStack flex={0.5} justifyContent={"center"} alignItems="center">
          <Image
            source={NoConnectionImg}
            alt={"studentHelper"}
            width={"200px"}
            height={"200px"}
            borderRadius={"10px"}
            resizeMode="stretch"
            marginTop={16}
          />
          <Text
            fontWeight={600}
            fontSize={"32px"}
            lineHeight={"32px"}
            color={"#2A4ECA"}
            paddingTop={6}
          >
            Login
          </Text>
        </VStack>

        <VStack flex={0.5} space={8}>
          <Controller
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, onBlur, value, name } }) => (
              <FormControl isRequired isInvalid={!!errors[name]}>
                <Input
                  placeholder={"Name"}
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  autoCapitalize="none"
                  backgroundColor={"#F5F9FE"}
                  borderRadius={3}
                  height={12}
                  borderWidth={0}
                />
                <FormControl.ErrorMessage>
                  {errors[name]?.message}
                </FormControl.ErrorMessage>
              </FormControl>
            )}
            name="name"
          />
          <Controller
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, onBlur, value, name } }) => (
              <FormControl isRequired isInvalid={!!errors[name]}>
                <Input
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
                <FormControl.ErrorMessage>
                  {errors[name]?.message}
                </FormControl.ErrorMessage>
              </FormControl>
            )}
            name="password"
          />

          <VStack>
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
                Login
              </Text>
            </Button>
            <Text
              textAlign={"center"}
              paddingTop={3}
              fontSize={"14px"}
              lineHeight={"14px"}
            >
              Don’t have account?{" "}
              <Text
                onPress={() => console.log("navigate the signup page")}
                color={"#3461FD"}
              >
                Sign Up
              </Text>
            </Text>
          </VStack>
        </VStack>
      </VStack>
    </SafeAreaView>
  );
};

export default Login;
