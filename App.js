import { StyleSheet, Text, View, Button } from "react-native";
import Route from "./route";
function App() {
  return (
    <>
      <View style={styles.container}>
        <Route />
      </View>
    </>
  );
}

export default App;

const styles = {
  container: {
    height: 100,
    width: "100%",
  },
};
