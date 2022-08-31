import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import MenuBar from "./MenuBar";
import HomePageScreen from "./HomePageScreen";
import StudyTimePageScreen from "./StudyTimePageScreen";
import AddCoursesPageScreen from "./AddCoursesPageScreen";
import OverviewPageScreen from "./OverviewPageScreen";
import AccountPageScreen from "./AccountPageScreen";

function DummyPageScreen() {
    const Tab = createBottomTabNavigator();

    return(
        <Tab.Navigator screenOptions={{ headerShown: false }} tabBar={(props) => <MenuBar {...props} />}>
            <Tab.Screen name="Home" component={HomePageScreen} />
            <Tab.Screen name="StudyTime" component={StudyTimePageScreen} />
            <Tab.Screen name="AddCourses" component={AddCoursesPageScreen} />
            <Tab.Screen name="Overview" component={OverviewPageScreen} />
            <Tab.Screen name="Account" component={AccountPageScreen} />
        </Tab.Navigator>
    );
}

export default DummyPageScreen;