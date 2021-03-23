import React, { useState, useLayoutEffect } from "react";
import { TextInput, View, Button } from "react-native";
import { styles } from "./styles";

export default function BookEdit({ navigation, route, addBook, editBook }) {
  const { book, from } = route.params;

  const [bookInfo, setBookInfo] = useState({
    ...book,
  });

  const onAuthorInputChange = (author) => {
    setBookInfo((prev) => ({
      ...prev,
      author,
    }));
  };

  const onCreateDateChange = (created) => {
    setBookInfo((prev) => ({
      ...prev,
      created,
    }));
  };

  const onDescriptChange = (descript) => {
    setBookInfo((prev) => ({
      ...prev,
      descript,
    }));
  };
  const handleSavePress = () => {
    switch (from) {
      case "bookList":
        addBook(bookInfo);
        navigation.navigate("BookList");
        break;
      case "bookDetail":
        editBook(bookInfo);
        navigation.navigate("BookList");
        break;
      default:
        break;
    }
  };

  const addHeaderRightButton = () => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          title="Save"
          color="#edcf64"
          onPress={() => handleSavePress()}
        />
      ),
    });
  };

  useLayoutEffect(() => {
    addHeaderRightButton();
  }, [navigation, bookInfo]);

  return (
    <View>
      <View style={styles.author}>
        <TextInput
          onChangeText={(text) => onAuthorInputChange(text)}
          value={bookInfo.author}
          style={styles.authorInput}
          placeholder="Author"
        />
      </View>
      <View style={styles.createDate}>
        <TextInput
          onChangeText={(text) => onCreateDateChange(text)}
          value={bookInfo.created}
          style={styles.createDateInput}
          placeholder="Created at"
        />
      </View>
      <View style={styles.bookDescript}>
        <TextInput
          onChangeText={(text) => onDescriptChange(text)}
          style={styles.bookDescriptInput}
          value={bookInfo.descript}
          multiline
          numberOfLines={10}
        />
      </View>
    </View>
  );
}
