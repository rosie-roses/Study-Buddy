/**
 * Bottom Tab Navigator - Returns the Menu Bar.
 * Received help from the following reference: https://reactnavigation.org/docs/bottom-tab-navigator/
 * Contributed team members - Mehma and Rosanne.
 */
import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

const MenuBar = ({ state, descriptors, navigation }) => {

    return (
        <View style={{ flexDirection: 'row' }}>
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
                type: 'tabPress',
                target: route.key,
              });
    
              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name);
              }
            };
    
            const onLongPress = () => {
              navigation.emit({
                type: 'tabLongPress',
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
                <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
                  {label}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      );
}

export default MenuBar;