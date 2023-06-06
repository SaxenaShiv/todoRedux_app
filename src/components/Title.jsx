import React from "react";
import { StyleSheet, Text, View } from "react-native";
const Title = () => {
  return (
    <View style={styles.content}>
      <Text style={{ paddingBottom: 10, color: "grey" }}>Task Title</Text>
      <Text style={{ color: "black", fontSize: 20, fontWeight: "bold" }}>
        NFT Web App Prototype
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    paddingLeft: 10,
    justifyContent: "center",
  },
});

export default Title;
