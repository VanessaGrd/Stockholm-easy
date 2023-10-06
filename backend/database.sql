
SET  FOREIGN_KEY_CHECKS=0;

DROP TABLE IF EXISTS user;
CREATE TABLE user (
  id INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  firstname VARCHAR(45) NOT NULL,
  lastname VARCHAR(45) NOT NULL,
  email VARCHAR(45) NOT NULL,
  hashedPassword VARCHAR(255) NOT NULL, 
  role VARCHAR(45) DEFAULT 'user')
ENGINE=InnoDB;

INSERT INTO
user (firstname, lastname, email, hashedPassword, role)
VALUES
(
  "Vanessa",
  "Giraud",
  'vanessa.giraud@gmail.com',
  '$argon2id$v=19$m=16,t=2,p=1$NmpzZHF0bThoMm4wMDAwMA$8b87F+A2+22XuoJ9EnyRiQ',
  'admin'
 
),
(
  "Ariste",
  "Morin",
  "exemple1@gmail.com",
  "$argon2id$v=19$m=16,t=2,p=1$YjE4ajE2eGIzbzcwMDAwMA$NA53PaJg0Gtp3GjCKLd/tA",
  "user"
 
),
(
  'Séverine',
  'Vincent',
  'exemple2@gmail.com',
  '$argon2id$v=19$m=16,t=2,p=1$MjBwOGdsNHRiczEwMDAwMA$eMTktr1H9Ns6MsAJ4Bz+Rg',
  'user'
  
),
(
'Richard', 
'Yann', 
'yann.richard9@gmail.com', 
'$argon2id$v=19$m=16,t=2,p=1$cXFnN2s1ZHU0aTAwMDAwMA$XFP3Vrp4/huxiy9p4p2EAw',
'user'
);
SET  FOREIGN_KEY_CHECKS=0;

DROP TABLE IF EXISTS activity;

CREATE TABLE activity (
  id INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
 name VARCHAR(45) NOT NULL,
	address	VARCHAR (225) NOT NULL,
  openingHours VARCHAR (45) NOT NULL,
	price INT NOT NULL,
	picture	VARCHAR(225) NOT NULL
)ENGINE=InnoDB;


INSERT INTO 
activity (name, address, openingHours, price, picture)
VALUES
(
  'Musée Vasa',
  'Galärvarvsvägen 14 115 21 Stockholm',
'10h00-17h00',
'24',
'https://images.unsplash.com/photo-1675068176923-d2fa965ed360?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80'
),
(
  'Palais Royal',
  'Slottsbacken 1, Old Town (Gamla Stan)',
'8h30-18h00',
'19',
'https://images.unsplash.com/photo-1622647503888-2303abf11fb7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'

),
(
  'Skansen Open-Air Museum',
  'Djurgårdsslätten 49-51, 115 21 Stockholm',
  '10h00-21h00',
  20,
  'https://media.istockphoto.com/id/517466348/fr/photo/cerf-de-skansen.jpg?b=1&s=612x612&w=0&k=20&c=Wgmj3BB4EM5YNpwvqQfgSRPhhcLG8cZN5cYPfAmRwtA='
),
(
  'Musée ABBA',
  'Djurgårdsvägen 68, 115 21 Stockholm',
  '10h00-20h00',
  30,
  'https://images.unsplash.com/photo-1560027602-0393d6fa052d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
),
(
  'Gröna Lund Amusement Park',
  'Lilla Allmänna Gränd 9, 115 21 Stockholm',
  '12h00-23h00',
  40,
  'https://images.pexels.com/photos/10773596/pexels-photo-10773596.jpeg?auto=compress&cs=tinysrgb&w=1600'
),
(
  'Vieux Stockholm (Gamla Stan)',
  'Gamla Stan, Stockholm',
  'Toute la journée',
  0,
  'https://images.unsplash.com/photo-1601806206217-97fdee6fb97b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1973&q=80'
);

DROP TABLE IF EXISTS program;
CREATE TABLE program (
  id INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  user_id INT(11) NOT NULL,
  activity_id INT(11) NOT NULL,
  FOREIGN KEY (user_id) REFERENCES user(id) ON DELETE CASCADE,
  FOREIGN KEY (activity_id) REFERENCES activity(id) ON DELETE CASCADE
) ENGINE=InnoDB;

INSERT INTO program (user_id, activity_id)
VALUES ( 2, 1);