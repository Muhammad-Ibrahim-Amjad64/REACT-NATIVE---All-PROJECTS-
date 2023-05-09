import { FlatList } from 'react-native';

import ExpenseItem from './ExpenseItem';
// update krne ke lia expense mn navige krte hua id le aa a 
function renderExpenseItem(itemData) {
  return <ExpenseItem {...itemData.item} />;
}

function ExpensesList({ expenses }) {
  return (
    <FlatList
      data={expenses}
      renderItem={renderExpenseItem}
      keyExtractor={(item) => item.id}
    />
  );
}

export default ExpensesList;
