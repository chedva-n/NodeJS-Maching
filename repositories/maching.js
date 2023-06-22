const db = require('../models/db');
const Maching = require('../models/maching');
class machingRepository {
   constructor() {
      db.connect();
   }
   async getDetails() {
     const projection = {_id:0,date: 1, target: 1, hour: 1 };
     return await Maching.find({}, projection);
}
   async update(id, update_target) {
      try {
         const updatedCampaign = await Maching.findByIdAndUpdate(id, update_target, {
            new: true,
        });
         return updatedCampaign;
     } catch (error) {
         console.error(error);
         throw new Error('Failed to update the campaign');
     }

   }
} module.exports = new machingRepository();