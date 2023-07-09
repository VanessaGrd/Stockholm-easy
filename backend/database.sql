
DROP TABLE IF EXISTS user;
CREATE TABLE user (
  id INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  firstname VARCHAR(45) NOT NULL,
  lastname VARCHAR(45) NOT NULL,
  email VARCHAR(45) NOT NULL,
  hashedPassword VARCHAR(255) NOT NULL, 
  roles VARCHAR(45))
ENGINE=InnoDB;

INSERT INTO
user (firstname, lastname, email, hashedPassword, roles)
VALUES
(
  'John',
  'Doe',
  'exemple@gmail.com',
  '$argon2id$v=19$m=65536,t=5,p=1$+8QKgBU+Z7zr2EVICuFDOg$74Nu7DWmpa/+VW7543Xm28gd+ATVrhtCV2lAakJ4i+A',
  'admin'
 
),
(
  'Ariste',
  'Morin',
  'exemple1@gmail.com',
  '$argon2id$v=19$m=65536,t=5,p=1$+8QKgBU+Z7zr2EVICuFDOg$74Nu7DWmpa/+VW7543Xm28gd+ATVrhtCV2lAakJ4i+A',
  'user'
 
),
(
  'Séverine',
  'Vincent',
  'exemple2@gmail.com',
  '$argon2id$v=19$m=65536,t=5,p=1$+8QKgBU+Z7zr2EVICuFDOg$74Nu7DWmpa/+VW7543Xm28gd+ATVrhtCV2lAakJ4i+A',
  'user'
  
);

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
'https://cdn.pixabay.com/photo/2015/10/27/08/50/vasa-1008504_1280.jpg'
),
(
  'Palais Royal',
  'Slottsbacken 1, Old Town (Gamla Stan)',
'8h30-18h00',
'19',
'https://images.pexels.com/photos/5713891/pexels-photo-5713891.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'

);