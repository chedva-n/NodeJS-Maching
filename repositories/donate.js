const db = require('../models/db');
const Donate = require('../models/donate');
class DonateRepository {
    constructor() {
        db.connect();
    }

    async getAll() {
       return await Donate.find({});
    }

}

module.exports = new DonateRepository();