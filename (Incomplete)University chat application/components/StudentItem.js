import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
const StudentItem = ({ name,major,picture }) => {


    return(
        <View style={styles.screen}>
            <View style={styles.student}>
                <Text>pic</Text>  
            </View>
            <View style={{alignItems:"flex-start", marginHorizontal:20}}>
            <Text>{ name}</Text>
            <Text>{ major}</Text>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    screen: {
        flexDirection: "row",
        // justifyContent:"space-between",
        flex: 1,
        backgroundColor: "white",
        width: 500,
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor:"#a6a6a6"
        // alignItems:"center"
    },
    student: {
   
        
    }
 


})

export default StudentItem;