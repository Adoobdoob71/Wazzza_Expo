import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Home from "../screens/Home";
import { MaterialIcons } from "@expo/vector-icons";
import Search from "../screens/Search";
import { withTheme } from "react-native-paper";
import Contacts from "../screens/Contacts";

const Tab = createMaterialBottomTabNavigator();

class bottomNavigator extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const colors = this.props.theme.colors;
    return (
      <Tab.Navigator
        initialRouteName="Home"
        labeled={false}
        activeColor={colors.primary}
        barStyle={{ backgroundColor: colors.card }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => (
              <MaterialIcons
                name="group"
                size={24}
                color={focused ? colors.primary : colors.inActive}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={Search}
          options={{
            tabBarIcon: ({ focused }) => (
              <MaterialIcons
                name="search"
                size={24}
                color={focused ? colors.primary : colors.inActive}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Contacts"
          component={Contacts}
          options={{
            tabBarIcon: ({ focused }) => (
              <MaterialIcons
                name="contacts"
                size={24}
                color={focused ? colors.primary : colors.inActive}
              />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
}

export default withTheme(bottomNavigator);
