import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import StudyTipsPageScreen from "./StudyTipsPageScreen";
import OverviewPageScreen from "./OverviewPageScreen";
import AddCoursesPageScreen from "./AddCoursesPageScreen";
import GradeCalcPageScreen from "./GradeCalcPageScreeen";

import MenuBar from "../components/MenuBar";

const DummyPageScreen = (props) => {
    
  //variable that created the bottom part for tab navigator
  const Tab = createBottomTabNavigator();

  return (
    //Displays the menu bar at the bottom of the page 
    //Displays the corresponding name of the screen 
      <Tab.Navigator screenOptions={{ headerShown: false }} tabBar={(props) => <MenuBar {...props} />}>
          <Tab.Screen name="Study Tips" component={StudyTipsPageScreen} /> 
          <Tab.Screen name="Overview" component={OverviewPageScreen} />
          <Tab.Screen name="Add Assessment" component={AddCoursesPageScreen} />
          <Tab.Screen name="Calculate Grade" component={GradeCalcPageScreen} />
      </Tab.Navigator>
  );
}

export default DummyPageScreen;
