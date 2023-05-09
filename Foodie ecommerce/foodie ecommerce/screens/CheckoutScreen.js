import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import SubmitButton from "../UI/SubmitButton";
const MyCart = (props) => {
 
    return(
        <View style={styles.screen}>
            <Text>Select a payment method</Text>
            <SubmitButton>Confirm Order</SubmitButton>
        </View>
    )

}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems:"center"
    }


})

export default MyCart;