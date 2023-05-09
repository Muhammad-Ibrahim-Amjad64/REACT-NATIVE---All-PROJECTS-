import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
const FeedbackItem = ({ icon, label,children }) => {
    let content 
    if (icon==="happy-outline" ||icon==="sad-outline") {
        content = <Ionicons name={icon} size={26} color="black" />
    } else {
        content= <Fontisto name={icon} size={24} color="black" />
    }

    return(
        <View style={styles.screen}>
            {content}
            <Text>{label}</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    screen: {
        marginVertical: 15,
        marginHorizontal:20,
        
        alignItems:"center"
    }


})

export default FeedbackItem;