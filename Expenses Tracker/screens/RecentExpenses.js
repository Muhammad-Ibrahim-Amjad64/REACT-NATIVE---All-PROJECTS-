import { useContext, useEffect, useState } from 'react';

import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import ErrorOverlay from '../components/UI/ErrorOverlay';
import LoadingOverlay from '../components/UI/LoadingOverlay';
import { ExpensesContext } from '../store/expenses-context';
import { getDateMinusDays } from '../util/date';
import { fetchExpenses } from '../util/http';  // axios CRUD get step 4 

function RecentExpenses() {
  // Managing Loading step 2
  const [isFetching, setIsFetching] = useState(true);  // Axios CRUD step 3 get 
  const [error, setError] = useState(); // handling errors step 2

  const expensesCtx = useContext(ExpensesContext);
// Axios CRUD step 2 get add this use effect function and fetch expenses in it 
  useEffect(() => {
    async function getExpenses() {
      // Managing Loading step 3
      setIsFetching(true);
      try {
        const expenses = await fetchExpenses();
        expensesCtx.setExpenses(expenses);
      } catch (error) {
        console.log(error.message)
        // handling errors step 3
        setError('Could not fetch expenses!');
      }
      setIsFetching(false);
    }

    getExpenses();
  }, []);
// handling errors step 3      error overlay mn button bhi add kr skte jisko press krne se error handlerfunction called in that ocmponent then that func will set the error to null (optional)
  if (error && !isFetching) {
    return <ErrorOverlay message={error} />;
  }
  
  // Managing Loading step 4 done for get aagy  manage expense mn implement kia ja rha for post delete and update 
  if (isFetching) {
    return <LoadingOverlay />;
  }

  const recentExpenses = expensesCtx.expenses
    .filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);

    return expense.date >= date7DaysAgo && expense.date <= today;
    });
  
  const asliExpenses = expensesCtx.expenses
// console.log(asliExpenses)
  return (
    <ExpensesOutput
      expenses={recentExpenses}
      // expenses={asliExpenses}
      expensesPeriod="Last 7 Days"
      fallbackText="No expenses registered for the last 7 days."
    />
  );
}

export default RecentExpenses;
