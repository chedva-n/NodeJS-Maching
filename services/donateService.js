const DonateRepository = require('../repositories/donate');
//BL
class  DonateService {
    async getAll() {
        return await DonateRepository.getAll();
    }
}

module.exports = new DonateService();