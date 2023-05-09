// TYPES THAT WE CAN STORE IN SCHEMA 
// ------------------------------------


// String 
// Boolean 
// Number 
// Date 
// Buffer (which we use for storing binary data)
// ObjectID   ( which is fpr assigning unique identifier)
// []  (array)
// Array





// SCHEMA SHORTCUTS FOR STRINGS AND NUMBERS  
//--------------------------------------------------------------------------

// FOR BOTH 
// __________________________

// * get: when we retrieve certian properties from the databes then that getter function is called 
// get:()=>{}

// for implemantation go tp line 1100 of 8
// set:(v)=>Math.round(v),
// get:(v)=>Math.round(v), 

// * set: when we set certain properties then that setter function is called 
// set:()=>{} 

// * requied:true
// * default:Date.now
// *  isAsync:true    (for async validator )

// *  validate:{validator:function(v){//-----------------------
            // if v has a value and its length is greater  than 0 then it is valid 
            // return v && v.length> 0;


// * ( async validator )

// validate:{validator:function (v) {
    // return new Promise((resolve) => {
//         setTimeout(() => {
//           // Some async work , in real real world i=this result is calculated by some async works etc but here we assigning directly 
//         const result = v && v.length > 0;
//         resolve(result);
//       }, 4000);
//     });
//   },message:"course should have atleast 1 tag" 
// } 

// FOR REFERENCING
//------------------ 
// JB SCHEMA DEFINE KARAIN GAIN TOU 1 TO 1 ESTABLISH KRNY KE LIA YE  KARAIN GAIN 

// * type: mongoose.Schema.Types.ObjectId, ++
// *  ref : 'Author' ++

// const Course = mongoose.model('Course', new mongoose.Schema({
//     name: String,
//     author:{
//        // author ko object id se course se connect kia jaa rha ha 
//       type: mongoose.Schema.Types.ObjectId,
//       ref : 'Author'    // js se id aa rhi ha , name of teh targeted collection 
//     }
//   }));


// STRINGS
//_______________________


// * minlength   : to specify the minlength of strings
// * maxlength   : to specify the maxlength of strings
// * match : to specify a regular expression to limit input etc 
// * enum : to specify a valid string in the  for example category mn sirf 3 category ke ilawa ani daalni etc 

// * lowercase :  Converts all characters of the strings to lowercase
// * uppercase :  Converts all character of th strings to uppercase
// * trim : removes padding from the strings 

// INTEGERS
//_______________________


// * min : to set minimum num
// * max : to set max number 



// MONGOOSE  GET METHOD DIFFERENT PROPERTIES
//------------------------------------------ 


// error line by line printing watch line 962 of 8 



// *  find(): method will retrive all the documents of that class
// * We can also apply filter find() ke andar key val pairs daal kr
//  find({author:ibrahim})

// * .sort() : We can alse sort our documents  

// * .limit() :  We can also set the limit on items to be reterived

// * .select(): We can also select specfic properties of the document to be reterived (yani document mn sirf name rterive ho etc )

// * .count()   (by applying this we will only reterive number of documents not the documents )


// * .populate('author' , 'name -_id')  // hmn ne schema mn author ki ref se object id li .ab ppulate method author collection mn operation perform kry ga /// isko find ke neecha hona cha ha ya // EXCLUDES ID INCLUDES NAME PROPERTY ONLY 
// populate multiple times bhi kr skty hain 
// .populate('categorey', 'categorey_name')  ++ 


// * eq (equal to =)
// * ne (not equal to !=)
// * gt (greater than >)
// * gte (greater than or equal to >=)
// * lt (less than <)
// * lte (less than or equal to <=)
// * in  (same thimgs multiple times )  (jaisy sql mn hota ha )
// * nin (not in )
// or 
// and 


// *  ^ means string starts with    
.find({author:/^Mosh/}) //(starts with mosh)
// *  $ means string end with
   .find({author:/hamadani$/i})// (ends with hamdani)
// *  i case insensetive  (now both uppercase and lower case are allowed )
// *   .*  represents zero or more characters 
 .find({author:/.*Mosh.*/i})// (contains mosh is end or start does not matters)

 



 




// MONGO DB UPDATE OPERATORS
//-----------------------------
// https://www.mongodb.com/docs/manual/reference/operator/update/  (all operators link )


// $currentDate
// Sets the value of a field to current date, either as a Date or a Timestamp.

// $inc
// Increments the value of the field by the specified amount. --(fb likes eg (can also decrement by passing -ve value))

// $min
// Only updates the field if the specified value is less than the existing field value.

// $max
// Only updates the field if the specified value is greater than the existing field value.

// $mul
// Multiplies the value of the field by the specified amount.

// $rename
// Renames a field.

// $set
// Sets the value of a field in a document.

// $setOnInsert
// Sets the value of a field if an update results in an insert of a document. Has no effect on update operations that modify existing documents.

// $unset
// Removes the specified field from a document.




const result = await Course.findByIdAndUpdate(id,{$set:{
    author:"syeda nabiha jamal :)"
},},{new:true})
console.log(result); 