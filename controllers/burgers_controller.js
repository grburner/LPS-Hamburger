const express = require('express');
const burger = require('../models/burger.js');

const router = express.Router();

router.get("/", async (req, res) => {
    const burgers = await burger.all();
    let hbsObj = {
        burgers: burgers
    }
    res.render("index", hbsObj)
});

router.post("/api/burgers", async (req, res) => {
    const insBurger = await burger.insert(req.body.burger_name, req.body.devoured);
    console.log(insBurger)
    setTimeout(() => {
        res.redirect("/");
    }, 5000);
});

module.exports = router;