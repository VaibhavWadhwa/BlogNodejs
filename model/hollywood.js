const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const hollywoodSchema = new Schema({
    id :  Number,
    url : String,
    type : String,
    date : String,
    about : String,
    title : String,
})

const Hollywood = mongoose.model('Hollywood',hollywoodSchema);


module.exports = Hollywood;