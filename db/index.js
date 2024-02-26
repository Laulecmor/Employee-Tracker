const db = require("./connection.js");

class Data {
    constructor(db) {
        this.db = db;
    }

    findAllEmployees() {
        return this.db.promise().query(
            "SELECT * FROM employee JOIN role ON employee.role_id = role.id "
        );
    }

    addEmployee(employee) {
        return this.db.promise().query(
            "INSERT INTO employee (first_name, last_name, role_id) VALUES (?, ?, ?, ?)", employee
        )
    }


    viewAllDepartment() {
        return this.db.promise().query(
            "SELECT * FROM Department"
        );
    }

    addDepartment(department) {
        return this.db.promise().query(
            "INSERT INTO department SET ?", department
        );
    }

    viewAllRoles() {
        return this.db.promise().query(
            "SELECT * FROM Role"
        );
    }

    addRole(role) {
        return this.db.promise().query(
            "INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)", role
        )
    }
}

module.exports = new Data(db);