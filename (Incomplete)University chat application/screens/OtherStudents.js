import React from "react";

import { Text, View, StyleSheet, Button, Image, Pressable, Dimensions, FlatList } from "react-native";
import { dummyStudents } from "../assets/data/dummyStudents"
import StudentItem from "../components/StudentItem";


import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
// import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { useEffect, useState  } from "react";
import { FontAwesome } from '@expo/vector-icons'; 
import {Ionicons} from '@expo/vector-icons'

const OtherStudents = (props) => {
  const navigation = useNavigation()
  const backNavigationHandler = () => {
    navigation.goBack()
}
  useLayoutEffect(() => {
    navigation.setOptions({
        headerLeft:  () => (
            <Ionicons onPress={backNavigationHandler} name="arrow-back" size={30} color={"white"} />),
    });
  }, [navigation]);
  // let quote = <Text style={styles.quote}>{ randomQuote.quote}</Text> ;


  
  return (
    <View style={styles.screen}>
      <Text>Search</Text>
      <FlatList
      
        keyExtractor={(item, index) => item.id}
        data={dummyStudents}
        renderItem={(student) => {
          return (
             
            <StudentItem
              picture={student.item.pic}
              name={student.item.name}
              major={student.item.major}

            />
          );
        }}
        
      ></FlatList>
      
    </View>
  );
};
const deviceWidth = Dimensions.get("window").width



const styles = StyleSheet.create({
  authorContainer: {
    // flex:1,
      //  backgroundColor:"white",
    alignItems: "flex-end",
    // justifyContent:"center",
    marginTop: 20,
    marginHorizontal:5
  },
  author: {
 

   
    fontWeight:"bold"
 },
  quote: {
    marginVertical: 6,
    marginHorizontal:3
  },
  quoteContainer: {
    elevation:4,
    width: 300,
    height: 220,
    // borderRadius: 10,
    padding:10,
    // backgroundColor: "#d8ffff",
    backgroundColor: "#9eecf6",
    // flex: 1
  },
  punch: {fontWeight:"bold", fontSize:20},
  
  teddyContainer: { alignItems: "center", },
  
  imageContainer: {

    backgroundColor:"red",
    // alignItems: "center",
    // justifyContent:"center",
    width: deviceWidth < 380 ? 200 : 250,
    height: deviceWidth < 380 ? 200 : 250,
    // borderRadius: deviceWidth < 380 ? 50 : 25,
    // borderWidth: 3,
    // borderColor: "black",
    overflow: 'hidden',
    margin: 36,
  },
  screen: {
    // marginVertical:50,
    flex: 1,
    padding:10,
    justifyContent: "center",
    alignItems: "center",
    // alignContent:"center"
  },
  image: {
    // backgroundColor:"black",
    // height: 250,
    // width: 250,
    height: "100%",
    width: "100%",
    
  }
});

export default OtherStudents;
