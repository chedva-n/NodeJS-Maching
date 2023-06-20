const mongoose = require('mongoose');

const connect = async () => {

    await mongoose.connect('mongodb+srv://chedva8448:chedva8448@clusterchedvanaftali.vsusmed.mongodb.net/maching_')
    console.log('connected');

}
const disconnect = () => { }


module.exports = { connect, disconnect }