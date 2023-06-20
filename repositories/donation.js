const db = require('../models/db');
const Donation = require('../models/donation');
class DonationRepository{
    constructor(){

    }
     create(donation) {
        let data = {};
        try {
            data =  Donation.create(donation);
        } catch(err) {
          //  logger.error('Error::' + err);
          console.log("erorr");
        }
        return data;
    }
    
}