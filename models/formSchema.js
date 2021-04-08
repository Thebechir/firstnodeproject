const mongoose = require('mongoose');

const formSchema = mongoose.Schema (
{ 
    firstname: String ,
    lastname : String,
    email : String,
    password : String,
    age : Number

},
{
    versionKey : false , 
    timestamps : true
}
   

);

module.exports = mongoose.model('form',formSchema);





