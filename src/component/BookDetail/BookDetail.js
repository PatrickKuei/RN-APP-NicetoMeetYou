import React, { useLayoutEffect } from "react";
import { Text, View, Button } from "react-native";
import { styles } from "./styles";

export default function BookDetail({ navigation, route }) {
  const { book } = route.params;

  const addHeaderRightButton = () => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          title="Edit"
          color="#edcf64"
          onPress={() =>
            navigation.navigate("BookEdit", {
              from: "bookDetail",
              title: "Edit book",
              book,
            })
          }
        />
      ),
    });
  };

  useLayoutEffect(() => {
    addHeaderRightButton();
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.author}>
          Author: {book.author ? book.author : "unknown"}
        </Text>
        <Text style={styles.createDate}>
          {book.created ? book.created : "unknown"}
        </Text>
      </View>
      <View style={styles.descript}>
        <Text>{book.descript ? book.descript : "unknown"}</Text>
      </View>
    </View>
  );
}
