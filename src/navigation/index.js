import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";
import Component from "../containers/UsersContainer";
import HomePage from "../component/Home/HomePage";

export default function Navigation() {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="HomePage"
        tabBarOptions={{
          showLabel: false,
        }}
      >
        <Tab.Screen
          name="HomePage"
          component={HomePage}
          options={{
            tabBarLabel: "HomePage",
            tabBarIcon: ({ color, size }) => (
              <Icon name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="UserList"
          component={Component.UserList}
          options={{
            tabBarLabel: "UserList",
            tabBarIcon: ({ color, size }) => (
              <Icon name="list" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
