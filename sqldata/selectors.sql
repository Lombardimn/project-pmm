USE users_service;
SELECT * FROM Users;
SELECT * FROM Roles;

USE clients_service;
SELECT * FROM Clients;
SELECT * FROM Directions;
SELECT * FROM Int_clients_directions;

SELECT Clients.name, Clients.lastname, Clients.area_phone, Clients.status, Directions.street, Directions.number_street, Directions.postal_code, Directions.floor, Directions.departament, Directions.lote, Directions.block, Directions.neighborhood, Directions.city, Directions.locality, Directions.state
FROM Clients
INNER JOIN Int_clients_directions
    ON Int_clients_directions.client_id = Clients.id
INNER JOIN Directions
    ON Directions.id = Int_clients_directions.direction_id
WHERE Clients.name = 'John' AND Clients.lastname = 'Doe';