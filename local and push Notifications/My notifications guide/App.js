// https://docs.expo.dev/push-notifications/overview/ 

// * npx expo install expo-notifications    -- step 1 local + push

// * paste the plugins in the app.json from expo notifications   -- step 2   local + push  see the app.json

// You need extra setup steps for push notifications if you are configuring your app for the appstore  watch video 255 2 min 



import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Button, Alert,Platform} from 'react-native';
import * as Notifications from "expo-notifications"    // --- step 3 local + push
import { useEffect } from 'react';
// import { Button } from 'react-native';

Notifications.setNotificationHandler({   // step 6 local + push
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});


export default function App() {


  useEffect(() => {       // step 8 for push notifications  add this useEffect() and function is for push (configuring app for receiving push notification)
    const configurePushNotification = async () => {
      const { status } = await Notifications.getPermissionsAsync()
      let finalStatus = status

      if (finalStatus !== 'granted') {
        const { status }= await Notifications.requestPermissionsAsync()
        finalStatus= status
      }
      if (finalStatus !== 'granted') {
        Alert.alert("Permission", "Push notification need appropiate permissions", [
          { text: "Okay", style: "destructive", onPress: resetInputHandler },
        ]);
        
        return;
      }
      
      // this function will fetch the push token for device whie is unique for every device
      const PushTokenData = await Notifications.getExpoPushTokenAsync()
      console.log(PushTokenData)
      // we will store that token into the database and then when we want to send push notification we will fetch the token and send the notification to the user 

      // Configuring for android 
      if (Platform.OS==='android') {
        Notifications.setNotificationChannelAsync('default', {
          name: 'default',
          importance: Notifications.AndroidImportance.DEFAULT  // ye manuplate krna 
        })
      }
    }

    configurePushNotification()
  },[])

                                            
  useEffect(() => {   //  step 7 add this effect  local+ push ( done with local )
    // * Ye wala function jb trigger ho ga jb notification receiceive ho jaa a gi 
    const subscription1 = Notifications.addNotificationReceivedListener((notification) => {
       console.log("Notification is received successfully")
       console.log(notification.request.content.data.userName) // consoling notifi obj
    })

    // Ye wala function jb trigger ho ga jb notification pr user tap kry ga 
    const subscription2 = Notifications.addNotificationResponseReceivedListener((response) => {
      console.log("Notification is response received successfully")
      // aur yahan hm apni logic likh skty 
      console.log(response.notification.request.content.data.userName)
    })

    return () => {
      subscription1.remove()
      subscription2.remove()
    }
  },[])

  const sheduleNotificationsHandler = () => {
    console.log("hello")  // yahan pr dosra content 

//
    const user = "ali"
    Notifications.scheduleNotificationAsync(     // step 5 step for local 
      {
        content:{
          // sound: "./assets/notifiSound.wav", // .wav   isko baad mn daikhta
          // badge:"logoo.png",
          title: "Wrong",
          body: `You are very Allah hu akbar ${user}  `,
          data: { userName: "Ali" },
          
        },
        trigger: {
          
          seconds: 5,
          date: "",
          day:["monday", '']
          // repeats: true,
        }
      }

    )
  }
  
  // step 9 push notification step use fcm apns or this expo 
  // sending notification using frontend instead of backend 
  // but we will use backend code in the real world 
  const sendPushNotificationHandler = () => {
    // sending notification using using expo http/2 which is basic if we dont have anybackend  we can also use FCM and Apns 
    fetch('https://exp.host/--/api/v2/push/send',
      {
        method: 'POST',
        headers: {
        //   host: exp.host,
        // accept: application/json,
        // accept-encoding: gzip, deflate,
        'content-type': 'application/json'
          
        },
        body: JSON.stringify({
          to: '',
          title: 'Test - Sent from device',
          body:'This is a test'
          
        })
        
    })
  }

  return (
    <View style={styles.container}>
          {/*  step 4 attach the button to shedule the notification local step for local */}
      <Button title='remind me after 5 seconds' onPress={sheduleNotificationsHandler}></Button>  
      {/* step 10 attach the button to send push nofification  */}
          <Button title='Send Push Notification' onPress={sendPushNotificationHandler}></Button>        
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});