const express = require('express');
const logger = require('../middlewares/logger');
const app = express();

const donationService = require('../services/donationSrvice');
const router = express.Router();
let maxId=6;
router.get('/', async (req, res, next) => {
    let allDonations = await donationService.getAll();
    console.log(allDonations.length);
    res.json(allDonations);

})
router.post('/', async (req, res) => {
    if (req.body) {
        req.body._id=++maxId;
        await donationService.create(req.body);
        console.log('new donation!!!!!!!!!!!!');
       // logger('new donation!!!!!!!!!!!!');
        res.json(req.body)
    }
    //   await  donationService.create(req.body);
});
module.exports = router;