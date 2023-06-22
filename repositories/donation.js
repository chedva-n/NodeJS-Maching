const db = require('../models/db');
const Donation = require('../models/donation');
class DonationRepository{
    constructor(){

    }
   async  create(donation) {
        let data = {};
        try {
            data = await Donation.create(donation);
            console.log("create donetion!!!!");
        } catch(err) {
          console.log("Something went wrong on the way, try again");
        }
        return data;
    }
    
    async getById(donate_id){
        const filter = { donate_id: donate_id };
        const projection = {};
        const donation = await Donation.find(filter, projection); 
        return donation;
    }
}
module.exports = new DonationRepository();