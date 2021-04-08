const mongoose = require('mongoose');

const tutoSchema = mongoose.Schema (
   { title: String ,
    description : String},
    {
        versionKey : false , 
        timestamps : true
    }
);

module.exports = mongoose.model('tuto',tutoSchema);