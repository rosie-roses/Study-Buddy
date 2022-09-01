/**
 * Bottom Tab Navigator - Returns the Menu Bar.
 * Received help from the following reference: https://reactnavigation.org/docs/bottom-tab-navigator/
 * Contributed team members - Mehma and Rosanne.
 */
import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import * as Icon from "react-native-feather";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const MenuBar = ({ state, descriptors, navigation, size }) => {
  return (
    <View style={styles.menuBar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            key={index}
            style={{ flex: 1 }}
          >
            {route.name === "Home" ? <Icon.Home color={isFocused ? "#673ab7" : "#222"} size={size} style={styles.labelStyle} /> : null}
            {route.name === "Overview" ? <Icon.BookOpen color={isFocused ? "#673ab7" : "#222"} size={size} style={styles.labelStyle} /> : null}
            {route.name === "Add Courses" ? <Icon.PlusSquare color={isFocused ? "#673ab7" : "#222"} size={size} style={styles.labelStyle} /> : null}
            {route.name === "Calculate Grade" ? <MaterialCommunityIcons name="calculator" color={isFocused ? "#673ab7" : "#222"} size={28} style={[styles.labelStyle, styles.gradeCalc]} />  : null}
            {route.name === "Account" ? <Icon.User color={isFocused ? "#673ab7" : "#222"} size={size} style={styles.labelStyle} /> : null}
            <Text
              style={{
                color: isFocused ? "#673ab7" : "#222",
                marginLeft: "auto",
                marginRight: "auto",
                textAlign: "center",
                textTransform: "uppercase",
                letterSpacing: 0.5,
                fontWeight: "bold",
                fontSize: 12
              }}
            >
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
    menuBar: {
        flexDirection: "row", 
        flexWrap: "wrap",
        borderTopColor: "#cccccc",
        borderWidth: 1,
        height: 105,
        paddingTop: 10,
        backgroundColor: "#ffffff"
    },
    labelStyle: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        marginLeft: "auto",
        marginRight:"auto",
        marginBottom: 5,
        marginVertical: 10,
    },
    gradeCalc: {
      flex: 0
    }
});

export default MenuBar;
