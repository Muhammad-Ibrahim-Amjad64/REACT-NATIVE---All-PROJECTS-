import { useContext, useLayoutEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';

import ExpenseForm from '../components/ManageExpense/ExpenseForm';
import ErrorOverlay from '../components/UI/ErrorOverlay';
import IconButton from '../components/UI/IconButton';
import LoadingOverlay from '../components/UI/LoadingOverlay';
import { GlobalStyles } from '../constants/styles';
import { ExpensesContext } from '../store/expenses-context';
import { storeExpense, updateExpense, deleteExpense } from '../util/http';  // axios CRUD step 4 post get delete 

function ManageExpense({ route, navigation }) {
  // Managing Loading step 5 
  const [isSubmitting, setIsSubmitting] = useState(false);  // Axios CRUD step 2 post
  const [error, setError] = useState();    // Axios CRUD step 3 post
// handling errors step 4
  const expensesCtx = useContext(ExpensesContext);

  // Axios CRUD step 2 update getting the id of the expense to be updated  
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  const selectedExpense = expensesCtx.expenses.find(
    (expense) => expense.id === editedExpenseId
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense',
    });
  }, [navigation, isEditing]);

  // Axios CRUD step 3 delete add this function to delete the expense 
  async function deleteExpenseHandler() {
    // Managing Loading step 6
    setIsSubmitting(true);
    try {
      await deleteExpense(editedExpenseId);
      expensesCtx.deleteExpense(editedExpenseId);
      navigation.goBack();
    } catch (error) {
      // handling errors step 5
      setError('Could not delete expense - please try again later!');
      setIsSubmitting(false);
    }
  }

  function cancelHandler() {
    navigation.goBack();
  }
// Managing Loading step 7
  async function confirmHandler(expenseData) {   // on confirm of form
     // Axios CRUD step 5 post  add this to the form confirm 
    setIsSubmitting(true);
    try {
      // Axios CRUD step 3 update pass the id of the object that you want to update
      if (isEditing) {
        expensesCtx.updateExpense(editedExpenseId, expenseData);
        await updateExpense(editedExpenseId, expenseData);
      } else {
        const id = await storeExpense(expenseData);  // it is posting new in firebase
        expensesCtx.addExpense({ ...expenseData, id: id });  // new posted ki id in context mn use 
      }
      navigation.goBack();
    } catch (error) {
      // handling errors step 6
      setError('Could not save data - please try again later!');
      setIsSubmitting(false);
    }
  }
  // handling errors step 7 done
  if (error && !isSubmitting) {
    return <ErrorOverlay message={error} />;
  }
  
  // Managing Loading step 8 
  if (isSubmitting) {
    return <LoadingOverlay />;
  }

  return (
    <View style={styles.container}>
      <ExpenseForm
        submitButtonLabel={isEditing ? 'Update' : 'Add'}
        onSubmit={confirmHandler}
        onCancel={cancelHandler}
        defaultValues={selectedExpense}
      />
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="trash"
            color={GlobalStyles.colors.error500}
            size={36}
            onPress={deleteExpenseHandler}   // Axios CRUD step 2 delete define a button to delete 
          />
        </View>
      )}
    </View>
  );
}

export default ManageExpense;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: 'center',
  },
});
