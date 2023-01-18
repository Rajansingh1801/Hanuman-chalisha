import { StyleSheet, Text, View, TouchableOpacity, alert } from "react-native";
import React, { useState } from "react";

const State = () => {
  const [Counter, setCounter] = useState(0);
  return (
    <View style={styles.parent}>
      <Text style={styles.heading}>Mera-Mann</Text>
      <View style={styles.child}>
        <Text style={styles.heading}>{Counter}</Text>
        <TouchableOpacity
          style={styles.btn1}
          onPress={() => setCounter(Counter + 10)}
        >
          <Text style={styles.txt}>+10</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn1} onPress={() => setCounter(0)}>
          <Text style={styles.txt}>Reset</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn1}
          onPress={() => {
            if (Counter > 0) {
              setCounter(Counter - 10);
            }
          }}
        >
          <Text style={styles.txt}> -10 </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default State;

const styles = StyleSheet.create({
  parent: {
    position: "relative",
  },
  heading: {
    color: "red",
    fontSize: 40,
    textAlign: "center",
    marginVertical: 20,
    fontWeight: 600,
  },
  child: {
    // alignItems: "center",
  },
  btn1: {
    backgroundColor: "blue",
    marginVertical: 10,
    textAlign: "center",
    paddingVertical: 10,
    marginHorizontal: 40,
  },
  txt: {
    fontWeight: 600,
    color: "white",
    fontSize: 32,
    fontFamily: "cursive",
  },
});
