import React from "react";
import { Button, View, Text } from "react-native";

export default function Header() {
  return (
    <View
      style={{
        flexDirection: "row",
        backgroundColor: "#edcf64",
        justifyContent: "flex-end",
      }}
    >
      <View style={{ flex: "1" }}>
        <Button title="back" color="#edcf64" onPress={() => {}} />
      </View>
      <View style={{ flex: "5", justifyContent: "center" }}>
        <Text style={{ color: "#ffffff", textAlign: "center" }}>TITLE</Text>
      </View>
      <View style={{ flex: "1" }}>
        <Button title="New" color="#edcf64" onPress={() => {}} />
      </View>
    </View>
  );
}
