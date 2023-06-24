const db = require('../models/db');
const Group = require('../models/group');
class DonateRepository {
    constructor() {
        db.connect();
    }

    async getAll() {
       return await Group.find({});
    }
    async getById(id){
        const filter = { _id: id };
        const projection = {_id:0,amount:1};
        const group = await Group.findOne(filter, projection); 
        console.log(group.amount);
        return group;
    }
    async updateAmoumt(id, additionalAmount) {
       const group = await Group.findById(id);
        const updated_amount = group.amount + additionalAmount;
        const updated = await Group.findByIdAndUpdate(id, { amount: updated_amount }, { new: true });
        return updated;
      }
}

module.exports = new DonateRepository();