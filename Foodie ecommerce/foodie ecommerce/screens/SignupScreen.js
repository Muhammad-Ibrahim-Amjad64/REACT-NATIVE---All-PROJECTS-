import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import SubmitButton from '../SubmitButton';
import { KeyboardAvoidingView ,ScrollView} from 'react-native';

const Signup = () => {

 

  const handleSignup = () => {
    console.log('Signing up with:', { username, email, password });
    // Add your signup logic here
  };

    return (
            <KeyboardAvoidingView style={{flex:1}}>
        <ScrollView style={{flex:1}}>

            
      <View style={styles.container}>
          <View style={styles.form}>
          <View style={{marginBottom:50}}>
              <Text style={styles.heading}>Welcome</Text>
              <Text style={styles.subheading}>Signup to continue!</Text>
          </View>
              
            
              
              <View>    
        <Text>Email ID</Text>
      <TextInput
        style={styles.input}
        placeholder="example@gmail.com"
        onChangeText={setEmail}
        value={email}
        />
                   <Text>Password</Text>
      <TextInput
        style={styles.input}
        
        onChangeText={setPassword}
        value={password}
        secureTextEntry={true}
        />
                   <Text>Confirm password</Text>
      <TextInput
        style={styles.input}
        
        onChangeText={setPassword}
        value={password}
        secureTextEntry={true}
        />
        </View>
              <View>
      <SubmitButton style={{marginVertical:20}} onPress={handleSignup}>
                      <Text style={styles.buttonText}>Signup</Text>
                      
                  
                  </SubmitButton>
                  <Text style={{color:"grey"}}>Already have an account? <Text style={{textDecorationLine:"underline",color:"#000000",fontWeight:'bold'}}>Login</Text></Text>
              </View>
        </View>
    </View>
          </ScrollView>
        </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
    subheading: {
        color:"#5f5f5f"
    },
    heading: {
        fontWeight: "bold",
        fontSize: 35,
    color:"#000000"
    },
    form:{backgroundColor:"#fffffffd", padding:10, borderRadius:5, marginTop:30},
    container: {
      backgroundColor:"#45055a",
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
      paddingHorizontal: 10,
      marginTop: 5,
    marginBottom:25
  },
 

});

export default Signup;
