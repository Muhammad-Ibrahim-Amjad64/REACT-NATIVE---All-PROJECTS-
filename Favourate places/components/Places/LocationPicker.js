//  Location picking 
import React, { useEffect } from "react";
import { useNavigation,useRoute, useIsFocused } from "@react-navigation/native";
import { useState } from "react";
import { Text, View, StyleSheet ,Alert,Image} from "react-native";
import OutlinedButton from "../UI/OutlinedButton";
import { Colors } from "../../constants/colors";
import { getCurrentPositionAsync, useForegroundPermissions, PermissionStatus } from "expo-location";  // Location picking step 4
import { getMapPreview } from "../../util/location";

    

const LocationPicker = (props) => {
    const Route = useRoute()  // Location picking step 14 
    const isFocused = useIsFocused();   // Location picking step 15
    const navigation = useNavigation()
    // getMapPreview(1,2)
    // Location picking step 6 
    const [locationPermissionInfo, requestPermission] = useForegroundPermissions()
    
     // Location picking step 8
    const [pickedLocation, setPickedLocation] = useState(false)

    // Location picking step 16
  useEffect(() => {
    if (isFocused && Route.params) {
      const mapPickedLocation = {
        lat: Route.params.pickedLat,
        lng: Route.params.pickedLng,
      };
      setPickedLocation(mapPickedLocation);
    }
  }, [Route, isFocused]);
   
    useEffect(() => {
          // Location picking step 19 passing the selected location to the form 
          props.onPickedLocation(pickedLocation)
    }, [pickedLocation])
    // yahan  pr hm picked location ko bhi useEffect mn daalna th  then wrapping the function with useCallback but it is not must 
    

   // Location picking step 5 add this function  
    const verifyPermission = async () => {
        
    
        if (locationPermissionInfo.status === PermissionStatus.UNDETERMINED) {
            const PermissionResponse = await requestPermission()
            return PermissionResponse.granted
            
        }

        if (locationPermissionInfo.status === PermissionStatus.DENIED) {
            Alert.alert("Insufficient Permissions", "You need to grant location permissions to use this app", [
                { text: "Okay", style: "destructive" },
            ]);
            return false 
            
        }

        return true

    }
    

    // Location picking step 2 ye function add 
    const getLocationHandler = async () => {
 // Location picking step 6 using permission  
        const hasPermissions = await verifyPermission()
 // Location picking step 7 using permission
        if (!hasPermissions) { return }

        const currentLocation = await getCurrentPositionAsync()

        console.log(currentLocation)
        setPickedLocation({
            lat: currentLocation.coords.latitude,
            lng:currentLocation.coords.longitude
        })




    }
    const pickOnMapHandler = () => { navigation.navigate("Map") }
     // Location picking step 9
    let mapContent = <Text style={{ color: "white" }}>I am map </Text> 
    
    if (pickedLocation) {
        mapContent =
            // <Image style={styles.image} source={{ uri: getMapPreview(pickedLocation.lat, pickedLocation.lng) }} />

           // Location picking step 11 ended with getting the current location 
            <Image style={styles.image} source={{ uri:"https://miro.medium.com/max/1200/1*qYUvh-EtES8dtgKiBRiLsA.png" }} />
        
        
    }

    return(
        <View style={styles.root}>
            <View style={styles.mapContainer}>{mapContent}</View>

            <View style={styles.actions}>
                {/* Location picking step 1 buttons and bound to func */}
                <OutlinedButton onPress={getLocationHandler} icon={"location"}>Locate User</OutlinedButton>
                <OutlinedButton onPress={pickOnMapHandler} icon={"map"}>Pick on map</OutlinedButton>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    mapContainer: {
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
   },

    actions: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems:"center"
        
        
    },
    root: {
      
        alignItems:"center"
    },
    image: {
        height: "100%",
        width:"100%"
    }

})


export default LocationPicker;