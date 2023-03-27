const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bollywoodSchema = new Schema({
    id :  Number,
    url : String,
    type : String,
    date : String,
    about : String,
    title : String,
})

const Bollywood = mongoose.model('Bollywood',bollywoodSchema);

module.exports = Bollywood;