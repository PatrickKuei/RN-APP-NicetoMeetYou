import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";
import Component from "../containers/UsersContainer";
import HomePage from "../component/Home/HomePage";
import { configs } from "../configs";
import { View } from "react-native";
import { styles } from "./styles";

export default function Navigation() {
  const Tab = createBottomTabNavigator();

  // need to find a better way to toggle tab navigation
  const [isTabShowing, setIsTabShowing] = useState(false);
  const toggleTabShowing = () => setIsTabShowing((prev) => !prev);
  const ToggleTabButton = () => (
    <View style={styles.toggleTabButtonContainer}>
      <Icon
        onPress={toggleTabShowing}
        iconStyle={isTabShowing ? styles.hideTabButton : styles.showTabButton}
        reverse
        name={configs.navigator.icon.toggleTabButton.name}
        type={configs.navigator.icon.toggleTabButton.type}
        color={configs.navigator.icon.toggleTabButton.color}
      />
    </View>
  );

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={configs.navigator.homePage}
        screenOptions={{ tabBarVisible: isTabShowing }}
        tabBarOptions={{
          showLabel: false,
          style: {
            backgroundColor: configs.navigator.backgroundColor,
          },
        }}
      >
        <Tab.Screen
          name={configs.navigator.homePage}
          children={() => <HomePage ToggleTabButton={ToggleTabButton} />}
          options={{
            tabBarLabel: configs.navigator.homePage,
            tabBarIcon: ({ color, size }) => (
              <Icon
                name={configs.navigator.icon.home.name}
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name={configs.navigator.UserList}
          children={() => (
            <Component.UserList ToggleTabButton={ToggleTabButton} />
          )}
          options={{
            tabBarLabel: configs.navigator.UserList,
            tabBarIcon: ({ color, size }) => (
              <Icon
                name={configs.navigator.icon.list.name}
                color={color}
                size={size}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
