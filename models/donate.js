const mongoose = require('mongoose');

//מתרים
const donateSchema = mongoose.Schema({
 _id:Number,
 name:String,
 group:Number,
 target:Number

})
const Donate = mongoose.model('donates', donateSchema);
module.exports=Donate;