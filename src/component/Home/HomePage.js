import React from "react";
import { View, Text, Image } from "react-native";
import { Icon } from "react-native-elements";
import { configs } from "../../configs";
import { styles } from "./styles";

export default function HomePage({ ToggleTabButton }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.homeImg}
        source={require("../../../assets/home.png")}
      />
      <Text style={styles.homeTitle}>{configs.logoText}</Text>
      <ToggleTabButton />
    </View>
  );
}
