const mongoose = require("mongoose");


//schema

const userSchema= new mongoose.Schema({

first_Name:{
type:String,
required:true,

},

last_Name:{
type:String,



},

email:{


type:String,
required:true,
unique:true,
},

jobTitle:{

type:String,

},
gender:{

type:String,


},


},{timestamps:true})// it track created and updated 





const User= mongoose.model("user",userSchema);
 


module.exports = User;

