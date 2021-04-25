import React, { useState, useEffect } from "react";
import { View, FlatList, Text, TouchableOpacity, Button } from "react-native";
import { listAPIs } from "../../api/listAPIs";
import { configs } from "../../configs";
import User from "../User/User";
import { styles } from "./styles";

export default function UserList({ userList, updateList, ToggleTabButton }) {
  const fetchBooklist = async () => {
    const { data } = await listAPIs.getUsers();
    updateList(data);
  };

  useEffect(() => {
    // can not fetch from https://mocki.io/fake-json-api,
    // instead fetching git api
    fetchBooklist();
  }, []);

  return userList.isLoading ? (
    <Text>{configs.loadingText}</Text>
  ) : (
    <View style={styles.listContainer}>
      <FlatList
        horizontal={false}
        numColumns={2}
        data={userList.list}
        renderItem={({ item }) => <User user={item} />}
        keyExtractor={(item) => item.id}
        onEndReached={() => {}}
        onEndReachedThreshold={0.01}
      />
      <ToggleTabButton />
    </View>
  );
}
