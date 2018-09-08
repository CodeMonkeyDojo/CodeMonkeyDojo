DROP DATABASE IF EXISTS MonkeyDB;

CREATE DATABASE MonkeyDB;

USE MonkeyDB;

-- need to follow the table  diagram in order to allow for optimal organization
-- working

CREATE TABLE Users(
  id int NOT NULL AUTO_INCREMENT,
  type int NOT NULL,
  user_name varchar(20) NOT NULL,
  email varchar(36) NOT NULL,
  password varchar(36) NOT NULL,
  PRIMARY KEY (ID)
);


insert into Users (type,
user_name,
email,
password) values
  (    1,
      'Pancho',
      'PanchoLOCO@Poblanos.com',
      'monkey1!'
    );


CREATE TABLE Forum (
    id int NOT NULL AUTO_INCREMENT,
    name varchar(36) NOT NULL,
    description varchar(200) NOT NULL,
    parent_id int NOT NULL,
    datetime datetime NOT NULL,
    PRIMARY KEY (ID)
  );


INSERT INTO Forum
  (name, description, parent_id)
  values
  ("Pancho", "I want to sleep", 22 );

-- insert into conversation (message, responce) values
