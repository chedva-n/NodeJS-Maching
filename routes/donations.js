const express = require('express');
const donationService = require('../services/donationSrvice');
const router = express.Router();
router.get('/', async (req, res, next) => {
    let allDonations = await donationService.getAll();
    res.json(allDonations);

})
router.post('/', async (req, res) => {
    if (req.body) {
        await donationService.create(req.body);
        console.log(`A donation of ${req.body.sum}$`);
        res.json(req.body)
    }
});

router.get('/:donate_id', async (req, res, next) => {
    const { donate_id } = req.params;
        const get_donation = await donationService.getById(donate_id);
        res.json(get_donation);
})
module.exports = router;