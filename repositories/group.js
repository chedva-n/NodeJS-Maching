const db = require('../models/db');
const Group = require('../models/group');
class DonateRepository {
    constructor() {
        db.connect();
    }

    async getAll() {
       return await Group.find({});
    }

}

module.exports = new DonateRepository();