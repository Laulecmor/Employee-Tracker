DROP DATABASE IF EXISTS empdata_db;
CREATE DATABASE empdata_db;

USE empdata_db;

CREATE TABLE department (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) UNIQUE NOT NULL
);

CREATE TABLE role(
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) UNIQUE NOT NULL,
    salary DECIMAL UNSIGNED NOT NULL,
    department_id int UNSIGNED ,
    FOREIGN KEY (department_id)
    REFERENCES department(id)
    ON DELETE CASCADE
);

CREATE TABLE employee(
    id INT NOT NULL AUTO_INCREMENT UNIQUE PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id int UNSIGNED,
    FOREIGN KEY (role_id)
    REFERENCES role(id)
    ON DELETE SET NULL,
    manager_id INT NULL
    REFERENCES employee(id)
    ON DELETE SET NULL
);
 