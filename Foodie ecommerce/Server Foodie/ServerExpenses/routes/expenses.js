// node backend step 10 make a routes folder and start making apis
// node backend step 11 paste these 4 lines to use router 
const express = require("express");
const {validate,Expense} = require("../models/expenses") //node backend step 23 
const router = express.Router();
const Joi = require("jOi");
router.use(express.json());



const DUMMY_EXPENSES = [
    {
      id: "e1",
      description: "A pair of shoes",
      amount: 59.99,
      date: new Date("2021-12-19"),
    },
    {
      id: "e2",
      description: "A pair of trousers",
      amount: 89.29,
      date: new Date("2022-01-05"),
    },
    {
      id: "e3",
      description: "Some bananas",
      amount: 5.99,
      date: new Date("2021-12-01"),
    },
    {
      id: "e4",
      description: "A book",
      amount: 14.99,
      date: new Date("2022-02-19"),
    },
    {
      id: "e5",
      description: "Another book",
      amount: 18.59,
      date: new Date("2022-02-18"),
    },
    {
      id:"e6",
      description: "A pair of trousers",
      amount: 89.29,
      date: new Date("2022-01-05"),
    },
    {
      id: "e7",
      description: "Some bananas",
      amount: 5.99,
      date: new Date("2021-12-01"),
    },
    {
      id: "e8",
      description: "A book",
      amount: 14.99,
      date: new Date("2022-02-19"),
    },
    {
      id: "e9",
      description: "Another book",
      amount: 18.59,
      date: new Date("2022-02-18"),
    },
  ];



// node backend step 14 validaing with the help of joi (note this validating function is moved to the models OMITTED )



// node backend step 11 gettting all courses frm db
router.get("/", async(req,res)=>{
  //   console.log("yaha aya")
  // res.send(DUMMY_EXPENSES);
  try {
    const expenses = await Expense.find()
        // .find({name:"nabiha"}) // find ke andar query lik sakty hain
        // .sort({name:1})
        // .select({name:1}) // it will contain the properties that we want to return 
    // .limit(10)
        
    res.send(expenses);
    
} catch (error) {
    res.send(error.message)
    
}
  
  


})

// node backend step 11 getting with specific id 
router.get("/:id", (req, res) => {

    const expense = DUMMY_EXPENSES.find(expense=>expense.id===parseInt(req.params.id));
    if (!expense) {
        res.status(404).send("Invalid Expense not found sorry :) ");
        return;

        
    }
    res.send(expense);


})

// node backend step 12 deleting with id 
router.delete("/:id", async(req,res)=>{
    // find  -- if found delete -- return
  
  try {
    const result =  await Expense.deleteOne({ _id: req.params.id })
    res.send(result)  
   } catch (error) {
    res.send(error.message);
    return
   }

  // if (result === null) {

  //       res.status(404).send("Expense to be deleted was not found");
  //       return;   
  //   }
    
   

})

// node backend step 13 posting a new expense to the database 
router.post("/", async (req,res)=>{

    const {error} = validate(req.body);

    if (error) {
        res.status(400).send(error.details[0].message);
        console.log(error.details[0].message)
        return;   
  }
  // ye mongoos model wala expense
   const NewExpense = new Expense({
      //  id: DUMMY_EXPENSES.length + 1, // ab db id assign kry gi
       description: req.body.description,
       amount: req.body.amount,
       date: req.body.date 
  })
  
  // node backend step 25  send the newly added object in the response 
  try {
    const result = await NewExpense.save()
    res.send(result)  
   } catch (error) {
     res.send(error.message);
   }

})


// node backend step 15 updating the expense
router.put("/:id",async (req, res) => {
  // find by id => modify the properties => save 
    const editedExpense  = await Expense.findById(req.params.id)
  console.log("put ke andar aya")

    if (!editedExpense) {
        res.status(404).send("the categorey to be updated was not found");
        console.log("idhar aya")
        console.log(req.body)
        return;
    }
    const {error} = validate(req.body);

    if (error) {
        res.status(400).send(error.details[0].message);
        console.log("idhar aya joi")
        return;
        }
    editedExpense.amount = req.body.amount;
    editedExpense.description= req.body.description
    editedExpense.date = req.body.date

    try {
      const result = await editedExpense.save()
      res.send(result)  
     } catch (error) {
       res.send(error.message);
     }


})

// node backend step 16
module.exports= router ;

