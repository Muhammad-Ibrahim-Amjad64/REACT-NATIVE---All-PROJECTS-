import { Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { GlobalStyles } from "../constants/colors";

// import { getFormattedDate } from '../../util/date';

function TaskItem({ title, description, date, type, time }) {
  const navigation = useNavigation();

  function expensePressHandler() {
    // navigation.navigate('ManageExpense', {
    //   expenseId: id
    // });
  }

  return (
    <Pressable
      onPress={expensePressHandler}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.expenseItem}>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>{title}</Text>
          <Text>{type}</Text>
        </View>
        <View style={styles.RemainderContainer}>
          <Text style={{ color: "white" }}>{time}</Text>
          <Text style={styles.textBase}>{date}</Text>
        </View>
        <View>
            <Text style={[styles.textBase, styles.description]}>
              {description}
            </Text>
          </View>
      </View>
    </Pressable>
  );
}

export default TaskItem;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75,
  },
  expenseItem: {
    padding: 12,
    marginVertical: 8,
    borderWidth: 1,
    borderColor:"#d7d7d7",
    // backgroundColor: "#dfdfdf",
    backgroundColor: "#ffffff",
   
    // backgroundColor: GlobalStyles.colors.primary500,
    flexDirection: "column",
    paddingHorizontal:20,
width:"100%",
    // width: 300,
    justifyContent: "space-between",
    // borderRadius: 6,
    elevation: 3,
    shadowColor: GlobalStyles.colors.gray500,
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
  },
  textBase: {
    color: "#959595",
    // color: GlobalStyles.colors.primary50,
  },
  description: {
    fontSize: 16,
    marginBottom: 4,
    // fontWeight: "bold",
  },
  amountContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    // backgroundColor: "white",
    // opacity:0.,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    minWidth: 80,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  amount: {
    color: GlobalStyles.colors.primary500,
    fontWeight: "bold",
  },
  RemainderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor:"#1e002f"
    // backgroundColor:"#363636"
  }
});
