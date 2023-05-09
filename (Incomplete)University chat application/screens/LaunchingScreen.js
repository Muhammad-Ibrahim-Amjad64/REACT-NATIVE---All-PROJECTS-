import React from "react";
import { Text, View, StyleSheet, Modal,Image } from "react-native";
import { GlobalStyles } from "../constants/colors";
import {LinearGradient} from "expo-linear-gradient"
const LaunchingScreen =(props)=>{

    return (
        
        
        <Modal  style={styles.modal} animationType={"fade"}>
            <LinearGradient
                
                colors={["black", "#313131"]} style={{ flex: 1 }}>
            <View style={styles.screen}  >
                    {/* <Text style={{ fontSize :100, color:"white" }}>*</Text> */}
                    <View style={styles.imageContainer}>
                    <Image  style={styles.image}  source={require('../assets/Logo.jpg')}></Image>
                    </View>
            <Text style={styles.title}>UBIT Community</Text>
                </View>
                </LinearGradient>
        </Modal>
    )

}

const styles = StyleSheet.create({
    screen: {
        color:"black",
        flex: 1,
        justifyContent: "center",
        // backgroundColor:GlobalStyles.colors.primary500,
        alignItems:"center"
    },
    title: {
        color: "wheat",
        fontSize:30
    }
    , modal: {
        flex:1
    },
    imageContainer: {
        width:  150,
        height:  150,
        borderRadius: 14,
        // borderWidth: 3,
        // borderColor: Colors.primary800,
        overflow: 'hidden',
        margin: 36,
      },
      image: {
        width: '100%',
        height: '100%',
      },



})

export default LaunchingScreen;

