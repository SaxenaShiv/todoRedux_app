import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={{ fontWeight: "bold" }}>Task Details</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    margin: 30,
    backgroundColor: "#ffff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 20,
  },
});

export default Header;
