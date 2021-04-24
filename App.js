import React from "react";
import Navigation from "./src/navigation";
import { BooksProvider } from "./src/redux";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <BooksProvider>
        <Navigation />
      </BooksProvider>
    </SafeAreaProvider>
  );
}
