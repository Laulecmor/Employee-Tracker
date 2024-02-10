DROP DATABASE IF EXISTS empdata_db;
CREATE DATABASE empdata_db;

USE empdata_db;

CREATE TABLE department(
  department_id: INT PRIMARY KEY,
  department_name: VARCHAR(30) NOT NULL,
);

CREATE TABLE role(
  role_id: INT PRIMARY KEY,
  job_title: VARCHAR(30) NOT NULL,
  salary: DECIMAL,
  department_name: VARCHAR(30) NOT NULL,
  department_id: INT,
);

CREATE TABLE employee(
  role_id: INT PRIMARY KEY,
  first_name: VARCHAR(30) NOT NULL,
  last_name: VARCHAR(30) NOT NULL,
  job_title: VARCHAR(30) NOT NULL,
  department_name: VARCHAR(60) NOT NULL,
  salary: DECIMAL,
  manager_name: VARCHAR(60) NOT NULL,
);