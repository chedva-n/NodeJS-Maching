const GroupRepository = require('../repositories/group');
class GroupService{
    constructor(){

    }
    async getAll() {
        return await GroupRepository.getAll();
    }
    async getById(id){
        return await GroupRepository.getById(id);
    }
    async updateAmoumt(id,update_amount){
        return await GroupRepository.updateAmoumt(id,update_amount);
    }
}
module.exports = new GroupService();