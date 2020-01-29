CREATE DATABASE wildcircus;

USE wildcircus;

CREATE TABLE show
(
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  title VARCHAR(100),
  category VARCHAR (50)
);

CREATE TABLE artist
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
  email VARCHAR (32O) NOT NULL,
  lastname VARCHAR(30),
  firstname VARCHAR(30) 
);
