// step 1  date time picker   npm i @react-native-community/datetimepicker
import { useState } from "react"; // step 2 date time picker

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  useWindowDimensions,
  KeyboardAvoidingView,
  Platform,
  // TextInput
} from "react-native"; // dimesions step 1

import Input from "./Input";
import SubmitButton from "../SubmitButton";
// import { getFormattedDate } from '../../util/date';
import { GlobalStyles } from "../../constants/colors";
// import { TextInput } from "react-native-gesture-handler";
import Datetimepicker from "@react-native-community/datetimepicker";
import { IconButton } from "react-native-paper";

function DailyForm({ submitButtonLabel, onCancel, onSubmit, defaultValues }) {
    // step 3 date time picker add these states
    const [date, setDate] = useState(new Date()); // store date
    const [mode, setmode] = useState("date"); // mode switching between date and time
    const [show, setshow] = useState(false); // kisko show krwa na
    const [text, settext] = useState("Empty");

    

    // step 5 date time picker add this function
    const onChangeHandler = (event, selectedDate) => {
        console.log()
        // console.log( "ye time ha "+date.getTime().toLocaleString())
        const currentDate = selectedDate || date;
        // setshow(Platform.OS === "ios");
        setshow(false);
        // console.log(Platform.OS === "ios")
        setDate(currentDate);

        let tempDate = new Date(currentDate);
        let formatedDate =
        tempDate.getDate() +
        "/" +
        (tempDate.getMonth() + 1) +
        "/" +
        tempDate.getFullYear();
        
        let formattedTime =
        "Hours" + tempDate.getHours() + " | Minutes" + tempDate.getMinutes();
        
        
        settext(formatedDate + "|" + formattedTime);
        props.selectedDate(currentDate);
        

    };

    // step 4 date time picker add this function
    const showModeHandler = (currentMode) => {
        setshow(true);
        setmode(currentMode);
    };

    function submitHandler() {
        const TaskObject = {
            id: Math.random() * 10000 + "title",
            title: "Syeda Nabiha jamali",
            description: "mera naam nabiha ha ",
            type: "one",
            sehedule: new Date(date)
            
        }
        
        onSubmit(TaskObject);
    }

    const { height, width } = useWindowDimensions(); // dimensions step 2

    // const marginTop = height < 380 ? 50 : 100;

    console.log(width);
    console.log(height);

    // for potrait mode agar device chooti hogi tou ye styles change hn gy dynamically
    // dimension step 4
    let marginTop = width < 380 ? 20 : 40;
    let padding = width < 380 ? 3 : 6;

    // dimension step 5
    // for  landscape
    if (width > 500) {
        marginTop = 20;
        padding = 3;
    }
    const dimensionStyles = {
        padding: padding,
        marginTop: marginTop,
    };
    
    const onCancelHandler = () => {
        onCancel()
    }
  // [styles.rootContainer, { marginTop: marginTop }]
  return (
    // dimesions step 3 scrollview and keyboard avoiding view hr form ke sath ye khail krna ha
    <ScrollView style={styles.screen}>
      <Text>{text}</Text>
      {/* // step 7 date time picker final step add this date time picker  */}
      {show && (
        <Datetimepicker
          value={date}
          testID={"dateTimePicker"}
          mode={mode}
          // is24Hour={false}
          display={"default"}
          onChange={onChangeHandler}
        ></Datetimepicker>
      )}

      <KeyboardAvoidingView style={styles.screen}>
              <View style={[styles.form, dimensionStyles]}>
                  
          <Text style={styles.title}>Daily Task</Text>
          <View style={styles.inputsRow}>
            <Input
              style={styles.rowInput}
              label="Title"
              //   invalid={!inputs.amount.isValid}
              textInputConfig={
                {
                  // onChangeText: inputChangedHandler.bind(this, 'amount'),
                  // value: inputs.amount.value,
                }
              }
            />
            <Text>Reminding Time</Text>
            <View style={{flexDirection:"row", justifyContent:"space-between",alignItems:"center"}}>
              <Text>selected time</Text>
              <IconButton
                icon="clock"
                iconColor={"black"}
                containerColor={"grey"}
                size={25}
                onPress={() => showModeHandler("time")}
              />
            </View>

            {/* // step 6 date time picker add these buttons */}
            <SubmitButton style={styles.button} onPress={() => showModeHandler("date")}>
              Date Picker
              {submitButtonLabel}
            {/* </SubmitButton>
            <SubmitButton
              style={styles.button}
              onPress={() => showModeHandler("time")}
            >
              Time Picker
              {/* {submitButtonLabel} */}
            </SubmitButton>
          </View>
          <Input
            label="Description"
            // invalid={!inputs.description.isValid}
            textInputConfig={{
              multiline: true,
            //   autoCapitalize: 'none'
              // autoCorrect: false // default is true
              //   onChangeText: inputChangedHandler.bind(this, 'description'),
              //   value: inputs.description.value,
            }}
          />
          {/* {formIsInvalid && (
        <Text style={styles.errorText}>
          Invalid input values - please check your entered data!
        </Text>
      )} */}
          <View style={styles.buttons}>
            <SubmitButton
              style={styles.button}
              mode="flat"
            onPress={onCancelHandler}
            >
              Cancel
            </SubmitButton>
            <SubmitButton style={styles.button} onPress={submitHandler}>
              Confirm
              {/* {submitButtonLabel} */}
            </SubmitButton>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

export default DailyForm;

const styles = StyleSheet.create({
  screen: {
        flex: 1,
  
  },
  form: {
    marginTop: 40,
    // borderColor: "black",
    // borderWidth: 1,
      padding: 5,
      margin: 10,
    // backgroundColor:"white"
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
    marginVertical: 24,
    textAlign: "center",
  },
  inputsRow: {
    flexDirection: "column",
    justifyContent: "space-between",
  },
  rowInput: {
    flex: 1,
  },
  errorText: {
    textAlign: "center",
    color: GlobalStyles.colors.error500,
    margin: 8,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
});
