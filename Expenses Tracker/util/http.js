/// Axios CRUD operations step paste this file in which you want to fetch (wat ot perform crud operations)
// Axios CRUD step 1 

import axios from 'axios';

const BACKEND_URL =
  'https://expense-tracker-b1cfb-default-rtdb.firebaseio.com';
// Axios CRUD step 1 post
export async function storeExpense(expenseData) {
  const response = await axios.post('https://expense-tracker-b1cfb-default-rtdb.firebaseio.com/expenses.json', expenseData);
  const id = response.data.name;   //saving the firebase id name property is the id in firebase
  

  return id;
}
// Axios CRUD step 1 get  
export async function fetchExpenses() {
  const response = await axios.get('https://expense-tracker-b1cfb-default-rtdb.firebaseio.com/expenses.json');

  const expenses = [];

  for (const key in response.data) {
    const expenseObj = {
      id: key,
      amount: response.data[key].amount,
      date: new Date(response.data[key].date),
      description: response.data[key].description
    };
    expenses.push(expenseObj);
  }

  return expenses;
}
// Axios CRUD step 1 update
export function updateExpense(id, expenseData) {
  return axios.put(BACKEND_URL + `/expenses/${id}.json`, expenseData);
  // update krne ke lia jisko update krna ha uski id in the url as it was a rest api 
}
// Axios CRUD step 1 delete 
export function deleteExpense(id) {
  return axios.delete(BACKEND_URL + `/expenses/${id}.json`);
}


