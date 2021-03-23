import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { styles } from "./styles";

export default function Book({ book, navigation }) {
  const isImgExist = () => {
    if (book && book.image) {
      return book.image.substr(0, 4) === "http";
    }
    return false;
  };

  const onBookPress = () => {
    navigation.navigate("BookDetail", {
      book: {
        id: book.id,
        name: book.name,
        author: book.author,
        created: book.created,
        descript: book.descript,
      },
    });
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onBookPress(book.name)}
    >
      <View style={styles.book}>
        {isImgExist() ? (
          <Image
            style={styles.bookImg}
            source={{
              uri: book.image,
            }}
          />
        ) : (
          <Image
            style={styles.defaultImg}
            source={require("../../../assets/close.png")}
          />
        )}
        <Text>{book.name}</Text>
        {book.author ? <Text style={styles.author}>by {book.author}</Text> : ""}
        <Text style={styles.createDate}>{book.created}</Text>
      </View>
    </TouchableOpacity>
  );
}
