import React, { useState, useEffect, useLayoutEffect } from "react";
import { View, FlatList, Text } from "react-native";
import { booksAPIs } from "../../api/booksAPI";
import { addHeaderRightButton } from "../../utilities";
import Book from "../Book/Book";

export default function BookList({ navigation, bookList, updateList }) {
  const [visibleList, setVisibleList] = useState([]);

  const fetchBooklist = async () => {
    const { data } = await booksAPIs.getBookList();
    updateList(data);
  };

  const handleHeaderButtonPress = () =>
    navigation.navigate("BookEdit", {
      from: "bookList",
      title: "Add new book",
    });

  useEffect(() => {
    fetchBooklist();
  }, []);

  useEffect(() => {
    setVisibleList(bookList.list.slice(0, 18));
  }, [bookList.isLoading]);

  useLayoutEffect(() => {
    addHeaderRightButton(navigation, "New", handleHeaderButtonPress);
  }, [navigation]);

  return bookList.isLoading ? (
    <Text>loading...</Text>
  ) : (
    <View>
      <FlatList
        style={{ height: "1000px", maxHeight: "900px" }}
        horizontal={false}
        numColumns={2}
        data={visibleList}
        renderItem={({ item }) => <Book book={item} navigation={navigation} />}
        keyExtractor={(item) => item.id}
        onEndReached={() => alert("end")}
        onEndReachedThreshold={0.01}
      />
    </View>
  );
}
