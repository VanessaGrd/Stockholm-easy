

DROP TABLE IF EXISTS activity;

CREATE TABLE activity (
  id INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
 name VARCHAR(45) NOT NULL,
	address	VARCHAR (225) NOT NULL,
  openingHours VARCHAR (45) NOT NULL,
	price VARCHAR(45) NOT NULL,
	picture	VARCHAR(225) NOT NULL
)ENGINE=InnoDB;

INSERT INTO 
activity (name, address, openingHours, price, picture)
VALUES
(
  'Musée Vasa',
  'Galärvarvsvägen 14 115 21 Stockholm',
'8h30-18h00',
'190Kr/19€',
'https://cdn.pixabay.com/photo/2015/10/27/08/50/vasa-1008504_1280.jpg'
);
DROP TABLE IF EXISTS user;
CREATE TABLE user (
  id INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  firstname VARCHAR(45) NOT NULL,
  lastname VARCHAR(45) NOT NULL,
  email VARCHAR(45) NOT NULL,
  hashedPassword VARCHAR(255) NOT NULL, 
  roles VARCHAR(45),
  activity_id INT NOT NULL, 

  CONSTRAINT fk_user_activity
  FOREIGN KEY (activity_id)
  REFERENCES activity(id)
)
ENGINE=InnoDB;

INSERT INTO
user (firstname, lastname, email, hashedPassword, roles, activity_id)
VALUES
(
  'John',
  'Doe',
  'exemple@gmail.com',
  '$argon2id$v=19$m=65536,t=5,p=1$+8QKgBU+Z7zr2EVICuFDOg$74Nu7DWmpa/+VW7543Xm28gd+ATVrhtCV2lAakJ4i+A',
  'admin',
  '1'
),
(
  'Ariste',
  'Morin',
  'exemple1@gmail.com',
  '$argon2id$v=19$m=65536,t=5,p=1$+8QKgBU+Z7zr2EVICuFDOg$74Nu7DWmpa/+VW7543Xm28gd+ATVrhtCV2lAakJ4i+A',
  'user',
  '1'
),
(
  'Séverine',
  'Vincent',
  'exemple2@gmail.com',
  '$argon2id$v=19$m=65536,t=5,p=1$+8QKgBU+Z7zr2EVICuFDOg$74Nu7DWmpa/+VW7543Xm28gd+ATVrhtCV2lAakJ4i+A',
  'user',
  '1'
);