const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const technologySchema = new Schema({
    id :  Number,
    url : String,
    type : String,
    date : String,
    about : String,
    title : String,
})

const Technology = mongoose.model('Technology',technologySchema)

module.exports = Technology