const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./dist/generateMarkdown.html');
const path = require('path');
const Employee = require('./lib/Employee');

console.log('This is a test')

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

new Employee().initializePortfolio();

