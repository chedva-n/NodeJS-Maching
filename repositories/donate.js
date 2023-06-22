const db = require('../models/db');
const Donate = require('../models/donate');
class DonateRepository {
    constructor() {
        db.connect();
    }

    async getAll() {
        return await Donate.find({});
    }
    async getById(id){
        const filter = { _id: id };
        const projection = {};
        const donate = await Donate.find(filter, projection); 
        return donate;
    }
    async update(id, update_target) {
        try {
            const updatedDonate = await Donate.findByIdAndUpdate(id, update_target, {
                new: true,
            });
            return updatedDonate;
        } catch (error) {
            console.error(error);
            throw new Error('Failed to update the campaign');
        }
    }
    
}
module.exports = new DonateRepository();