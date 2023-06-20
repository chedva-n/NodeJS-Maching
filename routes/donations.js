const express = require('express');
const donationService = require('../services/donationSrvice');
const router = express.Router();
router.get('/', async (req, res, next) => {
    let allDonations = await donationService.getAll();
    console.log(allDonations.length);
    res.json(allDonations);

})
router.post('/', (req, res) => {
    console.log(req.body);
    donationService.create(req.body).then(data => res.json(data));
});
module.exports = router;