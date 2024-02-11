const inquirer = require("inquirer");
const db = require("./connection.js");

function loadPrompts() {
  inquirer.prompt([
    {
      type: "list",
      name: "choice",
      message: "What would you like to do?",
      choices: [
        { name: "Add Department", value: "add_department" },
        { name: "Add Employee", value: "add_employee" },
        { name: "Add Role", value: "add_role" },
        { name: "View All Departments", value: "view_departments" },
        { name: "View All Employees", value: "view_employees" },
        { name: "View All Roles", value: "view_roles" },
        { name: "Update Employee Role", value: "update_employee_role" },
        { name: "Quit", value: "quit" }
      ]
    }
  ]).then(({ choice }) => {
    const actions = {
      "add_department": addDepartment,
      "add_employee": addEmployee,
      "add_role": addRole,
      "view_departments": viewDepartments,
      "view_employees": viewEmployees,
      "view_roles": viewRoles,
      "update_employee_role": updateEmployeeRole,
      "quit": quit
    };
    actions[choice]();
  });
}

function quit() {
  process.exit();
}

// View Functions
function viewDepartments() {
  db.query("SELECT department.id , department.name FROM department ", (err, results) => {
    console.table(results);
    loadPrompts();
  });
}
function viewEmployees() {
  db.query("SELECT * FROM employee ", (err, results) => {
    console.table(results);
    loadPrompts();
  });
}
function viewRoles() {
  db.query("SELECT * FROM role ", (err, results) => {
    console.table(results);
    loadPrompts();
  });
}

// Functions
function addDepartment() {
  inquirer.prompt([{ type: "input", name: "name", message: "What is the name of the Department?" }])
    .then(({ name }) => {
      db.query("INSERT INTO department SET ?", name, (err, results) => {
        console.log(`Added Department!`);
        loadPrompts();
      });
    });
}

function addRole() {
  inquirer.prompt([
    { type: "input", name: "title", message: "Role Title?" },
    { type: "input", name: "salary", message: "Role Salary?" },
    { type: "input", name: "job_title", message: "What is their Job Title?" },
    { type: "input", name: "department", message: "Which Department?" },
    { type: "input", name: "department_id", message: "What is their Department ID?" } // Added missing comma here
  ]).then(({ title, salary, job_title, department, department_id }) => {
    const roleData = { title, salary, job_title, department, department_id};
    db.query("INSERT INTO role SET ?", roleData, (err, results) => {
      if (err) throw err;
      console.log(`Added Role!`);
      loadPrompts();
    });
  });
}

function addEmployee() {
  inquirer.prompt([
    { type: "input", name: "first_name", message: "Employee First Name?" },
    { type: "input", name: "last_name", message: "Employee Last Name?" },
    { type: "input", name: "department", message: "What is their Department?" },
    { type: "input", name: "job_title", message: "What is their Job Title?" },
    { type: "input", name: "salary", message: "What is their salary?" },
    { type: "list", name: "manager", message: "Who is the supervising manager?", choices: ["Lisa Scott", "Anthony Jones", "Bob Smith"] }
  ]).then(({ first_name, last_name, department, job_title, salary, manager }) => {
    const employeeData = { first_name, last_name, department_name: department, job_title, salary, manager_name: manager };
    db.query("INSERT INTO employee SET ?", employeeData, (err, results) => {
      if (err) throw err;
      console.log(`Added Employee!`);
      loadPrompts();
    });
  });
}

function updateEmployeeRole() {
  inquirer.prompt([
    { type: "input", name: "id", message: "Employee's ID?" },
    {
      type: "list",
      name: "job_title",
      message: "What is the new employee's role?",
      choices: ["Sales Lead", "Salesperson", "Lead Engineer", "Software Engineer", "Account Manager"]
    }
  ]).then(({ id, job_title }) => {
    db.query("UPDATE employee SET job_title = ? WHERE id = ?", [job_title, id], (err, results) => {
      if (err) throw err;
      console.log(`Updated Employee Role!`);
      loadPrompts();
    });
  });
}

loadPrompts();
