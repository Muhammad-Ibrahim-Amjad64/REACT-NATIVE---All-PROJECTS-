// $env:DEBUG='app:debug'
const debug = require('debug')('app:startup'); 


const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/practicedb")
    .then(()=>{console.log("connected to mongodb")})
    .catch((error)=>{debug('CAN NOT CONNECT ',error)})

//uper def di ha 
const courseSchema =  new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date:{type:Date, default:Date.now},
    isPublished: Boolean 
    // date : Date    ye agar date user se dl wani ha 
});

// to  create a class (like course ) we need to compile this schema into a model 


const Course = mongoose.model('Course', courseSchema);
async function AddNewCourse(){

    try {
        
        const course = new Course({
            name: "java course",
            author: "nabiha",
            tags: ['java','frontent'],
            isPublished: true
            
        })
        
        // Once we have a schema we need to compile that into model which gives usa class
        
        //saving 
        const result = await course.save()
        console.log(result);
        
    } catch (error) {
        console.log(error)
        
    }


}
// TO add new course  in course collection in mongodb database call that function (post)
// AddNewCourse();-------------

// gettng courses from courses collecton in mongodb 
// * Empty find() method will retrive all the documents of that class
// * We can also apply filter find() ke andar key val pairs daal kr find({author:ibrahim})
// * We can alse sort our documents  .sort()
// * We can also set the limit on items to be reterived .limit()
// * We can also select specfic properties of the document to be reterived (yani document mn sirf name rterive ho etc )  .select()
async function getCourses() {
    const courses = await Course
        .find({author:/^ibrahim/i}) 
        // .or([{author:"ibrahim"},{isPublished:true}])
        // .and([{author:"ibrahim"},{isPublished:true}])
        // 1 means in assending order and -1 means in decending order
        .sort({name : 1 })
        .limit(10)
        .select({name:1, author:1}) 
        // .count() 
        
        
    // const courses = await Course.find({name: "node course", author:"ibrahim"})
    console.log(courses);
    
}

// to get courses
// getCourses(); ___

//APPROACH-------------------------------------------Quary first approach (this approach is useful when you receive input from the client and you wanna make sure that update is a valid operation
// For example we can set the business rules to stop updations like if the course is published then unable to update ya time limit ke 15 din se phalay update krn allow nai  like the code below )

// * FindById()
// * Modify its properties 
// * save()
async function updateCourse(id) {
    // find by id
    const course = await Course.findById(id)
    if (!course) {
        return;
        
    }

    // if business rule condition ke agar course published tou return 
    if (course.isPublished===true) {
        return;

        
    }
    course.author="syeda nabiha ibrahim khan";  // ye ; lagana na bholna 

    const result = await course.save()
    console.log("updated......",result)

}
// for updating quary first 
// updateCourse("62d037e489aad1e277d53032");


//APPROACH-------------------------------------------Update first approach 

// We will use this approach when we will not receive input from the client and you just want to update a document directly from mongodb database

// * Update directly 
// * optionally get the updated object 



async function updateCourseUpdateFirstApproach(id) {
    // const result = await Course.updateMany({_id:id},{$set:{
    //     author:"syeda nabiha"
    // }});

    // We can update multiple files by adding a generic filter like this
    // const course = await Course.updateMany({isPublished:true},{}) // this will update all courses that matches that filter

    // IF you want to get the updated object then use find wala method . this will return an object before updation  
    // const result = await Course.findByIdAndUpdate(id,{$set:{
    //     author:"syeda nabiha jamali "
    // }, })
    // console.log(result); 

    // this method will return object  method after updation 
    const result = await Course.findByIdAndUpdate(id,{$set:{
        author:"syeda nabiha jamal :)"
    },},{new:true})
    console.log(result); 

    
}

updateCourseUpdateFirstApproach("62d037e489aad1e277d53032");



//
async function deleteCourse(id) {
    // we can apply filter to delete courses  in deleteone ({})
    // const result = await Course.deleteOne({_id: id})  // it will delete the 1st occurance of the eleemnt that matches the filter  course with that id 
    // const result = await Course.deleteMany({_id: id}) 
    // if you want to get the element the element that you deleted use 
    const result = await Course.findByIdAndRemove(id);
    console.log(result);   // upper wala method bs delete krta ha ye agar deleted item frontedn pe show krwana hua tou ye us ekarian gain   
   
    
}
// console.log("yaha aya");
// deleteCourse("62cf60518f2a3c015ec83e35");

