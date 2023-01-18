import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  FlatList,
} from "react-native";
import React, { useState } from "react";

const Gernator = () => {
  const [color, setColor] = useState([]);
  const clickhere = () => {
    const red = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    return `rgb(${red},${blue},${green})`;
  };
  console.log(color);
  return (
    <View>
      <Text style={styles.heading}>Random RBG color Gernator</Text>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          //   alert(clickhere());
          setColor([...color, clickhere()]);
        }}
      >
        <Text style={styles.txt}>Click here</Text>
      </TouchableOpacity>
      <View style={styles.ft}>
        <FlatList
          keyExtractor={(key) => {
            key;
          }}
          data={color}
          renderItem={({ item }) => {
            return (
              <View>
                <Text
                  style={{
                    backgroundColor: item,
                    width: 200,
                    textAlign: "center",
                    color: "white",
                    fontWeight: 800,
                    marginVertical: 6,
                    paddingVertical: 20,
                    borderRadius: 25,
                    borderColor: "black",
                    borderWidth: 2,
                  }}
                >
                  {item}
                </Text>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default Gernator;

const styles = StyleSheet.create({
  heading: {
    color: "blue",
    fontSize: 24,
    textAlign: "center",
    paddingVertical: 10,
    fontWeight: 800,
  },
  btn: {
    position: "sticky",
    backgroundColor: "blue",
    paddingVertical: 10,
    marginVertical: 20,
    marginHorizontal: 30,
    textAlign: "center",
    borderRadius: 20,
    borderWidth: 5,
    borderColor: "white",
  },
  txt: {
    color: "white",
    fontSize: 24,
  },
  ft: {
    justifyContent: "center",
    alignItems: "center",
  },
});
