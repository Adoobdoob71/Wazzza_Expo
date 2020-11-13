import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./src/navigation/stackNavigator";
import { View, Text } from "react-native";
import { DefaultTheme, Provider } from "react-native-paper";
import { StatusBar } from "expo-status-bar";

const theme = {
  ...DefaultTheme,
  colors: {
    primary: "#FF4646",
    primaryDark: "#420909",
    accent: "#FF7474",
    join: "#75D126",
    link: "#1976D2",
    textOnPrimary: "#FFFFFF",
    placeholder: "#757575",
    card: "#FFFFFF",
    inActive: "#D0D0D0",
  },
};

function App() {
  return (
    <NavigationContainer theme={theme}>
      <Provider theme={theme}>
        <StatusBar
          backgroundColor={theme.colors.primaryDark}
          style="light"
          translucent={false}
          animated
        />
        <StackNavigator />
      </Provider>
    </NavigationContainer>
  );
}

export default App;
