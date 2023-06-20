const MachingRepository = require('../repositories/maching');
class MachingService{
    async getDetails() {
        return await MachingRepository.getDetails();
    }
}
module.exports = new MachingService();