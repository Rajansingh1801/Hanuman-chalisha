import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/component/form/Login";
import Card from "./src/component/card/card";
import State from "./src/component/state/State";
function Route() {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <NavigationContainer>
        <View style={styles.container}>
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="card" component={Card} />
            <Stack.Screen name="state" component={State} />
          </Stack.Navigator>
        </View>
      </NavigationContainer>
    </>
  );
}
export default Route;
const styles = {
  container: {
    flex: 1,
  },
};
