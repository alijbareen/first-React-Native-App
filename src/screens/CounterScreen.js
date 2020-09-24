import React, { Component } from "react";
import { Button } from "react-native";
import { Text, StyleSheet, View } from "react-native";

const CounterScreen = () => {
  //todo
  let counter = 0;
  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          counter++;
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          counter--;
        }}
      />
      <Text>Current Count {counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
