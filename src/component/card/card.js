import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Linking,
  ActivityIndicator,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";

const Card = () => {
  const [UserData, setUserData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const getUserData = async () => {
    try {
      const response = await fetch(
        "https://rajansingh1801.github.io/Api/list.json"
      );
      const myData = await response.json();
      setUserData(myData);
      setIsLoading(false);
      console.log(myData);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUserData();
  }, []);

  return (
    <View style={styles.cont1}>
      {isLoading ? (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="black" />
        </View>
      ) : (
        <View>
          <StatusBar style="auto" />
          <Text style={styles.txt3}>Top Song</Text>
          <FlatList
            style={styles.cont2}
            // scrollEnabled={false}
            // scrollToOverflowEnabled={false}
            // horizontal
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            data={UserData}
            renderItem={({ item }) => {
              return (
                <View style={styles.cont1}>
                  <View style={styles.cont4}>
                    <Image style={styles.img1} source={{ uri: item.img }} />
                    <Text style={styles.song}>Song name:{item.song_name}</Text>
                    <Text style={styles.singer}>Singer name:{item.singer}</Text>
                    <Text style={styles.movie}>
                      Movie name:{item.movie_name}
                    </Text>
                    <Button
                      style={styles.btn}
                      title="watch now"
                      onPress={() => Linking.openURL(item.link)}
                    />
                  </View>
                </View>
              );
            }}
          />
        </View>
      )}
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  // cont: { marginVertical: 40, paddingHorizontal: 60 },
  loader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  cont1: {
    marginVertical: 20,
    marginHorizontal: 30,
  },
  img1: {
    height: 250,
    width: 350,
    resizeMode: "cover",
  },
  txt3: {
    fontSize: 32,
    paddingVertical: 10,
    fontWeight: "600",
    textAlign: "center",
  },
  cont2: {
    // marginHorizontal: 25,
  },
  cont4: {
    // paddingHorizontal: 30,
    // justifyContent: "center",
    alignItems: "center",
  },
  movie: {
    color: "blue",
    fontWeight: "500",
  },
  singer: {
    color: "brown",
    fontWeight: "500",
  },
  song: {
    color: "red",
    fontWeight: "500",
  },
  btn: {
    marginVertical: 20,
    backgroundColor: "green",
  },
});
