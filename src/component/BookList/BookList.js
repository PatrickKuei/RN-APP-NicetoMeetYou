import React, { useState, useEffect } from "react";
import { FlatList, View } from "react-native";
import { booksAPIs } from "../../api/booksAPI";
import Book from "../Book/Book";
import { styles } from "./styles";

export default function BookList({ navigation }) {
  const [bookList, setBookList] = useState({
    list: [],
    isLoading: true,
  });

  const fetchBooklist = async () => {
    const { data } = await booksAPIs.getBookList();
    setBookList({
      list: data,
      isLoading: false,
    });
  };

  useEffect(() => {
    fetchBooklist();
  }, []);

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
