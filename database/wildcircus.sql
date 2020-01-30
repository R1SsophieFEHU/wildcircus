CREATE DATABASE wildcircus;

USE wildcircus;

DROP TABLE if exists representation;
DROP TABLE if exists artist;
DROP TABLE if exists newsletter;
DROP TABLE if exists representation_artist;

CREATE TABLE representation
(
id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
title VARCHAR(100),
description VARCHAR (350),
category VARCHAR (50)
);

CREATE TABLE artist
(
id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
lastname VARCHAR(30),
firstname VARCHAR(30),
description VARCHAR (250),
avatar varchar(255) DEFAULT NULL
);

CREATE TABLE newsletter
(
id INT PRIMARY KEY NOT NULL AUTO_INCREMENT, 
email VARCHAR (320) NOT NULL,
lastname VARCHAR(30),
firstname VARCHAR(30) 
);

CREATE TABLE representation_artist
(
  artist_id INT NOT NULL,
  representation_id INT NOT NULL
);
