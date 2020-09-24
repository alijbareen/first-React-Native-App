import React, { Component, useState } from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";

const TextScreen = () => {
  const [name, setName] = useState("");

  return (
    <View>
      <Text>Enter Password</Text>
      <TextInput
        style={styles.input}
        autoCorrect={false}
        autoCapitalize={false}
        value={name}
        onChangeText={(newText) => {
          setName(newText);
        }}
      />

      {name.length < 5 ? (
        <Text>Password must be longer than 5 charachtes</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
  },
});

export default TextScreen;
