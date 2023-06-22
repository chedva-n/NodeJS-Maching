const express = require('express');
const machingService = require('../services/machingService');
const router = express.Router();
router.get('/', async (req, res, next) => {
    let getDetails = await machingService.getDetails();
    console.log(getDetails.length);
    res.json(getDetails);

})

router.put('/:id',async (req, res) => {
    const { id } = req.params;
    const update_target = req.body;
        const updatedCampaign = await machingService.update(id, update_target);
        res.json(updatedCampaign);
})
module.exports = router;