import React, { useState } from "react";
import {Text , View , StyleSheet} from "react-native";
const MyCart = (props) => {
    const [cartItems,setCartItems]= useState()
    if (!cartItems) {
        return<View style={styles.screen}>
        <Text style={styles.title}>Your Cart is Empty</Text>
        </View>
}
    return(
        <View style={styles.screen}>
            <Text>Cart Items with quantity and price selection and submission </Text>
        </View>
    )

}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems:"center"
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
      },

})

export default MyCart;