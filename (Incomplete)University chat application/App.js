import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { GlobalStyles } from "./constants/colors";
import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { FontAwesome } from "@expo/vector-icons";
// expo r -c
import { useState, useEffect, useContext } from "react";

import MainScreen from "./screens/MainScreen";
import OtherStudents from "./screens/OtherStudents";
import FeedBack from "./screens/Feedback";
import Profile from "./screens/Profile";
import LaunchingScreen from "./screens/LaunchingScreen";


import LoadingOverlay from "./components/UI/LoadingOverlay";
import ModeContextProvider from "./store/ModeContextProvider";
import CustomDrawer from "./components/UI/CustomDrawer";
import { useFonts } from 'expo-font';
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from '@expo/vector-icons'
import Signup from "./components/UI/Signup";
// import Login from "./components/UI/Login";





const BottomTabs = createBottomTabNavigator();
const Drawer = createDrawerNavigator();



const DrawerElements = () => {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawer {...props}  />}
      screenOptions={{   
        drawerInactiveTintColor:"white",
        // drawerInactiveBackgroundColor:"#f1efef",
        drawerActiveTintColor: "#d5b1ff" ,   // active walay ka color 
        drawerStyle: { backgroundColor: "#121212" },
        drawerActiveBackgroundColor:"#3f3f3f" ,  // jaisay stack mn content style tha
     
        
        headerTintColor: GlobalStyles.colors.primary800,
        headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
      }}
    >
      <Drawer.Screen options={{headerTitle: "Home"}} name="Home" component={MainScreen}></Drawer.Screen>
      <Drawer.Screen options={{headerTitle: "Profile"}}  name="Profile" component={Profile}></Drawer.Screen>
      <Drawer.Screen options={
        {
          headerTitle: "Help& feedback",
          sceneContainerStyle:{backgroundColor:"#fbfbfb"},
          
        }
      } name="Help& feedback" component={FeedBack}></Drawer.Screen>
    </Drawer.Navigator>
  );
};


export default function App() {
  const [launching, setLaunching] = useState(true);
  const [fontsLoaded] = useFonts({
    'Playfairdisplay': require('./utils/PlayfairDisplaySC-Bold.otf'),
   
  });




  if (true) {
    return <Signup/>
  }


  useEffect(() => {
    const timer = setTimeout(() => {
      setLaunching(false);
    }, 3000);
    // cleanup function
    return () => clearTimeout(timer);
  }, []);

  if (launching) {
    return <LaunchingScreen />;
  }



  if (!fontsLoaded) {
    return <LoadingOverlay />;
  }

  return (
    <ModeContextProvider>
      <View style={styles.container}>
        <StatusBar style="light" />

        <NavigationContainer>
        
          <BottomTabs.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
              headerTintColor: 'white',
              tabBarStyle: { backgroundColor: GlobalStyles.colors.primary400 },
              tabBarActiveTintColor: GlobalStyles.colors.accent500,
              
              headerLeft: () => (
                <FontAwesome name="user-circle-o" size={24} color="grey" />
              ),
              headerTitle: "University of karachi students",
              
            }}
          >
            <BottomTabs.Screen
              name="Home screen"
              component={DrawerElements}
              options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="home-sharp" size={size} color={color} />),
                headerShown: false,
                headerTintColor: GlobalStyles.colors.primary800,
                headerStyle: {
                  backgroundColor: GlobalStyles.colors.primary500,
                },
              }}
            ></BottomTabs.Screen>
            <BottomTabs.Screen
              options={{
                tabBarIcon: ({ color, size }) => (
                  <MaterialIcons name="groups" size={size} color={color} />),
            }}
              name="Students"
              component={OtherStudents}
            ></BottomTabs.Screen>
   
          </BottomTabs.Navigator>
        </NavigationContainer>
      </View>
    </ModeContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
