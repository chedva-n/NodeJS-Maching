const GroupRepository = require('../repositories/group');
class GroupService{
    async getAll() {
        return await GroupRepository.getAll();
    }
}
module.exports = new GroupService();