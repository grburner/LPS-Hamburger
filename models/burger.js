const orm = require('../config/orm.js');

const burger = {
    all: function selectAll() {
        return new Promise( async (resolve, reject) => {
            const allBurgers = await orm.selectAll('burgers').catch(err => console.log('Error getting data from the ORM: ' + err) );
            resolve(allBurgers)
        });
    },
    insert: function insertOne(burger, bool) {
        return new Promise( async (resolve, reject) => {
            const insBurger = await orm.insertOne(burger, bool).catch(err => console.log('Error inserting new Burger: ' + err) );
            resolve(insBurger)
        })
    },
    update: function updateOne(bool, id) {
        console.log(id)
        return new Promise( async (resolve, reject) => {
            resolve(orm.updateOne(bool, id));
        });
    },
    delete: function deleteOne(id) {
        return new Promise( async (resolve, reject) => {
            resolve(orm.deleteOne(id));
        });
    }
};

module.exports = burger;