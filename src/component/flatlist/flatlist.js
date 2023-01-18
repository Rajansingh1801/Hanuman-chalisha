import { View, Text, FlatList, StyleSheet } from "react-native";

const Flatlist = () => {
  const list = [
    {
      index: 1,
      name: "rajan",
    },
    {
      index: 2,
      name: "raja",
    },
    {
      index: 3,
      name: "raj",
    },
    {
      index: 4,
      name: "kumar",
    },
    {
      index: 5,
      name: "Ram",
    },
    {
      index: 6,
      name: "Laxam",
    },
  ];
  //   const name = "rajan singh";
  return (
    <View>
      <FlatList
        keyExtractor={(key) => {
          return key.index;
        }}
        // horizontal
        // showsHorizontalScrollIndicator={false}
        // numColumns={2}
        data={list}
        renderItem={({ item }) => {
          console.log(item.name);
          return <Text style={styles.list}>{item.name}</Text>;
        }}
        style={styles.box}
      />
      {/* <Text>{name}</Text> */}
    </View>
  );
};

export default Flatlist;

const styles = StyleSheet.create({
  list: {
    padding: 20,
    backgroundColor: "yellow",
    margin: 10,
    fontWeight: 600,
    fontFamily: "cursive",
    fontSize: 24,
  },
  box: {
    padding: 15,
    backgroundColor: "white",
    width: "100%",
    color: "black",
    margin: "auto",
    textAlign: "center",
  },
});
