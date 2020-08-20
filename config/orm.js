const connection = require('./connection.js');
const { query } = require('express');

const orm = {   
    selectAll: (table) => {
        return new Promise((resolve, reject) => {
            let queryString = "SELECT * FROM ??";
            connection.query(queryString, [table], (err, results) => {
                if (err) {
                    reject(new Error(err));
                } else {
                    resolve(results)
                }
            });
        });
    },
    insertOne: (name, bool) => {
        return new Promise((resolve, reject) => {
            let queryString = "INSERT INTO burgers (burger_name, devoured) VALUES (?,?);"
            connection.query(queryString, [name, bool], (err, results) => {
                if (err) {
                    reject(new Error(err));
                } else {
                    console.log(results)
                    resolve(results)
                }
            });
        });
    },
    updateOne: (bool, id) => {
        return new Promise((resolve, reject) => {
            let queryString = "UPDATE burgers SET devoured = ? WHERE id = ?;"
            connection.query(queryString, [bool, id], (err, results) => {
                console.log(queryString)
                if (err) {
                    reject(new Error(err));
                } else {
                    resolve(results)
                }
            });
        });
    },
    deleteOne: (id) => {
        return new Promise((resolve, reject) => {
            let queryString = "DELETE FROM burgers WHERE id = ?;"
            connection.query(queryString, [id], (err,results) => {
                if (err) {
                    reject(new Error(err));
                } else {
                    resolve(results)
                }
            });
        });
    }
};

module.exports = orm;