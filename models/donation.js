const mongoose = require('mongoose');

//תרומה
const donationSchema = mongoose.Schema({
    name:String,
    donate_id: Number,
    sum: Number,
})
const Donation = mongoose.model('donations', donationSchema);
module.exports=Donation;