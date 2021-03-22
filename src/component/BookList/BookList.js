import axios from "axios";
import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";

export default function BookList() {
  const [bookList, setBookList] = useState({
    list: [],
    isLoading: true,
  });

  const fetchBooklist = () => {
    axios
      .get("https://fe-interview-api.unnotech.com/books")
      .then((res) => {
        setBookList({
          list: res.data,
          isLoading: false,
        });
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchBooklist();
  }, [bookList.isLoading]);

  return bookList.isLoading ? (
    <View>loading...</View>
  ) : (
    <View>
      {bookList.list.map((book) => (
        <Text>{book.name}</Text>
      ))}
    </View>
  );
}
