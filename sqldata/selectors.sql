USE users_service;
SELECT * FROM Users;
SELECT * FROM Roles;

USE clients_service;
SELECT * FROM Clients;
SELECT * FROM Directions;
SELECT * FROM Int_clients_directions;

USE products_service;
SELECT * FROM Units;
SELECT * FROM Brands;
SELECT * FROM Categories;
SELECT * FROM Products;
SELECT * FROM Int_products_menus;


/*******************************************/
/* SELECTOR ESPECIFIC TEST !!! */
/*******************************************/

/* CONSULTA DE BUSQUEDA DE USUARIO CON SUS DIRECCIONES CORRECTA !!! */
-- SELECT Clients.*, Directions.*
-- FROM Clients
-- INNER JOIN Int_clients_directions
--     ON Int_clients_directions.client_id = Clients.id
-- INNER JOIN Directions
--     ON Directions.id = Int_clients_directions.direction_id
-- WHERE Clients.name = 'John' AND Clients.lastname = 'Doe';

-- SELECT Clients.name, Clients.lastname, Clients.area_phone, Clients.status, Directions.street, Directions.number_street, Directions.postal_code, Directions.floor, Directions.departament, Directions.lote, Directions.block, Directions.neighborhood, Directions.city, Directions.locality, Directions.state
-- FROM Clients
-- INNER JOIN Int_clients_directions
--     ON Int_clients_directions.client_id = Clients.id
-- INNER JOIN Directions
--     ON Directions.id = Int_clients_directions.direction_id
-- WHERE Clients.name = 'John' AND Clients.lastname = 'Doe';



-- SELECT Clients.*, Directions.* FROM Clients
-- INNER JOIN Int_clients_directions
-- ON Int_clients_directions.client_id = Clients.id
-- INNER JOIN Directions
-- ON Directions.id = Int_clients_directions.direction_id
-- ORDER BY id ASC;


