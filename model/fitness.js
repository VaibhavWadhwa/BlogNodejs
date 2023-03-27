const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const fitnessSchema = new Schema({
    id :  Number,
    url : String,
    type : String,
    date : String,
    about : String,
    title : String,
})

const Fitness = mongoose.model('Fitness',fitnessSchema);

module.exports = Fitness;