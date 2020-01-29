CREATE DATABASE wildcircus;

USE wildcircus;

DROP TABLE if exists spectacles;
DROP TABLE if exists artiste;
DROP TABLE if exists newsletter;

CREATE TABLE spectacles
(
id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
title VARCHAR(100),
category VARCHAR (50)
);

CREATE TABLE artiste
(
id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
lastname VARCHAR(30),
firstname VARCHAR(30),
category VARCHAR(50),
arrival_date DATE
);

CREATE TABLE newsletter
(
id INT PRIMARY KEY NOT NULL AUTO_INCREMENT, 
email VARCHAR (320) NOT NULL,
lastname VARCHAR(30),
firstname VARCHAR(30) 
);
