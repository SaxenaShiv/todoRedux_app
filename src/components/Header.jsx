import React from "react";
import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Header = () => {
  return (
    <SafeAreaView style={styles.header}>
      <Text style={{ fontWeight: "bold" }}>Task Details</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    margin: 20,
    backgroundColor: "#ffff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 10,
  },
});

export default Header;
