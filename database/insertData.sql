/**** INSERT VALUES TABLES *****/

USE users_service;

/* Insertar registros en la tabla Users */
INSERT INTO Users (id, username, email, password, active, created_at, updated_at) VALUES
("281af96e-f3dc-401e-b6c1-f0db857522cb", 'admin', 'admin1@example.com', 'password_hash_0', 1, NOW(), NOW()),
(UUID(), 'admin_user', 'admin@example.com', 'password_hash_1', 1, NOW(), NOW()),
(UUID(), 'regular_user', 'user@example.com', 'password_hash_2', 1, NOW(), NOW()),
(UUID(), 'guest_user', 'guest@example.com', 'password_hash_3', 1, NOW(), NOW()),
(UUID(), 'moderator_user', 'moderator@example.com', 'password_hash_4', 1, NOW(), NOW());

/* Insertar registros en la tabla Roles */
INSERT INTO Roles (rol, description, active, user_id_create, created_at, user_id_update, updated_at) VALUES
('Admin', 'Administrator role', 1,"281af96e-f3dc-401e-b6c1-f0db857522cb" ,NOW(),"281af96e-f3dc-401e-b6c1-f0db857522cb", NOW()),
('User', 'Regular user role', 1,"281af96e-f3dc-401e-b6c1-f0db857522cb" ,NOW(),"281af96e-f3dc-401e-b6c1-f0db857522cb", NOW()),
('Guest', 'Guest user role', 1,"281af96e-f3dc-401e-b6c1-f0db857522cb" ,NOW(),"281af96e-f3dc-401e-b6c1-f0db857522cb", NOW()),
('Moderator', 'Moderator role', 1,"281af96e-f3dc-401e-b6c1-f0db857522cb" ,NOW(),"281af96e-f3dc-401e-b6c1-f0db857522cb", NOW());

/* Insertar registros en la tabla Int_user_rol */
INSERT INTO Int_user_rol (user_id, rol_id) VALUES
("281af96e-f3dc-401e-b6c1-f0db857522cb", 1);

USE clients_service;

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




USE products_service;

/* Insertar registros en la tabla Units */
INSERT INTO Units (name, symbol, description) VALUES 
('Kilogram', 'kg', 'Unidad de masa en el sistema métrico'),
('Liter', 'L', 'Unidad de volumen en el sistema métrico'),
('Piece', 'pc', 'Unidad utilizada para artículos individuales'),
('Meter', 'm', 'Unidad de longitud en el sistema métrico'),
('Pack', 'pk', 'Conjunto de múltiples artículos empaquetados juntos');

/* Insertar registros en la tabla Brands */
INSERT INTO Brands (name, description) VALUES 
('BrandA', 'Marca líder en productos de calidad'),
('BrandB', 'Conocida por sus productos económicos'),
('BrandC', 'Especializada en productos ecológicos'),
('BrandD', 'Famosa por sus innovaciones tecnológicas'),
('BrandE', 'Reconocida por su diseño y estilo elegante');

/* Insertar registros en la tabla Categories */
INSERT INTO Categories (name, description) VALUES 
('Electronics', 'Dispositivos y aparatos electrónicos'),
('Groceries', 'Productos alimenticios y de consumo diario'),
('Clothing', 'Ropa y accesorios de moda'),
('Furniture', 'Muebles y accesorios para el hogar'),
('Sports', 'Equipamiento y accesorios deportivos');

/* Insertar registros en la tabla Products */
INSERT INTO Products (name, description, category_id, type_id, brand_id, image, unit_id, price_unit, min_stock, max_stock) VALUES 
('Laptop', 'Portátil de alta gama para trabajos exigentes', 1, 1, 4, 'laptop.jpg', 3, 1500.00, 5, 20),
('Apple Juice', 'Jugo de manzana 100% natural', 2, 2, 1, 'apple_juice.jpg', 2, 3.50, 10, 50),
('Running Shoes', 'Zapatos deportivos para carreras', 5, 1, 3, 'running_shoes.jpg', 3, 120.00, 15, 100),
('Office Chair', 'Silla ergonómica para oficina', 4, 1, 5, 'office_chair.jpg', 5, 200.00, 2, 10),
('T-shirt', 'Camiseta de algodón para uso diario', 3, 1, 2, 'tshirt.jpg', 3, 15.00, 30, 200);

/* Insertar registros en la tabla Menus */
INSERT INTO Menus (name, description) VALUES 
('Main Menu', 'Menú principal con acceso a todas las secciones'),
('Admin Dashboard', 'Panel de administración para gestionar el sistema'),
('User Profile', 'Sección para la gestión del perfil del usuario'),
('Reports', 'Acceso a reportes y análisis de datos'),
('Settings', 'Configuración y ajustes del sistema');

/* Insertar registros en la tabla Int_products_menus */
INSERT INTO Int_products_menus (product_id, menu_id) VALUES 
(1, 1), -- Laptop en Main Menu
(2, 1), -- Apple Juice en Main Menu
(3, 2), -- Running Shoes en Admin Dashboard
(4, 4), -- Office Chair en Reports
(5, 5); -- T-shirt en Settings



