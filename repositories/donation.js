const db = require('../models/db');
const Donation = require('../models/donation');
class DonationRepository{
    constructor(){

    }
   async  create(donation) {
        let data = {};
        try {
            data = await Donation.create(donation);
            console.log("create donetion!!!!!");
        } catch(err) {
          //  logger.error('Error::' + err);
          console.log("erorr");
        }
        return data;
    }
    
    async getById(donate_id){
        const filter = { donate_id: donate_id };
        const projection = {};
        const outcast = await Donation.find(filter, projection); 
        return outcast;
    }
}
module.exports = new DonationRepository();