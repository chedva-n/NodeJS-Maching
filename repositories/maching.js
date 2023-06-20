const db = require('../models/db');
const Maching = require('../models/maching');
class machingRepository{
   constructor() {
      db.connect();
  }
 async getDetails(){
    return await Maching.find({});
 }

}module.exports = new machingRepository();