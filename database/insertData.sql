/**** INSERT VALUES TABLES *****/

USE users_service;

/* Insertar registros en la tabla Roles */
INSERT INTO Roles (rol, description, active, created_at, updated_at) VALUES
('Adminsystem', 'Administrador del Sistema', 1, NOW(), NOW()),
('Admin', 'Administrador del Negocio', 1, NOW(), NOW()),
('Sales', 'Vendedores', 1, NOW(), NOW()),
('Delivery', 'Repartidores', 1, NOW(), NOW()),
('Clients', 'Clientes', 1, NOW(), NOW());

/* Insertar registros en la tabla Users */
INSERT INTO Users (id, username, email, password, active, rol_id, created_at, updated_at) VALUES
("281af96e-f3dc-401e-b6c1-f0db857522cb", 'cosmefulano2', 'cosme2@example.com', '$2a$10$gmJDmkGmGGkPmK2sbpztk./7md4CaGWWHjbmjHQwShmM1/G1CJyQW', 1, 1, NOW(), NOW());



USE clients_service;

/* Insertar registros en la tabla Directions */
INSERT INTO Directions (street, number_street, postal_code, floor, departament, lote, block, neighborhood, city, locality, state, created_at, updated_at) VALUES
('Main St', 100, 12345, 1, 'A', '1', '1', 'Downtown', 'Metropolis', 'Central', 'State1', NOW(), NOW()),
('Second St', 200, 23456, 2, 'B', '2', '2', 'Uptown', 'Gotham', 'West', 'State2', NOW(), NOW()),
('Third St', 300, 34567, 3, 'C', '3', '3', 'Midtown', 'Star City', 'North', 'State3', NOW(), NOW()),
('Fourth St', 400, 45678, 4, 'D', '4', '4', 'Suburbia', 'Coast City', 'East', 'State4', NOW(), NOW());

/* Insertar registros en la tabla Clients */
INSERT INTO Clients (name, lastname, area_phone, number_phone, status, user_id, created_at, updated_at) VALUES
('John', 'Doe', 123, 4567890, 1, (SELECT id FROM users_service.Users WHERE username = 'cosmefulano2'), NOW(), NOW()),
('Jane', 'Doe', 123, 1234567, 1, (SELECT id FROM users_service.Users WHERE username = 'cosmefulano2'), NOW(), NOW()),
('Jim', 'Beam', 456, 7890123, 1, (SELECT id FROM users_service.Users WHERE username = 'cosmefulano2'), NOW(), NOW()),
('Jack', 'Daniels', 789, 1237890, 1, (SELECT id FROM users_service.Users WHERE username = 'cosmefulano2'), NOW(), NOW());

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
('Descartables', 'Productos desechables'),
('Limpieza', 'Productos de limpieza'),
('Perecederos', 'Alimentos perecederos'),
('No Perecederos', 'Alimentos no perecederos'),
('Otros', 'Productos diversos');

/* Insertar registros en la tabla Products */
INSERT INTO Products (name, description, category_id, type_id, brand_id, image, unit_id, price_unit, min_stock, max_stock) VALUES 
('Bandeja 105', 'Bandeja de plastico n°105', 1, 1, 4, 'bandeja105.jpg', 3, 1500.00, 5, 20),
('Perfumina', 'Liquido de limpieza para el piso', 2, 2, 1, 'perfumina.jpg', 2, 3.50, 10, 50),
('Set de cubiertos', 'Conjunto de cubiertos de plastico tipo tramontina', 5, 1, 3, 'cubiertos.jpg', 3, 120.00, 15, 100),
('Fideos Tirabuzon', 'Paquete de fideos de 500 gramos', 4, 1, 5, 'office_chair.jpg', 5, 200.00, 2, 10),
('Lomo', 'Carne de vacuno', 3, 1, 2, 'lomovacuno.jpg', 3, 15.00, 30, 200);

/* Insertar registros en la tabla Menus */
INSERT INTO Menus (name, description) VALUES 
('Ensalada Mixta', 'Ensalada con queso, tomate y lechuga'),
('Ñoquis', 'Ñoquis de papa con salsa de boloñesa'),
('Merluza con Pure', 'Pescado con pure de papas'),
('Tarta de Jamon y queso', 'Tarta casera con jamón y queso'),
('Lomitos', 'Sandwich de lomitos con queso y jamón');

/* Insertar registros en la tabla Int_products_menus */
INSERT INTO Int_products_menus (product_id, menu_id) VALUES 
(1, 1),
(2, 1),
(3, 2),
(4, 4),
(5, 5);



