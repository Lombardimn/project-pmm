DROP DATABASE IF EXISTS Clients_service;
DROP DATABASE IF EXISTS Users_service;

CREATE DATABASE Users_service;
USE users_service;

CREATE TABLE Roles (
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    rol VARCHAR(20) NOT NULL UNIQUE,
    description VARCHAR(50) NOT NULL,
    active BOOLEAN NOT NULL DEFAULT 1,
    created_at TIMESTAMP NOT NULL DEFAULT(NOW()),
    updated_at TIMESTAMP NOT NULL DEFAULT(NOW())
);

CREATE TABLE Users (
	id CHAR(36) NOT NULL PRIMARY KEY,
	username VARCHAR(50) NOT NULL UNIQUE,
	email VARCHAR(50) NOT NULL UNIQUE,
	password VARCHAR(61) NOT NULL,
	rol INT NOT NULL,
	active BOOLEAN NOT NULL DEFAULT 1,
	created_at TIMESTAMP NOT NULL DEFAULT(NOW()),
	updated_at TIMESTAMP NOT NULL DEFAULT(NOW()),
	FOREIGN KEY Users(rol) REFERENCES Roles(id)
);


/**** INSERT VALUES TABLES *****/


/* Insertar registros en la tabla Roles */
INSERT INTO Roles (rol, description, active, created_at, updated_at) VALUES
('Admin', 'Administrator role', 1, NOW(), NOW()),
('User', 'Regular user role', 1, NOW(), NOW()),
('Guest', 'Guest user role', 1, NOW(), NOW()),
('Moderator', 'Moderator role', 1, NOW(), NOW());

/* Insertar registros en la tabla Users */
INSERT INTO Users (id, username, email, password, rol, active, created_at, updated_at) VALUES
(UUID(), 'admin_user', 'admin@example.com', 'password_hash_1', 1, 1, NOW(), NOW()),
(UUID(), 'regular_user', 'user@example.com', 'password_hash_2', 2, 1, NOW(), NOW()),
(UUID(), 'guest_user', 'guest@example.com', 'password_hash_3', 3, 1, NOW(), NOW()),
(UUID(), 'moderator_user', 'moderator@example.com', 'password_hash_4', 4, 1, NOW(), NOW());




/* DATABASE CLIENTS */
CREATE DATABASE clients_service;
USE clients_service;

CREATE TABLE Directions (
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	street VARCHAR(50) NOT NULL,
	number_street INT(5) NOT NULL,
	postal_code INT(5) NOT NULL,
	floor INT(5),
	departament VARCHAR(2),
	lote VARCHAR(2),
	block VARCHAR(10),
	neighborhood VARCHAR(20) NOT NULL,
	city VARCHAR(20) NOT NULL,
	locality VARCHAR(20) NOT NULL,
	state VARCHAR(20) NOT NULL,
	created_at TIMESTAMP NOT NULL DEFAULT(NOW()),
	updated_at TIMESTAMP NOT NULL DEFAULT(NOW())
);

CREATE TABLE Clients (
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(50) NOT NULL,
	lastname VARCHAR(50) NOT NULL,
	area_phone INT NOT NULL,
	number_phone INT NOT NULL,
	status INT NOT NULL DEFAULT 1,
	user_id CHAR(36) NOT NULL,
	created_at TIMESTAMP NOT NULL DEFAULT(NOW()),
	updated_at TIMESTAMP NOT NULL DEFAULT(NOW()),
    FOREIGN KEY Clients(user_id) REFERENCES users_service.Users(id)
);

/* TABLE INTERMEDIATE */

CREATE TABLE Int_clients_directions (
client_id INT NOT NULL,
direction_id INT NOT NULL,
PRIMARY KEY (client_id, direction_id)
);


/**** INSERT VALUES TABLES *****/

/* Insertar registros en la tabla Directions */
INSERT INTO Directions (street, number_street, postal_code, floor, departament, lote, block, neighborhood, city, locality, state, created_at, updated_at) VALUES
('Main St', 100, 12345, 1, 'A', '1', '1', 'Downtown', 'Metropolis', 'Central', 'State1', NOW(), NOW()),
('Second St', 200, 23456, 2, 'B', '2', '2', 'Uptown', 'Gotham', 'West', 'State2', NOW(), NOW()),
('Third St', 300, 34567, 3, 'C', '3', '3', 'Midtown', 'Star City', 'North', 'State3', NOW(), NOW()),
('Fourth St', 400, 45678, 4, 'D', '4', '4', 'Suburbia', 'Coast City', 'East', 'State4', NOW(), NOW());

/* Insertar registros en la tabla Clients */
INSERT INTO Clients (name, lastname, area_phone, number_phone, status, user_id, created_at, updated_at) VALUES
('John', 'Doe', 123, 4567890, 1, (SELECT id FROM users_service.Users WHERE username = 'admin_user'), NOW(), NOW()),
('Jane', 'Doe', 123, 1234567, 1, (SELECT id FROM users_service.Users WHERE username = 'regular_user'), NOW(), NOW()),
('Jim', 'Beam', 456, 7890123, 1, (SELECT id FROM users_service.Users WHERE username = 'guest_user'), NOW(), NOW()),
('Jack', 'Daniels', 789, 1237890, 1, (SELECT id FROM users_service.Users WHERE username = 'moderator_user'), NOW(), NOW());

/* Insertar registros en la tabla Int_clients_directions */
INSERT INTO Int_clients_directions (client_id, direction_id) VALUES
((SELECT id FROM Clients WHERE name = 'John' AND lastname = 'Doe'), (SELECT id FROM Directions WHERE street = 'Main St')),
((SELECT id FROM Clients WHERE name = 'John' AND lastname = 'Doe'), (SELECT id FROM Directions WHERE street = 'Second St')),
((SELECT id FROM Clients WHERE name = 'Jane' AND lastname = 'Doe'), (SELECT id FROM Directions WHERE street = 'Second St')),
((SELECT id FROM Clients WHERE name = 'Jim' AND lastname = 'Beam'), (SELECT id FROM Directions WHERE street = 'Third St')),
((SELECT id FROM Clients WHERE name = 'Jack' AND lastname = 'Daniels'), (SELECT id FROM Directions WHERE street = 'Fourth St'));
