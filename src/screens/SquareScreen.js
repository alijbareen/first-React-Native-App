import React, { Component, useState } from "react";
import { Text, StyleSheet, View, Button, FlatList } from "react-native";
import ColorCounter from "../components/ColorCounter";

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  return (
    <View>
      <ColorCounter
        onIncrease={() => setRed(red + 1)}
        onDecrease={() => setRed(red - 1)}
        color="Red"
      />
      <ColorCounter
        color="Blue"
        onIncrease={() => setBlue(blue + 1)}
        onDecrease={() => setBlue(blue - 1)}
      />
      <ColorCounter
        color="Green"
        onIncrease={() => setGreen(green + 1)}
        onDecrease={() => setGreen(green - 1)}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
