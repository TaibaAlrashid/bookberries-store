import React from "react";
import { NativeBaseProvider } from "native-base";
import { ThemeProvider } from "styled-components";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./components/navigation/index";

const theme = {
  mainColor: "#24272b",
  backgroundColor: "#ede0d4",
  grey: "#e63946",
};

export default function App() {
  return (
    <NativeBaseProvider>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </ThemeProvider>
    </NativeBaseProvider>
  );
}
