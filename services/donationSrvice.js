const DonationRepository = require('../repositories/donation');
class DonationServise{
    async create(donation) {
        return await DonationRepository.create(donation);
    }
}
module.exports = new DonationServise();