CREATE TABLE User (
  id INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  firstname VARCHAR(45) NOT NULL,
  lastname VARCHAR(45) NOT NULL,
  email VARCHAR(45)
  hashedPassword VARCHAR(255) NOT NULL, 
  roles VARCHAR(45)
)ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO
user (firstname, lastname, email, hashedPassword, roles)
VALUES
(
  'John',
  'Doe',
  '$argon2id$v=19$m=65536,t=5,p=1$+8QKgBU+Z7zr2EVICuFDOg$74Nu7DWmpa/+VW7543Xm28gd+ATVrhtCV2lAakJ4i+A',
  'admin'
),
(
  'Ariste',
  'Morin',
  '$argon2id$v=19$m=65536,t=5,p=1$+8QKgBU+Z7zr2EVICuFDOg$74Nu7DWmpa/+VW7543Xm28gd+ATVrhtCV2lAakJ4i+A',
  'user'
),
(
  'Séverine',
  'Vincent',
  '$argon2id$v=19$m=65536,t=5,p=1$+8QKgBU+Z7zr2EVICuFDOg$74Nu7DWmpa/+VW7543Xm28gd+ATVrhtCV2lAakJ4i+A',
  'user'
);

CREATE TABLE Activity (
  id INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
 name VARCHAR(45) NOT NULL,
	address	VARCHAR (225),
	price VARCHAR(45),
	picture	VARCHAR(225),
)
INSERT INTO 
Activity (name, address, price, picture)
VALUES(
  'Musée Vasa',
  'Galärvarvsvägen 14, 
115 21 Stockholm, Suède',
''
)