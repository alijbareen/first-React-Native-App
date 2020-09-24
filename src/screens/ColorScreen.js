import React, { Component, useState } from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const ColorScreen = () => {
  return (
    <View>
      <Button title="Add A Color" onPress={() => {}} />
      <View
        style={{ height: 100, width: 100, backgroundColor: "rgb(0,255,0)" }}
      />
    </View>
  );
};

export default ColorScreen;
