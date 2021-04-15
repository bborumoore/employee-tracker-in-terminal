const inquirer = require("inquirer");
const Employee = require('./classes/Employee.js');
const Department = require('./classes/Department.js');
const Role = require('./classes/Role.js');
const connection = require('./config/connection.js');
const { connect } = require("./config/connection.js");


connection.connect((err) => {
    if (err) throw err;
    console.log("Connection successful.")
    openPrompt();
});

const openPrompt = () => {
    inquirer
        .prompt({
            name: 'action',
            type: 'rawlist',
            message: 'What would you like to do?',
            choices: [
                'View all Departments',
                'View all Employees',
                'View all Roles',
                'Add a Department',
                'Add an Employee',
                'Add a Role',
                'Update a role',
                'Exit Program',
            ],
        })
        .then((answer) => {
            switch (answer.action) {
                case 'View all Departments':
                    viewDepartments();
                    break;

                case 'View all Employees':
                    viewEmployees();
                    break;

                case 'View all Roles':
                    viewRoles();
                    break;

                case 'Add a Department':
                    addDepartment();
                    break;

                case 'Add an Employee':
                    addEmployee();
                    break;

                case 'Add a Role':
                    addRole();
                    break;

                case 'Update a role':
                    updateRole();
                    break;

                case 'Exit Program':
                    exitProgram();
                    break;


                default:
                    console.log(`Invalid action: ${answer.action}`);
                    break;
            }
        });
};

// Function to view all departments
const viewDepartments = () => {
    const query =
    'SELECT * FROM department';
  connection.query(query, (err, res) => {
    //   console.log(res);
    res.forEach(({id, name}) => console.log(
        `Dept ID: ${id} || Dept Name: ${name}`
        ));
    openPrompt();
  });
}

// Function to view all employees
const viewEmployees = () => {
    let query ='SELECT employee.first_name, employee.last_name, role.title, department.name '
    query += 'FROM employee INNER JOIN role ON (employee.role_id = role.id) '
    query += 'INNER JOIN department ON (role.department_id = department.id)';
    // console.log(query);
  connection.query(query, (err, res) => {
    //   console.log(res);
    res.forEach(({first_name, last_name, title, name}) => console.log(
        `Employee: ${first_name} ${last_name} ||  ${title} in the ${name} department`
        ));
    openPrompt();
  });
}

// Function to view all roles
const viewRoles = () => {
    const query =
    'SELECT * FROM role';
  connection.query(query, (err, res) => {
    res.forEach(({ title }) => console.log(title));
    openPrompt();
  });
}

const addDepartment = () => {
    inquirer.prompt({
        name: 'department',
        type: 'input',
        message: "What is the Department Name?"
    })
    .then((answer) => {
        query = `INSERT INTO department (name) VALUES (${answer.department})`
        connect.query(query)
    })
}

const addEmployee = () => {

}

const addRole = () => {

}

const updateRole = () => {

}

const exitProgram = () => {
connection.end();
}


