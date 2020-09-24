import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.text1Style}>Child #1</Text>
      <Text style={styles.text2Style}>Child #2</Text>
      <Text style={styles.text3Style}>Child #3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderColor: "black",
    borderWidth: 3,
    marginVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    height: 200,
  },
  text1Style: {
    borderWidth: 3,
    borderColor: "red",
    flex: 2,
  },
  text2Style: {
    borderWidth: 3,
    borderColor: "red",
    position: "relative",
    fontSize: 18,
    position: "absolute",
    ...StyleSheet.absoluteFillObject,
  },
  text3Style: {
    borderWidth: 3,
    borderColor: "red",
    flex: 2,
  },
});
export default BoxScreen;
