const DonationRepository = require('../repositories/donation');
class DonationServise{
     create(donation) {
        return  DonationRepository.create(donation);
    }
}
module.exports = new DonationServise();