import {
  Box,
  HStack,
  Image,
  ScrollView,
  Skeleton,
  Text,
  VStack,
  Icon,
  Button,
} from "native-base";
import React, { useEffect, useRef, useState, useTransition } from "react";
import { Dimensions, SafeAreaView, TouchableOpacity } from "react-native";
import MainCard from "../components/home/MainCard";
import ProductItems from "../components/home/ProductItems";
import ProductsSkeleton from "../components/skeletons/ProductsSkeleton";
import Ionicons from "react-native-vector-icons/Ionicons";
import * as FileSystem from "expo-file-system";
import * as ImagePicker from "expo-image-picker";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

type Props = {
  navigation: any;
};
// @types/react-native-vector-icons
const Home = (props: Props) => {
  const { navigation } = props;
  const [img, setImg] = useState<string>("");
  const [fileName, setFileName] = useState<string>("");

  const [image, setImage] = useState<string | null>(null);

  const mainCardFunction = () => {
    console.log("mainCardFunction");
  };
  //   const addImagesFromDevice = async () => {
  //     const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
  //     if (status !== "granted") {
  //       alert("Sorry, we need camera roll permissions to make this work!");
  //     } else {
  //       const result = await ImagePicker.launchImageLibraryAsync({
  //         mediaTypes: ImagePicker.MediaTypeOptions.Images,
  //       });
  //       if (!result.canceled) {
  //         // `result.uri` is the URI of the selected image
  //         // add result.uri to localStorage.
  //         const fileName = `date:${Date.now().toString()}`;
  //         setFileName(fileName);
  //         const fileUri = `${FileSystem.documentDirectory}${fileName}`;
  //         await FileSystem.writeAsStringAsync(fileUri, "", {
  //           encoding: FileSystem.EncodingType.Base64,
  //         });

  //         // save filename to redux and save to localStorage

  //         console.log("fileName :: ", fileName);
  //         console.log("fileUri :: ", fileUri);

  //         // get Image
  //         const base64 = await FileSystem.getContentUriAsync(fileUri);
  //         await FileSystem.writeAsStringAsync(fileUri, base64, {
  //           encoding: FileSystem.EncodingType.Base64,
  //         });
  //         setImg(fileUri);
  //       }
  //     }
  //   };

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log("result ::", result);
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  //   useEffect(() => {
  //     // getImageFromDevice();
  //   }, [fileName]);

  const getImageFromDevice = async () => {
    const imgFileUri = `${FileSystem.documentDirectory}`;
    const fileURI = await FileSystem.readAsStringAsync(imgFileUri, {
      encoding: FileSystem.EncodingType.Base64,
    });
    setImg(fileURI);
  };

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
          <Icon as={Ionicons} size={"24px"} name="person-circle-outline" />
          <Button
            onPress={pickImage}
            variant={"withIcon"}
            endIcon={
              <Icon
                as={Ionicons}
                size={"24px"}
                name="add-outline"
                color="#FFAB07"
              />
            }
          ></Button>
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
          <VStack
            flexDirection={"row"}
            flexWrap={"wrap"}
            paddingBottom={12}
            justifyContent={"center"}
          >
            {/* dummyDataForProduct.map((product) => (
                <ProductItems product={product} />
              )) */}

            {img && (
              <Image source={{ uri: img }} alt="Alternate Text" size="xl" />
            )}

            {image && (
              <Image
                source={{ uri: image }}
                style={{ width: 200, height: 200 }}
              />
            )}
          </VStack>
        </ScrollView>
      </VStack>
    </SafeAreaView>
  );
};

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
];
