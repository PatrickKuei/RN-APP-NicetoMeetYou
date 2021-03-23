import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Component from "./src/containers/BookList";
import BookDetail from "./src/component/BookDetail/BookDetail";
import { booksReducer } from "./src/redux/books/reducer";
import { styles } from "./styles";

export default function App() {
  const store = createStore(booksReducer);
  const Stack = createStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="BookList">
          <Stack.Screen
            name="BookList"
            component={Component.BookList}
            options={{
              title: " ",
              headerStyle: styles.header,
              headerTintColor: "white",
            }}
          />
          <Stack.Screen
            name="BookDetail"
            component={BookDetail}
            options={({ route }) => ({
              title: route.params.bookName,
              headerStyle: styles.header,
              headerTitleStyle: styles.headerTitleStyle,
              headerTintColor: "white",
            })}
          />
          <Stack.Screen
            name="BookEdit"
            component={Component.BookEdit}
            options={({ route }) => ({
              title: route.params.title,
              headerStyle: styles.header,
              headerTitleStyle: styles.headerTitleStyle,
              headerTintColor: "white",
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
