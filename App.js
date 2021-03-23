import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "react-redux";
import { createStore } from "redux";
import BookList from "./src/containers/BookList";
import BookDetail from "./src/component/BookDetail/BookDetail";
import BookEdit from "./src/component/BookEdit/BookEdit";
import { booksReducer } from "./src/redux/books/reducer";

export default function App() {
  const store = createStore(booksReducer);
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
              headerTintColor: "white",
            })}
          />
          <Stack.Screen
            name="BookEdit"
            component={BookEdit}
            options={({ route }) => ({
              title: route.params.title,
              headerStyle: {
                backgroundColor: "#edcf64",
              },
              headerTitleStyle: {
                fontSize: "24px",
                marginBottom: "5px",
              },
              headerTintColor: "white",
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
