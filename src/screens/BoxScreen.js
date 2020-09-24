import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.parentStyle}>
      <View style={styles.view1Style} />
      <View style={styles.view2Style} />
      <View style={styles.view3Style} />
    </View>
  );
};

const styles = StyleSheet.create({
  parentStyle: {
    borderColor: "black",
    borderWidth: 3,
    height: 100,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  view1Style: {
    height: 50,
    width: 50,
    backgroundColor: "green",
  },
  view2Style: {
    height: 50,
    width: 50,
    backgroundColor: "red",
    alignSelf: "flex-end",
  },
  view3Style: {
    height: 50,
    width: 50,
    backgroundColor: "purple",
  },
});
export default BoxScreen;
