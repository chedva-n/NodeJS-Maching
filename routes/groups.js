const express = require('express');
const groupService = require('../services/groupService');
const router = express.Router();
router.get('/', async (req, res, next) => {
    let allgroups = await groupService.getAll();
    console.log(allgroups.length);
    res.json(allgroups);

})

module.exports = router;