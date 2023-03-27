const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const placesSchema = new Schema({
    id :  Number,
    url : String,
    type : String,
    date : String,
    about : String,
    title : String,
})

const Places = mongoose.model('Places',placesSchema);


module.exports = Places;