const express = require('express');
const burger = require('../models/burger.js');

const router = express.Router();

router.get("/", async (req, res) => {
    const burgers = await burger.all();
    res.render("index", burgers)
});

module.exports = router;