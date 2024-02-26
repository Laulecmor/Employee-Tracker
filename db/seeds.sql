INSERT INTO department (department_name) VALUES ('Sales'), ('Finance'), ('Engineering'), ('Legal');

INSERT INTO role (job_title, salary, department_id)
VALUES ('Sales Lead', 100000.00, 1),
       ('Salesperson', 80000.00, 1),
       ('Lead Engineer', 150000.00, 3),
       ('Software Engineer', 120000.00, 3),
       ('Account Manager', 160000.00, 2);

INSERT INTO employee (first_name, last_name, role_id, manager)
VALUES ('John', 'Doe', 1, "Lisa Scott"),
       ('Mike', 'Chan', 2, "Anthony Jones"),
       ('Ashley', 'Rodriguez', 3, "Bob Smith"),
       ('Kevin', 'Tupik', 4, "Bob Smith"),
       ('Kunal', 'Singh', 5, "Anthony Jones");
