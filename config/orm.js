const connection = require('../connection.js');
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
    insertOne: (newBurger, bool) => {
        return new Promise((resolve, reject) => {
            let queryString = "INSERT INTO burgers (burger_name, devoured) VALUES (?,?);"
            connection.query(queryString, [newBurger, bool], (err, results) => {
                if (err) {
                    reject(new Error(err));
                } else {
                    resolve(results)
                }
            });
        });
    },
    updateOne: (bool, burgerName) => {
        return new Promise((resolve, reject) => {
            let queryString = "UPDATE burgers SET devoured = ? WHERE burger_name = ?;"
            connection.query(queryString, [bool, burgerName], (err, results) => {
                if (err) {
                    reject(new Error(err));
                } else {
                    resolve(results)
                }
            });
        });
    } 
};