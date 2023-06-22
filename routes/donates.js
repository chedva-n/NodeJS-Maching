const express = require('express');
const donateService = require('../services/donateService');
const router = express.Router();
router.get('/', async (req, res, next) => {
    let allDonates = await donateService.getAll();
    console.log(allDonates.length);
    res.json(allDonates);

})
router.get('/:id', async (req, res, next) => {
    const { id } = req.params;
    const get_donate = await donateService.getById(id);
    res.json(get_donate);

})
router.put('/:id',async (req, res) => {
    const { id } = req.params;
    const update_target = req.body;
    try {
        const updatedCampaign = await donateService.update(id, update_target);
        res.json(updatedCampaign);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})
module.exports = router;