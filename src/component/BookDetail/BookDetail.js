import React, { useLayoutEffect } from "react";
import { Text, View, Button } from "react-native";
import { styles } from "./styles";

export default function BookDetail({ navigation, route }) {
  const { bookDescript, author, createDate } = route.params;

  const addHeaderRightButton = () => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          title="Edit"
          color="#edcf64"
          onPress={() =>
            navigation.navigate("BookEdit", {
              title: "Edit new book",
              author,
              createDate,
              bookDescript,
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
