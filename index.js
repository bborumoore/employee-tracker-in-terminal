const inquirer = require("inquirer");
const Employee = require('./classes/Employee.js');
const Department = require('./classes/Department.js');
const Role = require('./classes/Role.js');
const connection = require('./config/connection.js');

connection.connect((err) => {
    if (err) throw err;
    console.log("Connection successful.")
  });

