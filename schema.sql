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
INSERT INTO Users (quantity, description) VALUES (141, "D474");


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
  ("D474", "Sleep is the cousin of death", 22 );

-- insert into conversation (message, responce) values

CREATE TABLE Tutorial (
    id int NOT NULL AUTO_INCREMENT,
    name varchar(36) NOT NULL,
    video_id varchar (36) NOT NULL,
    description varchar(200) NOT NULL,
    additional_desc varchar(200) NOT NULL,
    parent_id int NOT NULL,
    datetime datetime NOT NULL,
    PRIMARY KEY (ID)
  );

INSERT INTO Tutorial
  (name, video_id, description, additional_desc)
  VALUES
  ("Flappy Bird", "ex20943id", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",  )
