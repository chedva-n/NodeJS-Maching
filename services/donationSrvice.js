const DonationRepository = require('../repositories/donation');
class DonationServise{
    async create(donation) {
        return await DonationRepository.create(donation);
    }
    async getById(donate_id){
        return await DonationRepository.getById(donate_id);
    }
}
module.exports = new DonationServise();