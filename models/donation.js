const mongoose = require('mongoose');

//תרומה
const donationSchema = mongoose.Schema({
    _id:Number,
    donate_name: String,
    sum: Number,
})
const Donation = mongoose.model('donations', donationSchema);
module.exports=Donation;