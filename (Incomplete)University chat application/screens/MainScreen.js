import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, View, StyleSheet, Button, Pressable,Image } from "react-native";

import { useLayoutEffect } from "react";
import { GlobalStyles } from "../constants/colors";
import { Ionicons } from "@expo/vector-icons";
import { useContext } from "react";
import { Octicons } from "@expo/vector-icons";
import modeContext from "../store/mode-Context";
import { IconButton } from "react-native-paper";
import { DUMMY_Data } from "../assets/data/dummy-Data";

import TaskList from "../components/TaskList";


// import {Ionicons} from ""


const MainScreen = (props) => {
  const ctx = useContext(modeContext);
  let icon;

  const modeChangeHandler = () => {
    ctx.changeMode();
  };
  if (ctx.mode) {
    icon = (
      <Octicons
        onPress={modeChangeHandler}
        name="moon"
        size={25}
        color="white"
      />
    );
  } else {
    icon = (
      <Octicons
        onPress={modeChangeHandler}
        name="sun"
        size={25}
        color="white"
      />
    );
  }

  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => icon,

      sceneContainerStyle: { backgroundColor: ctx.mode ? "white" : GlobalStyles.colors.gray700 },
    });
  }, [navigation, ctx]);

  const backgroundColor = {
    backgroundColor: ctx.mode ? GlobalStyles.colors.primary50 : "cyan",
  };
  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        {/* <TaskList TaskList={DUMMY_Data} ></TaskList> */}
        <View style={styles.imageContainer} >
            <Image style={styles.image}
          source={require("../assets/Logo.jpg")}
          ></Image>
          </View>
          <Text style={styles.title}>Welcome!</Text>
        {/* <Text style={styles.titleStyle}>To the UBIT Community</Text> */}
      </View>

      <View>
        {/* <Text>upcoming Events!</Text> */}
        <TaskList  TaskList={DUMMY_Data}></TaskList>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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
  titleStyle: {
    borderBottomColor: "#d8d8d8",
    borderBottomWidth:1,
    marginTop: 12,
    fontWeight:"bold"
  },
  title: {
    color:"#5c36a1",
    fontWeight: "bold",
    fontSize: 20,
   
  
  },
  addNewTask: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    // borderBottomWidth: 2,
    // borderBottomColor: "grey",
    marginBottom: 15,
    backgroundColor:"#f6efff"
    
  },
  screen: {
    flex: 1,
    padding: 20,
    // justifyContent: "center",
    alignItems: "center",
    justifyContent:"space-between"
    // justifyContent:"center"
  },
  info: {
    padding: 8,
    // backgroundColor:  GlobalStyles.colors.primary50,
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default MainScreen;
