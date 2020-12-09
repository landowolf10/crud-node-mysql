-- Creating database --
CREATE DATABASE crud_nodejs_mysql;

-- Using the database --
use crud_nodejs_mysql;

-- Creating table --
CREATE TABLE customer(
    id          INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name        VARCHAR(50) NOT NULL,
    address     VARCHAR(100) NOT NULL,
    phone       VARCHAR(10) NOT NULL
);

-- Show tables --
SHOW TABLES;

-- Describe tables --
describe customer