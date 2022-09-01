import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import HomePageScreen from "./HomePageScreen";
import OverviewPageScreen from "./OverviewPageScreen";
import AddCoursesPageScreen from "./AddCoursesPageScreen";
import GradeCalcPageScreen from "./GradeCalcPageScreeen";
import AccountPageScreen from "./AccountPageScreen";
import ChooseColourCodeScreen from "./addCoursesScreens/chooseColourCodeScreen";
import { NavigationContainer } from "@react-navigation/native";
import * as Icon from "react-native-feather";
import { StyleSheet } from "react-native";
import MenuBar from "./MenuBar";

const DummyPageScreen = (props) => {
    
  const Tab = createBottomTabNavigator();

  return (
      <Tab.Navigator screenOptions={{ headerShown: false }} tabBar={(props) => <MenuBar {...props} />}>
          <Tab.Screen name="Home" component={HomePageScreen} />
          <Tab.Screen name="Overview" component={OverviewPageScreen} />
          <Tab.Screen name="Add Courses" component={AddCoursesPageScreen} />
          <Tab.Screen name="Calculate Grade" component={GradeCalcPageScreen} />
          <Tab.Screen name="Account" component={AccountPageScreen} />
      </Tab.Navigator>
  );
}

export default DummyPageScreen;
