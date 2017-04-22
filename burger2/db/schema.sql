CREATE DATABASE burger_db;

USE burger_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(200) NOT NULL,
	devoured boolean DEFAULT false,
	date TIMESTAMP DEFAULT NOW(),
	PRIMARY KEY (id)
);