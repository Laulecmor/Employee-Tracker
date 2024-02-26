const { prompt, default: inquirer } = require("inquirer");
const db = require("./db");

loadMainPrompts();

function loadMainPrompts() {
    prompt([
        {
            type: "list",
            name: "choice",
            message: "What would you like to do?",
            choices: [
                {
                    name: "View All Employees", 
                    value: "VIEW_EMPLOYEES"
                },
                {
                    name: "Add Employee",
                    value: "ADD_EMPLOYEE"
                },
             
                {
                    name: "View All Roles",
                    value: "VIEW_ROLES"
                },
                {
                    name: "Add Role",
                    value: "ADD_ROLE"
                },
                {
                    name: "View All Departments",
                    value: "VIEW_DEPARTMENTS"
                },
                {
                    name: "Add Department",
                    value: "ADD_DEPARTMENT"
                },
                {
                    name: "quit",
                    value: "QUIT"
                }
            ]
        }
    ]).then(res => {
        let choice = res.choice;

        switch (choice) {
            case "VIEW_EMPLOYEES":
                viewEmployees();
                break;
            case "ADD_EMPLOYEE":
                addEmployee();
                break;
            case "VIEW_DEPARTMENTS":
                viewDepartment();
                break;
            case "ADD_DEPARTMENT":
                addDepartment();
                break;
            case "VIEW_ROLES":
                viewRoles();
                break;
            case "ADD_ROLE":
                addRole();
                break;
            case "QUIT":
                quit();
            break;
        }
    })
}

function quit () {
    return
}

function viewEmployees() {
    db.findAllEmployees()
        .then(([rows]) => {
            let employees = rows;
            console.log("\n")
            console.table(employees);
        })
        .then(() => loadMainPrompts());
}

function addEmployee() {
    prompt ([
        {
            type: "input",
            name: "first_name",
            message: "What is the first name of the new employee?",
        }, 
        {
            type: "input",
            name: "last_name",
            message: "What is the last name of the new employee?"
        },
        {
            type: "input",
            name: "newRoleEmployee",
            message: "What is the role ID of the new employee?"
        },
        {
            type: "input",
            name: "managerID",
            message: "What is the managers ID number?"
        },
    ])
    .then ((response) => {

        let newEmployee =  [ response.first_name, response.last_name, response.newRoleEmployee, response.managerID ]

        db.addEmployee(newEmployee)

        .then(() => loadMainPrompts());
    }) 
}

function viewDepartment() {
    db.viewAllDepartment()
        .then(([rows]) => {
            let department = rows;
            console.log("\n")
            console.table(department);
        })
        .then(() => loadMainPrompts());
}

function addDepartment() {
    prompt ([{
        type: "input",
        name: "newDepartment",
        message: "What would you like to name the new department?"
    }])
    .then ((response) => {
        let newDepartment = { name: response.newDepartment }
        db.addDepartment(newDepartment)
        .then(() => loadMainPrompts());
    }) 
}

function viewRoles() {
    db.viewAllRoles()
        .then(([rows]) => {
            let roles = rows;
            console.log("\n")
            console.table(roles);
        })
        .then(() => loadMainPrompts());
}

function addRole() {
    prompt ([
        {
            type: "input",
            name: "newRoleSalary",
            message: "What is the salary of the new role?",
        },
        {
            type: "input",
            name: "newRoleName",
            message: "What is the name of the new role?",
        },
        {
            type: "list",
            message: "Please select the department id of the role you would like to add",
            choices: ["1", "2", "3", "4"],
            name: "newRoleDepartmentId",
        },
    ])
    .then ((response) => {

        let newRole = [ response.newRoleName, response.newRoleSalary, response.newRoleDepartmentId ]

        db.addRole(newRole)
        .then(() => loadMainPrompts());
    }) 
}

function quit() {
  console.log("Goodbye!");
  process.exit();
}
