const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//creating a schema
var userSchema = new Schema({
    name:String,
    age:Number,
    images:{
        data:Buffer,
        contentType:String
    }
}) 

//creating a model
let User = mongoose.model('User',userSchema);

module.exports = User