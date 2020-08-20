const express = require('express');
const burger = require('../models/burger.js');
const bodyParser = require('body-parser');

const router = express.Router();

router.get("/", async (req, res) => {
    console.log('into GET')
    const burgers = await burger.all();
    console.log('burgers: ' + burgers)
    let hbsObj = {
        burgers: burgers
    }
    res.render("index", hbsObj)
});

router.post("/api/burgers", async (req, res) => {
    const insBurger = await burger.insert(req.body.burger_name, req.body.devoured);
    console.log(insBurger)
    res.redirect("/");
});

router.put("/api/update/:id/:dev", async (req, res) => {
    const id = req.params.id
    const dev = req.params.dev
    
    if (dev === "false") {
        await burger.update(1, id)
    } else {
        await burger.update(0, id)
    }
    res.redirect(303, '/'); 
});



router.delete("api/delete/:id", async (req, res) => {
    const delID = req.params.id
});

module.exports = router;