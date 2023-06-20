const express = require('express');
const donateService = require('../services/donateService');
const router = express.Router();
router.get('/', async (req, res, next) => {
    let allDonates = await donateService.getAll();
    console.log(allDonates.length);
    res.json(allDonates);

})


module.exports = router;