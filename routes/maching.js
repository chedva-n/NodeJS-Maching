const express = require('express');
const machingService = require('../services/machingService');
const router = express.Router();
router.get('/', async (req, res, next) => {
    let maching = await machingService.getDetails();
    console.log(maching.length);
    res.json(maching);

})

module.exports = router;