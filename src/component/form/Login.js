import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Alert,
  Button,
} from "react-native";
import React, { useState } from "react";
// import { CheckBox } from "react-native";
import { CheckBox } from "@react-native-community/checkbox";

const Login = ({ navigation }) => {
  const [agree, setAgree] = useState(false);
  const [username, setUsername] = useState("");
  //   console.log(username, password);
  const [password, setPassword] = useState("");
  const submit = () => {
    if (username === "rajan" && password === "singh") {
      // alert(`hello ${username}`);
      // console.log(`hello ${username}`);
      navigation.navigate("card", { myName: `${username}` });
    } else {
      alert("Plese fill all required field");
      console.log("Plese fill all required field");
    }
  };
  return (
    <View style={styles.maincont}>
      <Text style={styles.txt1}>Mera-Mann</Text>
      <View style={styles.cont2}>
        <Text style={{ color: "#F5EDCE", fontSize: 25 }}>Login Form</Text>
        <Text style={styles.text2}>You Can Contact me any Time @mera-mann</Text>
        <View style={styles.cont3}>
          <Text style={styles.label}>Enter Your Name</Text>
          <TextInput
            editable
            placeholder="Enter Name"
            multiline
            numberOfLines={1}
            maxLength={40}
            onChangeText={(text) => {
              setUsername(text);
            }}
            value={username}
            style={styles.input}
          />
          <Text style={styles.label}>Enter Your Password</Text>
          <TextInput
            // editable
            // multiline
            numberOfLines={1}
            // maxLength={40}
            placeholder={"Enter Password"}
            secureTextEntry={true}
            onChangeText={(pass) => {
              setPassword(pass);
            }}
            value={password}
            style={styles.input}
          />
          <View
            style={{
              flexDirection: "row",
              paddingVertical: 20,
              alignItems: "center",
            }}
          >
            <CheckBox
              value={agree}
              onValueChange={() => {
                setAgree(!agree);
              }}
              style={styles.checkbox}
            />
            <Text style={styles.txt4}>I have Read and i am agree with TC</Text>
          </View>
          {/* <Button onPress={() => navigation.navigate("card")} title="gooo" /> */}
          <TouchableOpacity
            onPress={() => submit()}
            style={[
              styles.button,
              { backgroundColor: agree ? "#FDFDBD" : "gray" },
            ]}
            disabled={!agree}
          >
            <Text style={styles.btntxt}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  maincont: {
    textAlign: "center",
    paddingTop: 25,
    backgroundColor: "#6F1AB6",
  },

  txt1: {
    fontSize: 32,
    fontWeight: "800",
    fontFamily: "cursive",
    color: "#EAFDFC",
  },
  cont2: {
    textAlign: "left",
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  text2: {
    fontSize: 18,
    color: "#EAFDFC",
    paddingVertical: 10,
    fontWeight: "500",
  },
  cont3: {
    paddingVertical: 32,
  },
  label: {
    color: "white",
    fontSize: 18,
  },
  input: {
    padding: 10,
    backgroundColor: "white",
    borderRadius: 10,
    fontSize: 18,
    fontWeight: 600,
    paddingVertical: 8,
    // marginVertical: 10,
    marginTop: 10,
    marginBottom: 15,
  },
  txt4: {
    color: "white",
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "#FDFDBD",
    width: "fit-content",
    paddingHorizontal: 40,
    paddingVertical: 8,
    borderColor: "green",
    borderWidth: 3,
    borderRadius: 10,
  },
  btntxt: {
    color: "black",
    fontWeight: "600",
    fontSize: 22,
  },
});
