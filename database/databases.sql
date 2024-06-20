DROP DATABASE IF EXISTS products_service;
DROP DATABASE IF EXISTS clients_service;
DROP DATABASE IF EXISTS users_service;

CREATE DATABASE users_service;
USE users_service;

CREATE TABLE Users (
	id CHAR(36) NOT NULL PRIMARY KEY,
	username VARCHAR(50) NOT NULL UNIQUE,
	email VARCHAR(50) NOT NULL UNIQUE,
	password VARCHAR(61) NOT NULL,
	img_url VARCHAR(255) NOT NULL DEFAULT('https://res.cloudinary.com/lombardidev/image/upload/v1718419262/baseuser_eq2osl.jpg'),
	active BOOLEAN NOT NULL DEFAULT 1,
	created_at TIMESTAMP NOT NULL DEFAULT(NOW()),
	updated_at TIMESTAMP NOT NULL DEFAULT(NOW())
);

CREATE TABLE Roles (
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	rol VARCHAR(20) NOT NULL UNIQUE,
	description VARCHAR(50) NOT NULL,
	active BOOLEAN NOT NULL DEFAULT 1,
    user_id_create CHAR(36) NOT NULL,
	created_at TIMESTAMP NOT NULL DEFAULT(NOW()),
    user_id_update CHAR(36) NOT NULL,
	updated_at TIMESTAMP NOT NULL DEFAULT(NOW()),
    FOREIGN KEY (user_id_create) REFERENCES Users(id),
    FOREIGN KEY (user_id_update) REFERENCES Users(id)
);

/* TABLE INTERMEDIATE */

CREATE TABLE Int_user_rol (
	user_id CHAR(36) NOT NULL UNIQUE,
	rol_id INT NOT NULL,
	PRIMARY KEY (user_id, rol_id)
);


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
	FOREIGN KEY (user_id) REFERENCES users_service.Users(id)
);

/* TABLE INTERMEDIATE */

CREATE TABLE Int_clients_directions (
client_id INT NOT NULL,
direction_id INT NOT NULL,
PRIMARY KEY (client_id, direction_id)
);



/* DATABASE PRODUCTS */
CREATE DATABASE products_service;
USE products_service;

CREATE TABLE Units (
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(50) NOT NULL UNIQUE,
	symbol VARCHAR(5) NOT NULL UNIQUE,
	description VARCHAR(255) NOT NULL,
	status INT NOT NULL DEFAULT 1,
	created_at TIMESTAMP NOT NULL DEFAULT(NOW()),
	updated_at TIMESTAMP NOT NULL DEFAULT(NOW())
);

CREATE TABLE Brands (
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(50) NOT NULL UNIQUE,
	description VARCHAR(255) NOT NULL,
	status INT NOT NULL DEFAULT 1,
	created_at TIMESTAMP NOT NULL DEFAULT(NOW()),
	updated_at TIMESTAMP NOT NULL DEFAULT(NOW())
);

CREATE TABLE Categories (
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(50) NOT NULL UNIQUE,
	description VARCHAR(255) NOT NULL,
	status INT NOT NULL DEFAULT 1,
	created_at TIMESTAMP NOT NULL DEFAULT(NOW()),
	updated_at TIMESTAMP NOT NULL DEFAULT(NOW())
);

CREATE TABLE Products (
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(50) NOT NULL UNIQUE,
	description VARCHAR(255) NOT NULL,
	category_id INT NOT NULL,
	type_id INT NOT NULL,
	brand_id INT NOT NULL,
	image VARCHAR(255) NOT NULL,
	unit_id INT NOT NULL,
	price_unit DECIMAL(10,2) NOT NULL DEFAULT 0,
	min_stock INT NOT NULL,
	max_stock INT NOT NULL,
	status INT NOT NULL DEFAULT 1,
	expiring INT NOT NULL DEFAULT 0,
	created_at TIMESTAMP NOT NULL DEFAULT(NOW()),
	updated_at TIMESTAMP NOT NULL DEFAULT(NOW()),
	FOREIGN KEY (category_id) REFERENCES Categories(id),
	FOREIGN KEY (brand_id) REFERENCES Brands(id),
	FOREIGN KEY (unit_id) REFERENCES Units(id)
);

CREATE TABLE Menus (
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(50) NOT NULL UNIQUE,
	description VARCHAR(255) NOT NULL,
	status INT NOT NULL DEFAULT 1,
    image VARCHAR(255) NOT NULL DEFAULT('https://res.cloudinary.com/lombardidev/image/upload/v1718834160/menu.png'),
    category_id INT NOT NULL DEFAULT 1,
    type_id INT NOT NULL DEFAULT 1,
    price DECIMAL(10,2) NOT NULL DEFAULT 0,
	created_at TIMESTAMP NOT NULL DEFAULT(NOW()),
	updated_at TIMESTAMP NOT NULL DEFAULT(NOW())
);

/* TABLE INTERMEDIATE */

CREATE TABLE Int_products_menus (
product_id INT NOT NULL,
menu_id INT NOT NULL,
PRIMARY KEY (product_id, menu_id)
)