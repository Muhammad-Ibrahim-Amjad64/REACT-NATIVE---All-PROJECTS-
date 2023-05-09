// https://docs.expo.dev/versions/v47.0.0/sdk/imagepicker/

// npx expo install expo-image-picker    taking photo step 1 
//---------------------------------------------------------------------

// then  in app.json paste this at the bottom   taking photo step 2

// "plugins": [
//   [
//     "expo-image-picker",
//     {
//       "photosPermission": "The app accesses your photos to let you share them with your friends."
//     }
//   ]
// ],

import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AllPlaces from './screens/AllPlaces';
import AddPlace from './screens/AddPlace';
import Map from "./screens/Map"
import IconButton from './components/UI/IconButton';
import { Colors } from './constants/colors';
import { useEffect, useState } from 'react';
import { init } from './util/Database'; // Using SQLite database step 5 


import AppLoading from 'expo-app-loading';   // Using SQLite database step 7 
// expo install expo-app-loading

const Stack = createNativeStackNavigator();

export default function App() {
  const [dbInitialized,setdbInitialized]= useState(false)
  // Using SQLite database step 6 initializing the database 
  useEffect(() => {
  
    init().then(() => {
      console.log("database initialized...")
      setdbInitialized(true)
    }).catch(e => { console.log(e) })
    
  }, [])
  
  if (!dbInitialized) {
    return <AppLoading></AppLoading>   // Using SQLite database step 8
    
  }
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: Colors.primary500 },
            headerTintColor: Colors.gray700,
            contentStyle: { backgroundColor: Colors.gray700 },
          }}
        >
          <Stack.Screen
            name="AllPlaces"
            component={AllPlaces}
            options={({ navigation }) => ({
              title: 'Your Favorite Places',
              headerRight: ({ tintColor }) => (
                <IconButton
                  icon="add"
                  size={24}
                  color={tintColor}
                  onPress={() => navigation.navigate('AddPlace')}
                />
              ),
            })}
          />
          <Stack.Screen
            name="AddPlace"
            component={AddPlace}
            options={{
              title: 'Add a new Place',
            }}
          />
          <Stack.Screen
            name="Map"
            component={Map}
          
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
