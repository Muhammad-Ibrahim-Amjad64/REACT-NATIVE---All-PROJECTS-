import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import StudentForm from "../components/StudentForm";
import SubmitButton from "../components/SubmitButton";
const Profile = (props) => {
    const [show,setShow]=useState(false)
    const navigation = useNavigation()
    const backNavigationHandler = () => {
        navigation.goBack()
    }
    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft:  ({ color, size }) => (
                <Ionicons onPress={backNavigationHandler} name="arrow-back" size={30} color={"white"} />),
            
    
          
        });
      }, [navigation]);

    const showModeHandler = () => {
        setShow(true)
    }

    const onCancelHandler = () =>{
        setShow(false)
    }
    if (show) {
        return <StudentForm onCancel={onCancelHandler}></StudentForm>
        
    }
    return(
        <View style={styles.screen}>
            <Text>Ali khan</Text>
            <Text>major</Text>
            <Text>major</Text>
            <SubmitButton onPress={showModeHandler}>Manage Your Profile</SubmitButton >

            {/* <StudentForm></StudentForm> */}
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

export default Profile;