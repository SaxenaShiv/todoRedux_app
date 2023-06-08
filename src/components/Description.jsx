import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const Description = () => {
  return (
    <SafeAreaView>
      <Text style={{ padding: 10, color: "grey" }}>Descriptions</Text>
      <Text style={{ paddingLeft: 10, fontWeight: "bold" }}>
        Last year was a fantastic year for NFTs, with the market reaching a $40
        billion valuation for the first time. In addition, more than $10 billion
        worth of NFTs are now sold every week - with NFT..
      </Text>
    </SafeAreaView>
  );
};

export default Description;
