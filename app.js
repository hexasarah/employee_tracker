// npm init -y

// npm i mysql2

// npm i inquirer@8.2.4

// node app.js

// WHEN I start the application
// THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
// This requires node.js and the specified schema:

            // department

            // id: INT PRIMARY KEY

            // name: VARCHAR(30) to hold department name

            // role

            // id: INT PRIMARY KEY

            // title: VARCHAR(30) to hold role title

            // salary: DECIMAL to hold role salary

            // department_id: INT to hold reference to department role belongs to

            // employee

            // id: INT PRIMARY KEY

            // first_name: VARCHAR(30) to hold employee first name

            // last_name: VARCHAR(30) to hold employee last name

            // role_id: INT to hold reference to employee role

            // manager_id: INT to hold reference to another employee that is the manager of the current employee (null if the employee has no manager)


// WHEN I choose to view all departments
// THEN I am presented with a formatted table showing department names and department ids

// WHEN I choose to view all roles
// THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role

// WHEN I choose to view all employees
// THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to

// WHEN I choose to add a department
// THEN I am prompted to enter the name of the department and that department is added to the database

// WHEN I choose to add a role
// THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database

// WHEN I choose to add an employee
// THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database

// WHEN I choose to update an employee role
// THEN I am prompted to select an employee to update and their new role and this information is updated in the database


// Make this my own: 

// Import necessary modules
const readline = require('readline');
const databaseFunctions = require('./databaseFunctions'); // Assuming you have a separate file for database functions

// Create readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Main function
function main() {
    console.log("Welcome to the CLI application!");

    // Display menu options
    displayMenu();

    // Start reading user input
    rl.question('Enter your choice: ', (choice) => {
        // Perform actions based on user choice
        switch (choice) {
            case '1':
                viewAllDepartments();
                break;
            case '2':
                viewAllRoles();
                break;
            case '3':
                viewAllEmployees();
                break;
            case '4':
                addDepartment();
                break;
            case '5':
                addRole();
                break;
            case '6':
                addEmployee();
                break;
            case '7':
                updateEmployeeRole();
                break;
            default:
                console.log("Invalid choice. Please try again.");
        }

        // Close readline interface
        rl.close();
    });
}

// Function to display menu options
function displayMenu() {
    console.log("\nMenu:");
    console.log("1. View all departments");
    console.log("2. View all roles");
    console.log("3. View all employees");
    console.log("4. Add a department");
    console.log("5. Add a role");
    console.log("6. Add an employee");
    console.log("7. Update an employee role");
}

// Function to view all departments
function viewAllDepartments() {
    const departments = databaseFunctions.getAllDepartments();
    displayDepartments(departments);
}

// Function to add a department
function addDepartment() {
    rl.question("Enter the name of the department: ", (departmentName) => {
        databaseFunctions.addDepartment(departmentName);
        console.log("Department added successfully.");
        main(); // Return to main menu
    });
}

// Other functions (viewAllRoles, viewAllEmployees, addRole, addEmployee, updateEmployeeRole) follow a similar structure.

// Execute the main function
main();
