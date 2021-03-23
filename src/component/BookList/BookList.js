import React, { useState, useEffect, useLayoutEffect } from "react";
import { Button, FlatList, View } from "react-native";
import { booksAPIs } from "../../api/booksAPI";
import Book from "../Book/Book";

export default function BookList({ navigation, bookList, updateList }) {
  const fetchBooklist = async () => {
    const { data } = await booksAPIs.getBookList();
    updateList(data);
  };

  const addHeaderRightButton = () => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          title="New"
          color="#edcf64"
          onPress={() =>
            navigation.navigate("BookEdit", { title: "Add new book" })
          }
        />
      ),
    });
  };

  useEffect(() => {
    fetchBooklist();
  }, []);

  useLayoutEffect(() => {
    addHeaderRightButton();
  }, [navigation]);

  return bookList.isLoading ? (
    <View>loading...</View>
  ) : (
    <FlatList
      horizontal={false}
      numColumns={2}
      data={bookList.list}
      renderItem={({ item }) => <Book book={item} navigation={navigation} />}
      keyExtractor={(item) => item.id}
    />
  );
}
