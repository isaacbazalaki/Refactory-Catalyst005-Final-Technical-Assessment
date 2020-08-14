const express = require('express')
const router = express.Router();
const path = require('path');
const Corona = require('../models/CoronaModel');



router.get('/corona', (req, res) => {
    res.render('corona')
});

router.post('/corona', async (req, res) => {
    const corona = new Corona(req.body);
    try {
        await corona.save(); //await means that operation returns a promise
        res.redirect('/corona');
    } catch (err) {
        res.send('something went wrong'); //if not successful
        console.log(err);
    }
});


module.exports = router;