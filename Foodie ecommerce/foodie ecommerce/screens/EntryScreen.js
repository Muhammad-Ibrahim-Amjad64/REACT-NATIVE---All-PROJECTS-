
import React from "react";
import { useLayoutEffect } from "react";
import { Text, View, StyleSheet, Image,Dimensions } from "react-native";
import { List } from 'react-native-paper';
// import useNavigation from "@react-navigation/native";
import SubmitButton from "../UI/SubmitButton";
import ExpandableList from "../UI/ExpandableList";
// import  useNavigation  from "@react-navigation/native";
// import { TextInput } from "react-native-gesture-handler";

const EntryScreen = (props) => {
    // const navigation = useNavigation()


    const submitHandler = () => { props.navigation.navigate("Drawer") 
        
    }

    return(
        <View style={styles.screen}>
            <View style={{alignItems:"center"}}>
             <View style={styles.imageContainer} >
            <Image style={styles.image}
          source={require("../assets/Logo.jpg")}
          ></Image>
          </View>
            <Text style={styles.title}>Select your location to order Happily :)</Text>
          </View>
            {/* <TextInput></TextInput> */}
            <ExpandableList/>
            <SubmitButton onPress={submitHandler}>Confirm and Continue</SubmitButton>

            

            
        </View>
    )

}

const deviceWidth = Dimensions.get("window").width

const styles = StyleSheet.create({
    title: {
        fontSize: 15,
        fontWeight:"bold"
    },
    screen: {
        padding:10,
        flex: 1,
        justifyContent: "center",
        // alignItems:"center"
    },
    imageContainer: {
        width: deviceWidth < 380 ? 100 : 200,
        height: deviceWidth < 380 ? 100 : 200,
        borderRadius: deviceWidth < 380 ? 50 : 100,
        borderWidth: 3,
        // borderColor: Colors.primary800,
        overflow: 'hidden',
        margin: 36,
   
      
      },
      image: {
        width: '100%',
        height: '100%',
      },


})

export default EntryScreen;
