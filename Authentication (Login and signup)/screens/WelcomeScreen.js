    // authentication * Step 16 accessing the protected resources using token (only authenticated users and users will valid token have excess to that resource)
  //  go to the firebase rules and set the rules to 
  // "rules": {
  //   ".read": "auth.uid != null",  // 2023-3-25
  //   ".write": "auth.uid != null",  // 2023-3-25
  // }

import axios from 'axios';
import { useContext, useEffect, useState } from 'react';

import { StyleSheet, Text, View } from 'react-native';
import { AuthContext } from '../store/auth-context';

function WelcomeScreen() {
  const [fetchedMessage, setFetchedMesssage] = useState('');

  const authCtx = useContext(AuthContext);


  const token = authCtx.token;

    // authentication * Step 17 using the token to access the protected resources using the token (if the token is valid then the data will be fetched below) it is a use case to check if the user that send request is authenticated or not 
  useEffect(() => {

    axios
      .get(
        'https://authentication-2d6e8-default-rtdb.firebaseio.com/message.json?auth='+ token
      )
      .then((response) => {
        setFetchedMesssage(response.data);
        console.log(token)
        
      });
  }, [token]);

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Welcome!</Text>
      <Text style={{ color: "#ffffff" }} >You authenticated successfully!</Text>
      <Text style={{ color: "#27c2b8" }}>{fetchedMessage}</Text>
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
    
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    color: "#65ffdb" 
  },
});
