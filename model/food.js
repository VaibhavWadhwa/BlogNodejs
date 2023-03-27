const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const foodSchema = new Schema({
    id :  Number,
    url : String,
    type : String,
    date : String,
    about : String,
    title : String,
})

const Food = mongoose.model('Food',foodSchema);


module.exports = Food;