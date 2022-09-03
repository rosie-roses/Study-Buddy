import React, { Component } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
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
      <Pressable style={styles.assignmentContainer} onPress={() => console.log("pressed")}>
        <Text>
          <Text style={styles.property}>Assignment Name:</Text> {this.state.assignmentName},
          <Text style={styles.property}> Color Code:</Text> {this.state.colorCode}, 
          <Text style={styles.property}> Weight:</Text> {this.state.weight}, 
          <Text style={styles.property}> Grade:</Text> {this.state.grade}
        </Text>
      </Pressable>
    );
  }
}

const styles = StyleSheet.create({
  assignmentContainer: {
    borderWidth: 2,
    borderColor: "#DDDDDD",
    marginBottom: 30,
    padding: 20
  },
  property: {
    fontWeight: "bold",
  }
})

export default Assignment;
