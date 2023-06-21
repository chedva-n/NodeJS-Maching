const db = require('../models/db');
const Maching = require('../models/maching');
class machingRepository{
   constructor() {
      db.connect();
  }
 async getDetails(){
    return await Maching.find({});
 }
async update(id,update_target){
   return await Maching.findByIdAndUpdate(id,update_target);
}
}module.exports = new machingRepository();