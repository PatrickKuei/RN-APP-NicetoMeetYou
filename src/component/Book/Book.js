import React from "react";
import { Text, View, Image } from "react-native";

export default function Book({ book }) {
  return (
    <View style={{ border: "1px solid" }}>
      <Image
        style={{ width: "50px", height: "50px" }}
        source={{
          uri: book.image,
        }}
      />
      <Text>{book.name}</Text>
      <Text>{book.author}</Text>
      <Text>{book.created}</Text>
    </View>
  );
}
