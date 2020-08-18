const orm = require('../config/orm.js');

const burger = {
    all: function selectAll() {
        return new Promise( async (resolve, reject) => {
            const allBurgers = await orm.selectAll('burgers').catch(err => console.log('Error getting data from the ORM: ' + err) );
            resolve(allBurgers)
        });
    },
    insert: function insertOne(burger, bool) {
        orm.insertOne(burger, bool);
    },
    update: function updateOne(bool, burger) {
        orm.updateOne(bool, burger);
    } 
}

module.exports = burger;