DROP DATABASE IF EXISTS empdata_db;
CREATE DATABASE empdata_db;
USE empdata_db;
CREATE TABLE department(
  department_id INT PRIMARY KEY AUTO_INCREMENT,
  department_name VARCHAR(30) NOT NULL
);
CREATE TABLE role(
  role_id INT PRIMARY KEY AUTO_INCREMENT,
  job_title VARCHAR(30) NOT NULL,
  salary DECIMAL(10,2),
  department_id INT,
  FOREIGN KEY (department_id) REFERENCES department(department_id)
);
CREATE TABLE employee(
  employee_id INT PRIMARY KEY AUTO_INCREMENT,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT,
  manager VARCHAR(30) NOT NULL,
  department_name VARCHAR(30) NOT NULL,
  FOREIGN KEY (role_id) REFERENCES role(role_id),
  FOREIGN KEY (manager) REFERENCES employee(employee_id)
);