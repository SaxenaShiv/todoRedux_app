import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const DummyComp = () => {
  return (
    <SafeAreaView>
      <Text style={{ textAlign: "center", color: "#D3D3D3" }}>
        Made with 💖 | Shiv K. Saxena
      </Text>
    </SafeAreaView>
  );
};

export default DummyComp;
