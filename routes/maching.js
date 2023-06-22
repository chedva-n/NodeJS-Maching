const express = require('express');
const machingService = require('../services/machingService');
const router = express.Router();
router.get('/', async (req, res, next) => {
    let getDetails = await machingService.getDetails();
    console.log(getDetails.length);
    res.json(getDetails);

})

// router.put('/:id',async(req,res,next)=>{
// await machingService.update(req.params.id,req.body);
// })
router.put('/:id',async (req, res) => {
    const { id } = req.params;
    const update_target = req.body;
    try {
        const updatedCampaign = await machingService.update(id, update_target);
        res.json(updatedCampaign);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})
module.exports = router;