USE empdata_db;

INSERT INTO department (name) 
VALUES ('Sales'), ('Finance'), ('Engineering'), ('Legal');

INSERT INTO role (title, salary, department_id)
VALUES ('Sales Lead', 100000.00, 1),
       ('Salesperson', 80000.00, 1),
       ('Lead Engineer', 150000.00, 3),
       ('Software Engineer', 120000.00, 3),
       ('Account Manager', 160000.00, 2);

INSERT INTO employee (first_name, last_name, role_id)
VALUES ('John', 'Doe', 1 ),
       ('Mike', 'Chan', 2 ),
       ('Ashley', 'Rodriguez', 3),
       ('Kevin', 'Tupik', 4 ),
       ('Kunal', 'Singh', 5 );
