import React, { useState } from "react";
import FeedbackItem from "../components/FeedbackItem";
import { Text, View, StyleSheet, Image,FlatList,TextInput,ScrollView,KeyboardAvoidingView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import SubmitButton from "../components/SubmitButton";

const FeedBackData = [
    {
        label: "Excellent",
        icon: "happy-outline"
    },
    {
        label: "Good",
        icon: "slightly-smile"
    },
    {
        label: "OK!",
        icon: "neutral"
    },
    {
        label: "Bad",
        icon: "sad-outline"
    },
]
const FeedBack = (props) => {
    const [feedback,setFeedback]=useState("")
    const [feedbackcomments,setFeedbackcomments]=useState("")
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

    const feedBackChangeHanlder = (value) => {
        setFeedback(value)
    }
    const feedBackcommentsChangeHanlder = (value) => {
        setFeedbackcomments(value)
    }
    return (
        <ScrollView>
        <View style={styles.screen}>
            <View style={styles.imageContainer} >
            <Image style={styles.image}
          source={require("../assets/Logo.jpg")}
          ></Image>
          </View>
                <Text style={
                    { color: "#003a5d" }
            }>Please Rate Your Experience</Text>
            {/* <View styles={styles.feedback}> */}
            <FlatList style={ {backgroundColor:"white"}}
        horizontal={true}
        keyExtractor={(item, index) => item.label}
        data={FeedBackData}
        renderItem={(feedback) => {
            return (
                <FeedbackItem
                icon={feedback.item.icon}
                label={feedback.item.label}
                />        
                );
            }}
            
            ></FlatList>
            {/* </View> */}
           <View style={styles.inputContainer}>
                    <Text style={styles.label}>Additional Comments</Text>
                    <View style={styles.TextInputContainer}>
                        <TextInput placeholder="Enter Your Comment" onChange={feedBackcommentsChangeHanlder}
                value={feedbackcomments}            style={styles.textInput} />
                    </View>
                    <SubmitButton>Submit</SubmitButton>
    </View>
            
        
            
            
        </View>
            </ScrollView>
    )

}

const styles = StyleSheet.create({
    TextInputContainer: {
         width: 300,
        height: 150,
        backgroundColor: "white",
        marginVertical: 15,
        borderWidth:1,
        borderColor: "grey",
        
    },
    textInput: {
    
        minHeight: 100    ,
        textAlignVertical: 'top',
        baorderWidth: "grey",

       

        
    },
    feedback: {
        height: 20,
        width:20
    },
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems:"center"
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
      },inputContainer: {
        marginHorizontal: 4,
        marginVertical: 8
      },
      label: {
        fontSize: 20,
        color: "#c691e2",
        marginBottom: 4,
        fontWeight:"600"
      },




})

export default FeedBack;