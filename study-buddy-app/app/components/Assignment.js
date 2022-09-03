import React, { Component } from "react";
import { Pressable, Text, View } from "react-native";
/**
 * Displays each assignment stored in the database as a Assignment component 
 * which is rendered as a pressable.
 */
class Assignment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      assignmentName: this.props.assignmentName,
      colorCode: this.props.colorCode,
      weight: this.props.weight,
      grade: this.props.grade,
    };
  }
  render() {
    return (
      <Pressable onPress={() => console.log("pressed")}>
        <Text>
          Assignment Name: {this.state.assignmentName}, Color Code: {this.state.colorCode}, Weight: {this.state.weight}, Grade: {this.state.grade}
        </Text>
      </Pressable>
    );
  }
}

export default Assignment;
