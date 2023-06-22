const DonateRepository = require('../repositories/donate');
//BL
class  DonateService {
    async getAll() {
        return await DonateRepository.getAll();
    }
    async getById(id){
        return await DonateRepository.getById(id);
    }
    
    async update(id,update_target){
        return await DonateRepository.update(id,update_target);
    }
} 

module.exports = new DonateService();