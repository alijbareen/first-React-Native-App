import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
  const greeting = <Text>ali</Text>;
  return (
    <View>
      <Text style={styles.textStyle}>this is the ComponentsScreen</Text>
      <Text>my name is {greeting}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45,
  },
});

export default ComponentsScreen;
