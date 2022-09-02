/**
 * Returns the color picker for the ChooseColourCodeScreen.js.
 * 
 * Receieved help from the following reference: https://www.waldo.com/blog/react-native-colors
 * Contributed team members: Rosanne.
 */
import React from "react";
import { StyleSheet } from "react-native";
import { TriangleColorPicker, fromHsv } from "react-native-color-picker";
import { assignmentObj } from "../../App";

const PickerComponent = () => {  return (
    <TriangleColorPicker
      onColorSelected={(color) => {
        assignmentObj.colorCode = fromHsv(color);
      }}
      onColorChange={(color) => {
        assignmentObj.colorCode = fromHsv(color);
      }}
      style={styles.colorContainer}
    />
  );
};

const styles = StyleSheet.create({
  colorContainer: {
    marginTop: 10,
    width: 225,
    height: 275,
  },
});

export default PickerComponent;
