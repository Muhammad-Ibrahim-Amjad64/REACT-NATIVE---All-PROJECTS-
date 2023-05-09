// Using SQLite database step 1
// npx expo install expo-sqlite


import * as SQLite from "expo-sqlite"   // Using SQLite database step 2

 // creating or opening the database file Using SQLite database step 3
const database = SQLite.openDatabase('places.db')  



// Using SQLite database step 4 using transaction project to execute quesies and initialing tables
export const init = () => {

    const promise = new Promise((resolve,reject) => {
        database.transaction((tx) => {
          tx.executeSql(
            `CREATE TABLE IF NOT EXISTS places (
                id INTEGER PRIMARY KEY NOT NULL,
                title TEXT NOT NULL,
                imageUri TEXT NOT NULL,
                address TEXT NOT NULL,
                lat REAL NOT NULL,
                lng REAL NOT NULL
              )`,
            [],
            () => {
              resolve()    // success func
            },
            (_, err) => {    // reject func
              reject(err)
            }
          )
        })
      })
      return promise
    
}

// Adding places into the SQLite database  // Using SQLite database step 9
export function insertPlace(place) {
    const promise = new Promise((resolve, reject) => {
      database.transaction((tx) => {
        tx.executeSql(
          `INSERT INTO places (title, imageUri, address, lat, lng) VALUES (?, ?, ?, ?, ?)`,
          [
            place.title,
            place.imageUri,
            place.address,
            place.location.lat,
            place.location.lng,
          ],
            (_, result) => {      // success
              console.log(result)
            resolve(result);
          },
          (_, error) => {     // fail
            reject(error);
          }
        );
      });
    });
  
    return promise;
  }
  

  