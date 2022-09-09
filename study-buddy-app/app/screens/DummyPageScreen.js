import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import HomePageScreen from "./HomePageScreen";
import OverviewPageScreen from "./OverviewPageScreen";
import AddCoursesPageScreen from "./AddCoursesPageScreen";
import GradeCalcPageScreen from "./GradeCalcPageScreeen";

import MenuBar from "../components/MenuBar";

const DummyPageScreen = (props) => {
    
  const Tab = createBottomTabNavigator();

  return (
    //Displays the menu bar at the bottom of the page 
      <Tab.Navigator screenOptions={{ headerShown: false }} tabBar={(props) => <MenuBar {...props} />}>
          <Tab.Screen name="Home" component={HomePageScreen} />
          <Tab.Screen name="Overview" component={OverviewPageScreen} />
          <Tab.Screen name="Add Courses" component={AddCoursesPageScreen} />
          <Tab.Screen name="Calculate Grade" component={GradeCalcPageScreen} />
      </Tab.Navigator>
  );
}

export default DummyPageScreen;
