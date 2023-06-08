import React from "react";
import { StyleSheet, Text, View } from "react-native";
//

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={{ fontWeight: "bold" }}>Task Details</Text>
    </View>
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
