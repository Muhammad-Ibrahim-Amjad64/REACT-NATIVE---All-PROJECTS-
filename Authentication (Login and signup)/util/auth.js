// authentication * Step 10 install the axios and in util add this file 

import axios from 'axios';

// API key is from firebase console -> project settings -> general -> web-api-key
const API_KEY = 'AIzaSyAa-i7ppUboiyI5UzwMIcu078UK0t9ffog';

async function authenticate(mode, email, password) {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;

  const response = await axios.post(url, {
    email: email,
    password: password,
    returnSecureToken: true,
  });

  const token = response.data.idToken;

  return token;
}

export function createUser(email, password) {
  return authenticate('signUp', email, password);
}

export function login(email, password) {
  return authenticate('signInWithPassword', email, password);
}





// Note 
// The URL is of firebase rest auth check the below auth and navigate to 
// Signup with email and password 

// https://firebase.google.com/docs/reference/rest/auth#section-create-email-password