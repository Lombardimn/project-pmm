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
SELECT * FROM Menus;


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

-- SELECT Menus.*, Products.* 
-- FROM Menus 
-- INNER JOIN Int_products_menus
--   ON Int_products_menus.menu_id = Menus.id
-- INNER JOIN Products
--   ON Products.id = Int_products_menus.product_id
-- WHERE Menus.id = 2;

SELECT Menus.*, 
       Products.*, 
       Categories.name AS category_name
FROM Menus
INNER JOIN Int_products_menus ON Int_products_menus.menu_id = Menus.id
INNER JOIN Products ON Products.id = Int_products_menus.product_id
INNER JOIN Categories ON Products.category_id = Categories.id
WHERE Menus.id = 2;