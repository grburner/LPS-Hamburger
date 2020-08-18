const express = require('express');
const burger = require('../models/burger.js');

const router = express.Router();

router.get("/", async (req, res) => {
    const burgers = await burger.all();
    let hbsObj = {
        burgers: burgers
    }
    console.log(hbsObj)
    res.render("index", hbsObj)
});

module.exports = router;