import React from "react";
import { TouchableOpacity } from "react-native";
import { Text, StyleSheet, View, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Ali Jbareen</Text>
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
      <Button
        title="go to Colors Demo"
        onPress={() => navigation.navigate("Color")}
      />
      <Button
        title="go to Square Demo"
        onPress={() => navigation.navigate("Square")}
      />
      <Button
        title="go to Text Demo"
        onPress={() => navigation.navigate("Text")}
      />
      <Button
        title="go to Box Demo"
        onPress={() => navigation.navigate("Box")}
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
