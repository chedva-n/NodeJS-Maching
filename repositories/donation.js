const db = require('../models/db');
const Donation = require('../models/donation');
class DonationRepository{
    constructor(){

    }
   async  create(donation) {
        let data = {};
        try {
            data = await Donation.create(donation);
            console.log("create!!!!!");
        } catch(err) {
          //  logger.error('Error::' + err);
          console.log("erorr");
        }
        return data;
    }
    
}
module.exports = new DonationRepository();