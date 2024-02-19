import { View, Text, StyleSheet } from "react-native";
import React from "react";

const FeedComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>Flen l fouleni</Text>
      <Text style={styles.numberDays}>10</Text>
      <Text style={styles.days}>days</Text>
      <Text>Last time skert:</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    borderColor: "purple",
    borderRadius: 10,
    borderWidth: 1,
    height: 200,
    width: "95%",
    alignContent: "center",
    alignSelf: "center",
    margin: 10,
    padding: 10,
    backgroundColor: "purple",
  },
  name: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
  numberDays: {
    fontSize: 50,
    alignSelf: "flex-end",
  },
  days: {
    alignSelf: "flex-end",
    fontSize: 20,
    marginBottom: 10,
  },
});
export default FeedComponent;
