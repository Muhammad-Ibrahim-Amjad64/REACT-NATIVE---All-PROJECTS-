// node backend step 19 make a folder model and define your model schemas

const mongoose = require("mongoose");
const Joi = require('jOi');

// node backend step 20 define the model of collection/schema
const Expense = mongoose.model("Expense", new mongoose.Schema({
    amount: {
        type: Number,
        required:true ,
    },
    date:{ type:String,required:true},
    description:{required:true, type:String}
})

)

// node backend step 21 
const ValidateExpense = expense=>{

    const  schema={
        // name: Joi.string().max(50).min(3).required(),
        // phone: Joi.string().max(50).min(3).required(),
        // isGold: Joi.boolean()
        amount:Joi.required(),
        date:Joi.required(),
        description:Joi.required(),
        
        
    };

    return Joi.validate(expense,schema);


}

// node backend step 22
exports.validate = ValidateExpense;
exports.Expense = Expense;
