const orm = require('../config/orm.js');

const burger = {
    all: function selectAll() {
        return new Promise( async (resolve, reject) => {
            const allBurgers = await orm.selectAll('burgers')
            resolve(allBurgers)
            //do I need to handle rejections here since theyre already being handled in the ORM file?
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