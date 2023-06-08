import React from "react";
import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const Title = () => {
  return (
    <SafeAreaView style={styles.content}>
      <Text style={{ paddingBottom: 10, color: "grey" }}>Task Title</Text>
      <Text style={{ color: "black", fontSize: 20, fontWeight: "bold" }}>
        NFT Web App Prototype
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  content: {
    paddingLeft: 10,
    justifyContent: "center",
  },
});

export default Title;
