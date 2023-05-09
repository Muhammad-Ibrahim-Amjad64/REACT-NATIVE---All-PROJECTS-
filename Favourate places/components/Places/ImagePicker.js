// step 3 to  5  simply add this component 
import React, { useState } from "react";
import { Image, View, StyleSheet,Button,Alert,Text } from "react-native";
import {launchCameraAsync, useCameraPermissions,PermissionStatus} from "expo-image-picker" // taking photo step 3
import { Colors } from "../../constants/colors"
import OutlinedButton from '../UI/OutlinedButton';

const ImagePicker = () => {
  //  showing an image captured preview step 12
    const [pickedImage,setPickedImage]=useState(false)

    // taking photo on ios step 8 accessing permissions and start taking photo ios 
    const [cameraPermissionInfo, requestPermission] = useCameraPermissions()
    
    // taking photo on ios step 9 define this function  
    const verifyPermission = async () => {
        if (cameraPermissionInfo.status === PermissionStatus.UNDETERMINED) {
            const permissionResponse = await requestPermission();
            
            return permissionResponse.granted
            
            
        }

        if (cameraPermissionInfo.status=== PermissionStatus.DENIED) {
            Alert.alert("Insufficient Permissions", "You need to grant camera permissions to use this app", [
                { text: "Okay", style: "destructive" },
            ]);
            return false 
            }
        
        return true 
    }

// taking photo step 4 add this function to trigger 
    const TakeImageHandler = async () => {
// taking photo on ios step 10 using the permissions and returning done taking photo 
        const hasPermissions = await verifyPermission()
        
        if (!hasPermissions) { return }
        
        const image = await launchCameraAsync({  // taking photo step 5 we cn set optins
            allowsEditing: true,
            aspect: [16, 9],
            quality:0.5    // isko islia km cuz new phone heavy cameras 
        }) 
         //  showing an image captured preview step 13
        setPickedImage(image.uri)
         // Location picking step 20 passing the selected image to the form
        props.onTakeImage(pickedImage)
        
    }
  //  showing an image captured preview step 14
    let imagePreview = <Text style={{color:"white"}}>No image captured yet.</Text>
    if (pickedImage) {
        imagePreview= <Image style={ styles.image} source={{uri:pickedImage}}/>  
    }

    return(
        <View  style={styles.screen}>
            {/* showing an image captured preview step 11  */}
            <View style={styles.imageContainer}>{imagePreview}</View>
            {/* <Button title="press to select image" onPress={TakeImageHandler}></Button> */}
            <OutlinedButton icon="camera" onPress={TakeImageHandler}>Take Image</OutlinedButton>
        </View>
    )

}

const styles = StyleSheet.create({
    screen: {
        // flex: 1,
        // justifyContent: "center",
        alignItems:"center"
    },
    image: {
        height: "100%",
        width:"100%"
        
    },
    imageContainer: {
        height: 200,
        width: "100%",
        margin: 10,
        backgroundColor: Colors.primary100,
        backgroundColor: "black",
        justifyContent: "center",
        alignItems: "center",
        // borderRadius: 4,
        borderColor: "white",
        borderWidth:1
    }


})

export default ImagePicker;

