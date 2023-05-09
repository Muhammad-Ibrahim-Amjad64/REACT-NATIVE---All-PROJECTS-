import { useState } from 'react';
import { ScrollView, Text, TextInput, View, StyleSheet } from 'react-native';
import {Colors } from "../../constants/colors.js"
import Button from '../UI/Button.js';
import ImagePicker from './ImagePicker.js';    // taking photo step 6
import LocationPicker from './LocationPicker.js';
function PlaceForm() {
  const [enteredTitle, setEnteredTitle] = useState("")
  const [takenImage, setTakenImage] = useState("")
  const [pickedLocation, setPickedLocation] = useState("")
  
  
  const titleChangehandler = (enteredText) => {
    setEnteredTitle(enteredText)
  }

  // Location picking step 18 add these functions to manage the choosed location and image
  const savePlaceHandler = () => {
    console.log(pickedLocation)
    console.log(enteredTitle)
    console.log(takenImage)
    props.onCreatePlace(pickedLocation)  // error 1 
   }
  
  const takeImageHandler = (imageUri) => {
    setTakenImage(imageUri)
    
  }
  const pickedLoactionHandler = (location) => {
    setPickedLocation(location)
    
  }

  return (
   
    <ScrollView style={styles.form}>
    <View>
        <Text style={styles.title}>Title</Text>
        <TextInput placeholder='enter your place title' style={styles.textInput} onChangeText={titleChangehandler} value={enteredTitle}></TextInput>
    </View>
      {/* // taking photo step 7 completed with taking android  */}
      <ImagePicker onTakeImage={takeImageHandler} />
      {/* // Location picking step 3 */}
      <LocationPicker onPickedLocation={pickedLoactionHandler} />
      {/* // Location picking step 17 added a form submit button*/}
    <Button onPress={savePlaceHandler}>Add place</Button>
    </ScrollView>
   
  );
}

export default PlaceForm;

const styles = StyleSheet.create(
  {

    form: {
      flex: 1,
      padding:24
    },  
    textInput: {
      backgroundColor: Colors.primary100,
      paddingHorizontal: 4,
      paddingVertical: 8,
      fontSize: 16,
      borderBottomColor: "white",
      borderBottomWidth: 4,
      
     
    },
    title: {
      color: "white",
      fontSize: 25,
      fontWeight:"bold",
      margin: 10,
      color:Colors.primary500
    }


  }
)
