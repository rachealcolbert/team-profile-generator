const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const {
    validate
} = require('@babel/types');


// function to start generator
function startGenerator() {
    createManager();
};
// function to ask the manager questions 
function createManager() {
    inquirer.prompt([{
            type: 'input',
            name: 'name',
            message: "What is the manager's name?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the manager's name.");
                }
                return false;
            }
        },
        {
            type: 'number',
            name: 'id',
            message: "What is the manager's id?",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log("Please enter the manager's id.");
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the manager's email?",
        },
        {
            type: 'number',
            name: 'officeNumber',
            message: "And lastly, what is the manager's office number?",
            validate: officeNumberInput => {
                if (officeNumberInput) {
                    return true;
                } else {
                    console.log("Please enter an office number")
                }
            }

        },
    ]).then(answers => {
        console.log("answers: ", answers);
        addEmployee();
    });
};
// function asking to make a new employee: Engineer or Intern or nah
function addEmployee() {
    inquirer.prompt([{
        type: 'checkbox',
        name: 'addEmployee',
        message: "Do you want to add a new employee",
        choices: ['Yes', 'No']
    }, ]).then(res => {
        if (res.addEmployee == 'Yes')
            inquirer.prompt({
                type: 'list',
                name: 'employee',
                message: "Do you want to add an intern or engineer?",
                choices: ['Intern', 'Engineer'],
            })
    }).then(res => {
        if (res.createEmployee == 'Intern')
            createIntern()
    })
};


// function asking engineer questions 
function createEngineer() {
    inquirer.prompt([{
        type: 'checkbox',
        name: 'addEmployee',
        message: "Do you want to add a new employee",
        choices: ['Yes', 'No']
    }])
}
// function asking intern questions 
function createIntern() {

};


// function to write html file
// function writeToFile(fileName, data) {
//     return fs.writeFileSync(path.join(__dirname, fileName), data)
// }
// // function to initialize program
// function init() {
//     questions()
//         .then(answers => {
//             writeToFile('dist/page.html', generateMarkdown({
//                 ...answers
//             }));
//         })
// }

startGenerator();