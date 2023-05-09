/// firebase authentication will send you with some response for example idToken etc

// https://firebase.google.com/docs/reference/rest/auth#section-create-email-password

// How to authenticate

// * authentication Step 1 = go to the firebase console then go to the authentication section
// authentication * Step 2 = then go to the signin method then select method and enable it 


// step 23 expo i expo-app-loading

import { useContext, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppLoading from 'expo-app-loading';

import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import WelcomeScreen from './screens/WelcomeScreen';
// // authentication * Step 5 import this file
import AuthContextProvider, { AuthContext } from './store/auth-context';
import { Colors } from './constants/styles';
import IconButton from './components/ui/IconButton';

const Stack = createNativeStackNavigator();
// // authentication * Step 4 add the store and copy the file auth-context 

// authentication * Step 3 add these login and signup screens and stack like this // copy the login and signup screens and in your project 
function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: 'white',
        contentStyle: { backgroundColor: Colors.primary100 },
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
}
// // authentication * Step 6 your app screens will go to this stack set the screens
function AuthenticatedStack() {
  const authCtx = useContext(AuthContext);
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: 'white',
        contentStyle: { backgroundColor: Colors.primary100 },
      }}
    >
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        // authentication * Step 15 adding the logout button and writing the code in auth-context for logout (done with login and signup auto login baaki)
        options={{
          headerRight: ({ tintColor }) => (
            <IconButton
              icon="exit"
              color={tintColor}
              size={24}
              onPress={authCtx.logout}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}
 // authentication * Step 7  add this function to switch between authenticated and unauthenticated users 
function Navigation() {
  const authCtx = useContext(AuthContext);

  return (
    <NavigationContainer>
      {!authCtx.isAuthenticated && <AuthStack />}
      {authCtx.isAuthenticated && <AuthenticatedStack />}
    </NavigationContainer>
  );
}


function Root() {
  const [isTryingLogin, setIsTryingLogin] = useState(true);

  const authCtx = useContext(AuthContext);

      // step 21 getting the token to set to auto login if it exists 
  useEffect(() => {
    async function fetchToken() {
      const storedToken = await AsyncStorage.getItem('token');

      if (storedToken) {
        authCtx.authenticate(storedToken);
      }

      setIsTryingLogin(false);
    }

    fetchToken();
  }, []);

    // step 22 managing the app loading to auto login
  if (isTryingLogin) {
    return <AppLoading />;
  }

  return <Navigation />;
}

export default function App() {
  
  return (
    <>
      <StatusBar style="light" />
      {/* // authentication * Step 13 wrap the entire app with the auth context */}
      <AuthContextProvider>
        <Root />
      </AuthContextProvider>
    </>
  );
}
