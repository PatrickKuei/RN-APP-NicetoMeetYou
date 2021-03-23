import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";

export default function BookDetail({ route }) {
  const { bookDescript, author, createDate } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.author}>Author: {author ? author : "unknown"}</Text>
        <Text style={styles.createDate}>
          {createDate ? createDate : "unknown"}
        </Text>
      </View>
      <View style={styles.descript}>
        <Text>{bookDescript ? bookDescript : "unknown"}</Text>
      </View>
    </View>
  );
}
