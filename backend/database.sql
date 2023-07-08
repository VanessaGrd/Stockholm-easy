CREATE TABLE user (
  id INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  firstname VARCHAR(45) NOT NULL,
  lastname VARCHAR(45) NOT NULL,
  email VARCHAR(45) NOT NULL,
  hashedPassword VARCHAR(255) NOT NULL, 
  roles VARCHAR(45)
)ENGINE=InnoDB DEFAULT CHARSET=latin1;

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

CREATE TABLE Activity (
  id INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
 name VARCHAR(45) NOT NULL,
	address	VARCHAR (225),
  openingHours VARCHAR (45),
	price VARCHAR(45),
	picture	VARCHAR(225),
)
INSERT INTO 
Activity (name, address, openingHours, price, picture)
VALUES(
  'Musée Vasa',
  'Galärvarvsvägen 14, 
115 21 Stockholm, Suède',
'8h30-18h00',
'190Kr/19€',
'https://cdn.pixabay.com/photo/2015/10/27/08/50/vasa-1008504_1280.jpg'
)