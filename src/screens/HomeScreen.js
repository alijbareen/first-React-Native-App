import React from "react";
import { TouchableOpacity } from "react-native";
import { Text, StyleSheet, View, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>New Style</Text>
      <Button
        onPress={() => {
          navigation.navigate("Components");
        }}
        title="Go to Components Demo"
      />
      <Button
        title="go to List Demo"
        onPress={() => navigation.navigate("List")}
      />
      <Button
        title="go to Image Demo"
        onPress={() => navigation.navigate("Image")}
      />
      <Button
        title="go to Counter Demo"
        onPress={() => navigation.navigate("Counter")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
