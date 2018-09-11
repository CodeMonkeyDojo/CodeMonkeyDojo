DROP DATABASE IF EXISTS MonkeyDB;

CREATE DATABASE MonkeyDB;

USE MonkeyDB;

-- need to follow the table  diagram in order to allow for optimal organization
-- working

-- CREATE TABLE Users(
--   id int NOT NULL AUTO_INCREMENT,
--   type int NOT NULL,
--   user_name varchar(20) NOT NULL,
--   email varchar(36) NOT NULL,
--   password varchar(36) NOT NULL,
--   PRIMARY KEY (ID)
-- );
CREATE TABLE Users (
  id int NOT NULL AUTO_INCREMENT,
  quantity integer NOT NULL,
  description varchar(50) NOT NULL,
  PRIMARY KEY (ID)
);

INSERT INTO Users (quantity, description) VALUES (2134, "Pancho");
INSERT INTO Users (quantity,description) VALUES (141, "Chepe");
INSERT INTO Users (quantity, description) VALUES (434, "Pete");
INSERT INTO Users (quantity, description) VALUES (141, "data");


-- insert into Users (type,
-- user_name,
-- email,
-- password) values
--   (    1,
--       'Pancho',
--       'PanchoLOCO@Monkeys.com',
--       'monkey1!'
--     ),  (    1,
--           'Pete',
--           'Pete@Monkeys.com',
--           'monkey1!'
--         ),  (    1,
--               'Chepe',
--               'Chepe@Monkeys.com',
--               'monkey1!'
--             ),  (    1,
--                   'Data',
--                   'data@Monkeys.com',
--                   'monkey1!'
--                 );


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
  ("Pete", "I want to sleep", 22 ),
  ("Pancho", "I want to rest", 22 ),
  ("Chepe", "I want to slumber", 22 ),
  ("Data", "I want to nap", 22 );

-- insert into conversation (message, responce) values

CREATE TABLE Tutorial (
    id int NOT NULL AUTO_INCREMENT,
    name varchar(36) NOT NULL,
    description varchar(200) NOT NULL,
    additional_desc varchar(200) NOT NULL,
    parent_id int NOT NULL,
    datetime datetime NOT NULL,
    PRIMARY KEY (ID)
  );
