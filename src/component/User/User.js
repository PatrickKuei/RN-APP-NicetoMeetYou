import React from "react";
import { Text, View, TouchableOpacity, Image, Linking } from "react-native";
import { configs } from "../../configs";
import { styles } from "./styles";

export default function User({ user }) {
  const handleClick = () => {
    const { html_url } = user;
    Linking.canOpenURL(html_url).then((supported) => {
      if (supported) {
        Linking.openURL(html_url);
      } else {
        console.log(configs.openUrlFailed);
      }
    });
  };

  return (
    <TouchableOpacity onPress={handleClick} style={styles.container}>
      <View style={styles.user}>
        <View style={styles.avatarContainer}>
          <Image style={styles.avatarImg} source={{ uri: user.avatar_url }} />
        </View>
        <View style={styles.detailContainer}>
          <Text style={styles.userName}>{user.login}</Text>
          <Text style={styles.entryText}>{configs.userFileEntryText}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
