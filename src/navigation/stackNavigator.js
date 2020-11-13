import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import bottomNavigator from "./bottomNavigator";

const Stack = createStackNavigator();

class StackNavigator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Stack.Navigator initialRouteName="BottomNavigation">
        <Stack.Screen
          name="BottomNavigation"
          component={bottomNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    );
  }
}

export default StackNavigator;
