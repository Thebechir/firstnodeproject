const mongoose = require('mongoose');

const userdetailsSchema = mongoose.Schema (
{ 
    adress: String ,
    zipcode : Number,
    city : String,

},
{
    versionKey : false , 
    timestamps : true
}
   

);

module.exports = mongoose.model('userD',userdetailsSchema);