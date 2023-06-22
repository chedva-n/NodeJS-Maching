const mongoose = require('mongoose');
const mashingSchema = mongoose.Schema({
    _id:Number,
    manager: String,
    password:String,
     date: Date,
    target: Number,
    hour: String
})
const Maching = mongoose.model('maching', mashingSchema);
module.exports = Maching;