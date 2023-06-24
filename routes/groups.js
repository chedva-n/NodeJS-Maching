const express = require('express');
const groupService = require('../services/groupService');
const router = express.Router();
router.get('/', async (req, res, next) => {
    let allgroups = await groupService.getAll();
    console.log(allgroups.length);
    res.json(allgroups);

})
router.get('/:id', async (req, res, next) => {
    const { id } = req.params;
    const get_group = await groupService.getById(id);
    res.json(get_group);

})

module.exports = router;