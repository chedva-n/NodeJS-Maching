const express = require('express');
const donateService = require('../services/donateService');
const router = express.Router();
router.get('/', async (req, res, next) => {
    let allDonates = await donateService.getAll();
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
        const updatedCampaign = await donateService.update(id, update_target);
        res.json(updatedCampaign);
})
module.exports = router;