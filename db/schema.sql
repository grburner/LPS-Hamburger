CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    id INT AUTO INCREMENT,
    burger_name VARCHAR(255),
    devoured BOOLEAN,
);