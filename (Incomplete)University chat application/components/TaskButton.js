import { Pressable, StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../constants/colors";
import { Text as Textp } from "react-native-paper";
import { FontAwesome5 } from '@expo/vector-icons'; 

function TaskButton({ onPress, style, title, body }) {
  return (
    <View style={style}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <View style={styles.ButtonContainer}>
          <View style={[styles.button]}>
            <Textp variant="titleLarge">{title}</Textp>
            <Textp variant="bodyMedium">{body}</Textp>
                  </View>
                  <View style={{marginHorizontal:15}}><FontAwesome5 name="greater-than" size={24} color="#07454d" /></View>
        </View>
      </Pressable>
    </View>
  );
}

export default TaskButton;

const styles = StyleSheet.create({
    ButtonContainer: {
        flexDirection: "row",
        justifyContent:"space-between",  borderBottomColor: "grey",
        borderBottomWidth: 2,
        // backgroundColor: "#ebffff",
        
        backgroundColor: "#ececec",
        alignItems: "center",
        // borderRadius:
    },
  button: {

    padding: 8,
    
   
  },

  buttonText: {
    color: "white",
    textAlign: "center",
  },

  pressed: {
    opacity: 0.75,
    backgroundColor: GlobalStyles.colors.primary100,
    borderRadius: 4,
  },
});
