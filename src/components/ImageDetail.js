import React, { Component } from "react";
import { Text, StyleSheet, View, Image } from "react-native";

const ImageDetail = ({ imageSource, imageScore, title }) => {
  return (
    <View>
      <Image source={imageSource} />
      <Text>{title}</Text>
      <Text>{imageScore}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default ImageDetail;
