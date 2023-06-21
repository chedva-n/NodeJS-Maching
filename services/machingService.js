const MachingRepository = require('../repositories/maching');
class MachingService{
    async getDetails() {
        return await MachingRepository.getDetails();
    }
    async update(id,update_target){
        return await MachingRepository.update(id,update_target);
    }
}
module.exports = new MachingService();