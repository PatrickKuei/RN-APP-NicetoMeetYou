import React from "react";
import { Button, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "react-redux";
import { createStore } from "redux";
import BookList from "./src/component/BookList/BookList";
import reducers from "./src/redux";

export default function App() {
  const store = createStore(reducers);
  const Stack = createStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name=" "
            component={BookList}
            options={{
              headerStyle: {
                backgroundColor: "#edcf64",
              },
              headerRight: () => (
                <Button title="New" color="#edcf64" onPress={() => {}} />
              ),
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
