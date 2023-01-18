import { View, Text, Image, StyleSheet, ImageBackground } from "react-native";
import React from "react";

const Images = () => {
  const image = { uri: "https://reactjs.org/logo-og.png" };
  return (
    <View>
      <Text>hello</Text>
      <View>
        <Image style={styles.img1} source={require("./2.jpg")} />
      </View>
      {/* ek tarika */}
      <View>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: "https://reactnative.dev/img/tiny_logo.png",
          }}
        />
      </View>
      <View>
        <ImageBackground
          source={image}
          resizeMode="cover"
          style={styles.image}
        ></ImageBackground>
      </View>
    </View>
  );
};

export default Images;

const styles = StyleSheet.create({
  img1: {
    width: "100%",
    height: 600,
    position: "relative",
  },
  tinyLogo: {
    width: "100%",
    height: 600,
    position: "relative",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
});
