import React from "react";
import { Button, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "react-redux";
import { createStore } from "redux";
import BookList from "./src/component/BookList/BookList";
import reducers from "./src/redux";
import BookDetail from "./src/component/BookDetail/BookDetail";

export default function App() {
  const store = createStore(reducers);
  const Stack = createStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="BookList">
          <Stack.Screen
            name="BookList"
            component={BookList}
            options={{
              title: " ",
              headerStyle: {
                backgroundColor: "#edcf64",
              },
              headerRight: () => (
                <Button title="New" color="#edcf64" onPress={() => {}} />
              ),
              headerTintColor: "white",
            }}
          />
          <Stack.Screen
            name="BookDetail"
            component={BookDetail}
            options={({ route }) => ({
              title: route.params.bookName,
              headerStyle: {
                backgroundColor: "#edcf64",
              },
              headerTitleStyle: {
                fontSize: "24px",
                marginBottom: "5px",
              },
              headerRight: () => (
                <Button title="Edit" color="#edcf64" onPress={() => {}} />
              ),
              headerTintColor: "white",
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
