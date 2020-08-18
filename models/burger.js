const orm = require('../config/orm.js');

async function selectAll() {
    const selections = await orm.selectAll('burgers');
    console.log(selections)
}

function insertOne(burger, bool) {
    orm.insertOne(burger, bool);
};

function updateOne(bool, burger) {
    orm.updateOne(bool, burger);
} 

//updateOne(true, "horseradish cheddar")
//selectAll()