const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bannerSchema = new Schema({
    id :  Number,
    url : String,
    type : String,
    date : String,
    title : String,
})

const Banner = mongoose.model('Banner',bannerSchema)


module.exports = Banner;