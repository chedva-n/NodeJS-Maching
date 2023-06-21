const express = require('express');
const machingService = require('../services/machingService');
const router = express.Router();
router.get('/', async (req, res, next) => {
    let maching = await machingService.getDetails();
    res.json(maching);
})
router.put('/:id',async(req,res,next)=>{
await machingService.update(req.params.id,req.body);
})
module.exports = router;