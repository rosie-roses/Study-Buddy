import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import HomePageScreen from "./HomePageScreen";
import StudyTimePageScreen from "./StudyTimePageScreen";
import AddCoursesPageScreen from "./AddCoursesPageScreen";
import OverviewPageScreen from "./OverviewPageScreen";
import AccountPageScreen from "./AccountPageScreen";
import { NavigationContainer } from "@react-navigation/native";
import * as Icon from "react-native-feather";
import { StyleSheet } from "react-native";
import MenuBar from "./MenuBar";

const DummyPageScreen = (props) => {
    
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer independent={true}>
        <Tab.Navigator screenOptions={{ headerShown: false }} tabBar={(props) => <MenuBar {...props} />}>
            <Tab.Screen name="Home" component={HomePageScreen} />
            <Tab.Screen name="Study Time" component={StudyTimePageScreen} />
            <Tab.Screen name="Add Courses" component={AddCoursesPageScreen} />
            <Tab.Screen name="Overview" component={OverviewPageScreen} />
            <Tab.Screen name="Account" component={AccountPageScreen} />
        </Tab.Navigator>
    </NavigationContainer>
  );
}

export default DummyPageScreen;
