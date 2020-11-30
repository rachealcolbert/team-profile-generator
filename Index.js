const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');


// function to start generator

// function to ask the manager questions 

// function asking to make a new employee: Engineer or Intern or nah

// function asking engineer questions 

// function asking intern questions 

// array of questions for Manager
const questions = () => {
    return inquirer.prompt([{
            type: 'input',
            name: 'name',
            message: "What is the manager's name?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the Manager's name.");
                }
                return false;
            }
        },
        {
            type: 'number'

        }

    ])
}
// function to write html file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(__dirname, fileName), data)
}
// function to initialize program
function init() {
    questions()
        .then(answers => {
            writeToFile('dist/page.html', generateMarkdown({
                ...answers
            }));
        })
}

init();