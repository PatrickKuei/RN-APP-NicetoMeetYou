import React, { useState, useEffect, useLayoutEffect } from "react";
import { View, FlatList, Text, Button } from "react-native";
import { booksAPIs } from "../../api/booksAPI";
import { addHeaderRightButton } from "../../utilities";
import Book from "../Book/Book";

export default function BookList({ navigation, bookList, updateList }) {
  const [visibleList, setVisibleList] = useState({
    list: [],
    piecePerPage: null,
    pagesOnScreen: null,
  });

  const fetchBooklist = async () => {
    const { data } = await booksAPIs.getBookList();
    updateList(data);
  };

  const handleHeaderButtonPress = () =>
    navigation.navigate("BookEdit", {
      from: "bookList",
      title: "Add new book",
    });

  const handleMoreButtonPress = () => {
    const updatedPagesOnScreen = visibleList.pagesOnScreen + 1;
    const moreList = bookList.list.slice(
      0,
      visibleList.piecePerPage * updatedPagesOnScreen
    );
    setVisibleList((prev) => ({
      ...prev,
      pagesOnScreen: updatedPagesOnScreen,
      list: moreList,
    }));
  };

  useEffect(() => {
    fetchBooklist();
  }, []);

  useEffect(() => {
    setVisibleList({
      list: bookList.list.slice(0, 5),
      piecePerPage: 5,
      pagesOnScreen: 1,
    });
  }, [bookList.isLoading]);

  useLayoutEffect(() => {
    addHeaderRightButton(navigation, "New", handleHeaderButtonPress);
  }, [navigation]);

  return bookList.isLoading ? (
    <Text>loading...</Text>
  ) : (
    <View>
      <FlatList
        horizontal={false}
        numColumns={2}
        data={visibleList.list}
        renderItem={({ item }) => <Book book={item} navigation={navigation} />}
        keyExtractor={(item) => item.id}
      />
      <Button title={"load more"} onPress={handleMoreButtonPress} />
    </View>
  );
}
