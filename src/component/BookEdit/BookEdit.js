import React, { useState, useLayoutEffect } from "react";
import { TextInput, View, Button } from "react-native";
import { styles } from "./styles";

export default function BookEdit({ navigation, route }) {
  const { author, createDate, bookDescript } = route.params;
  const [formState, setFormState] = useState({
    author,
    createDate,
    bookDescript,
  });

  const onAuthorInputChange = (author) => {
    setFormState((prev) => ({
      ...prev,
      author,
    }));
  };

  const onCreateDateChange = (createDate) => {
    setFormState((prev) => ({
      ...prev,
      createDate,
    }));
  };

  const onDescriptChange = (bookDescript) => {
    setFormState((prev) => ({
      ...prev,
      bookDescript,
    }));
  };

  const addHeaderRightButton = () => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          title="Save"
          color="#edcf64"
          onPress={() => console.log(formState)}
        />
      ),
    });
  };

  useLayoutEffect(() => {
    addHeaderRightButton();
  }, [navigation, formState]);

  return (
    <View>
      <View style={styles.author}>
        <TextInput
          onChangeText={(text) => onAuthorInputChange(text)}
          value={formState.author}
          style={styles.authorInput}
          placeholder="Author"
        />
      </View>
      <View style={styles.createDate}>
        <TextInput
          onChangeText={(text) => onCreateDateChange(text)}
          value={formState.createDate}
          style={styles.createDateInput}
          placeholder="Created at"
        />
      </View>
      <View style={styles.bookDescript}>
        <TextInput
          onChangeText={(text) => onDescriptChange(text)}
          style={styles.bookDescriptInput}
          value={formState.bookDescript}
          multiline
          numberOfLines={10}
        />
      </View>
    </View>
  );
}
