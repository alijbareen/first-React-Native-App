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
      return { ...state, green: state.green + action.amount };
    case "blue":
      return { ...state, blue: state.blue + action.amount };
    default:
      return state;
  }
};

const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  const { red, green, blue } = state;
  return (
    <View>
      <ColorCounter
        onIncrease={() => {
          dispatch({ colorToChange: "red", amount: COLOR_INCREMENT });
        }}
        onDecrease={() => {
          dispatch({ colorToChange: "red", amount: -1 * COLOR_INCREMENT });
        }}
        color="Red"
      />
      <ColorCounter
        color="Blue"
        onIncrease={() => {
          dispatch({ colorToChange: "blue", amount: COLOR_INCREMENT });
        }}
        onDecrease={() => {
          dispatch({ colorToChange: "blue", amount: -1 * COLOR_INCREMENT });
        }}
      />
      <ColorCounter
        color="Green"
        onIncrease={() => {
          dispatch({ colorToChange: "green", amount: COLOR_INCREMENT });
        }}
        onDecrease={() => {
          dispatch({ colorToChange: "green", amount: -1 * COLOR_INCREMENT });
        }}
      />

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
