import { Image, ImageBackground, Pressable, StyleSheet, Text, View } from "react-native";
// import { Drawer } from "react-native-paper";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

function CustomDrawer(props) {
  return (
    <View style={styles.container}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: "#131313" }}
          >
              <ImageBackground source={require("../../assets/background.png")} style={{ padding: 30 }}>
                  <Image source={require("../../assets/Logo.jpg")} style={styles.image}></Image>
                  <Text style={styles.title}>UBIT Community</Text>
                </ImageBackground>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </View>
  );
}

export default CustomDrawer;

const styles = StyleSheet.create({
    image: {
        height: 60,
        width: 60,
        borderRadius: 14,
        
    },
  container: {
    flex: 1,
    },
    title: {
        color: "#ededed"
        , fontWeight: "bold",
        fontSize:20
}
});
