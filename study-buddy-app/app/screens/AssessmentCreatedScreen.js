import React from "react";
import { View, Text, StyleSheet} from "react-native";
// import * as Icon from "react-native-feather";
import Icon from "react-native-vector-icons/Ionicons";

const AssessmentCreatedScreen = (props) => {
    return(
        <View style={styles.container}> 
        <Text style={styles.Icon}></Text>
        
         <Text style={styles.title}>Assessment Created!</Text>
         <Icon name="checkmark-circle-outline" color={"green"} size={200} />
         <Text style={styles.title2}>Please refer to the courses overview tab
         in the main menu to view the assignment you created.</Text>
         

        </View>
       
        
    );

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        padding: 40
    },
    title:{
        fontSize: 30,
        textAlign: 'center',
        // flex: 1,
        alignItems: "center",
    
         fontWeight: "bold",
         marginBottom: 30,
         
      },
      title2:{
        fontSize: 20,
        textAlign: 'center',
        alignItems: "center",
        marginTop: 30,
         fontWeight: "bold",
      },
      Icon:{
         flexDirection:'column',
        backgroundColor:'#fff',
       
      },
});
export default AssessmentCreatedScreen;
