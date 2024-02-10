INSERT INTO department (department_id, department_name)
VALUES (01, "Sales"),
       (02, "Finance"),
       (03, "Engineering"),
       (04, "Legal"),

INSERT INTO role (role_id, job_title, salary, department_name, department_id)
VALUES (1, "Sales Lead", 100000, "Sales", 01),
       (2, "Salesperson", 80000, "Sales", 02),
       (3, "Lead Egineer", 150000, "Engineering", 03),
       (4, "Software Engineer", 120000, "Engineering", 03),
       (5, "Account Manager", 160000, "Finance", 02);

INSERT INTO employee (role_id, first_name, last_name, job_title, salary, department_name, manager_name)
VALUES (1, "John", "Doe", "Sales Lead", 100000, "Sales", "Bob Smith"),
       (2, "Mike", "Chan", "Salesperson", 80000, "Sales", "Bob SMith"),
       (3, "Ashley", "Rodriguez", "Lead Egineer", 150000, "Engineering", "Anthony Jones"),
       (4, "Kevin", "Tupik", "Software Engineer", 120000, "Engineering", "Anthony Jones"),
       (5, "Kunal", "Singh", "Account Manager", 160000, "Finance", "Lisa Scott");
