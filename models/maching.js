const mongoose = require('mongoose');
const mashingSchema = mongoose.Schema({
    _id:String,
    manager: String,
    date: Date,
    target: Number,
    hour: String
})
const Maching = mongoose.model('maching', mashingSchema);
module.exports = Maching;