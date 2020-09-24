import React, { Component, useReducer, useState } from "react";
import { Text, StyleSheet, View, Button, FlatList } from "react-native";
import ColorCounter from "../components/ColorCounter";

//App now is Ready
//Start Optimizing
const COLOR_INCREMENT = 15;

const reducer = (state, action) => {
  //input
  //state === { red , green , blue : number}
  //action === {color , amount}

  switch (action.colorToChange) {
    case "red":
      //never DO THIS state.red=state.red-15
      return { ...state, red: state.red + action.amount };
    case "green":
      return { ...state, red: state.green + action.amount };
    case "blue":
      return { ...state, red: state.blue + action.amount };
    default:
      return state;
  }
};

const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });

  console.log(state);

  return (
    <View>
      <ColorCounter onIncrease={() => {}} onDecrease={() => {}} color="Red" />
      <ColorCounter color="Blue" onIncrease={() => {}} onDecrease={() => {}} />
      <ColorCounter color="Green" onIncrease={() => {}} onDecrease={() => {}} />

      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red},${green},${blue})`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
