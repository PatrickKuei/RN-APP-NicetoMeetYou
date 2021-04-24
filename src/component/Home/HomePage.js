import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./styles";

export default function HomePage() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.homeImg}
        source={require("../../../assets/home.png")}
      />
      <Text style={styles.homeTitle}>Wasa Team</Text>
    </View>
  );
}
