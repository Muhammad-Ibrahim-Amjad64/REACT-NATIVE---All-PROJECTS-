// ipconfig to get the ip of your device
// node backend step 1  npm init
// node backend step 2  npm i express joi mongoose  //"^13.1.0" joi ver


const express = require('express') //  node backend step 3
const expenses = require('./routes/expenses') // node backend step 11
const mongoose = require ("mongoose"); // node backend 17
const app = express()  //  node backend step 5

 // node backend 18 connect to the mongodb database
mongoose.connect("mongodb://localhost/expenses")
    .then(console.log("successfully connected to expenses db"))
    .catch((error)=>{console.log("failed to connect",error)}) 


app.use(express.json()) //  node backend step 6


//your api template here node backend step 9

app.use('/tracking/expenses', expenses)

//--------------------------------------------------------


const port = process.env.PORT || 5000  //  node backend step 7


// node backend step 8 
app.listen(port, ()=> {console.log(`listening on port ${port}`)});
