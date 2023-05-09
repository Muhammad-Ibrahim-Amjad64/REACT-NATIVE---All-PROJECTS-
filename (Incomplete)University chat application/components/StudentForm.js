// step 1  date time picker   npm i @react-native-community/datetimepicker
import { useState } from "react"; // step 2 date time picker

import {
  Modal,
  StyleSheet,
  Text,
  View,
  ScrollView,
  useWindowDimensions,
  KeyboardAvoidingView,
  Platform,
  // TextInput
} from "react-native"; // dimesions step 1

import Input from "./TaskForms/Input";
import SubmitButton from "./SubmitButton";
// import { getFormattedDate } from '../../util/date';
import { GlobalStyles } from "../constants/colors";
;



function StudentForm({ submitButtonLabel, onCancel, onSubmit, defaultValues }) {


  function submitHandler() {
   
  }


  const { height, width } = useWindowDimensions();


  let marginTop = width < 380 ? 20 : 40;
  let padding = width < 380 ? 3 : 6;

  if (width > 500) {
    marginTop = 20;
    padding = 3;
  }
  const dimensionStyles = {
    padding: padding,
    marginTop: marginTop,
  };

  return (
    
    <Modal  style={styles.modal} animationType={"fade"}>

    <ScrollView style={styles.screen}>
    
      <KeyboardAvoidingView style={styles.screen}>
        <View style={[styles.form, dimensionStyles]}>
          <Text style={styles.title}>Set your Profile</Text>
          <View style={styles.inputsRow}>
            <Input
              style={styles.rowInput}
              label="Name"
              //   invalid={!inputs.amount.isValid}
              textInputConfig={{
                // keyboardType: "decimal-pad",
                // onChangeText: inputChangedHandler.bind(this, 'amount'),
                // value: inputs.amount.value,
              }}
              />
            <Input
              style={styles.rowInput}
              label="Email"
             
              textInputConfig={{
                keyboardType: "decimal-pad",

           
              }}
              />

       
          </View>
          <Input
            label="Description"
           
            textInputConfig={{
              multiline: true,
     
            }}
            />
       
          <View style={styles.buttons}>
            <SubmitButton
              style={styles.button}
              mode="flat"
              onPress={() => {
                onCancel();
              }}
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
</Modal>
  );
}

export default StudentForm;

const styles = StyleSheet.create({
  modal: {
    flex:1
  },
  screen: {
    flex: 1,
  },
  form: {
    marginTop: 40,
    borderColor: "black",
    borderWidth: 1,
    padding: 5,
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
