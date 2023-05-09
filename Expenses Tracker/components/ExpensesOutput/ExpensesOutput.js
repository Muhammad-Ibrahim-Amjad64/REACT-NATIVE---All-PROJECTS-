import { StyleSheet, Text, View,useWindowDimensions } from 'react-native';
 // dimension step 6 jo steps expense form mn kia wahi yahan 
import { GlobalStyles } from '../../constants/styles';
import ExpensesList from './ExpensesList';
import ExpensesSummary from './ExpensesSummary';

function ExpensesOutput({ expenses, expensesPeriod, fallbackText }) {
  let content = <Text style={styles.infoText}>{fallbackText}</Text>;

  if (expenses.length > 0) {
    content = <ExpensesList expenses={expenses} />;
  }

  const { height, width } = useWindowDimensions()
  
  let paddingHorizontal = width < 380 ? 12 : 24;
  let paddingTop = width < 380 ? 12 : 24;
  // let  paddingHorizontal=24
  // let paddingTop= 24

  if (width > 500) {
     paddingHorizontal= 12
    paddingTop=12
    
  }

  const dimensionStyles = {
    paddingHorizontal
    ,paddingTop
 
  }

  return (
    <View style={[styles.container, dimensionStyles]}>
      <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
      {content}
    </View>
  );
}

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary700,
  },
  infoText: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 32,
  },
});
