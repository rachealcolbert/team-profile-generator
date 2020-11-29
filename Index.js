const inquirer = require('inquirer');
const fs = require('fs)');
const generateMarkdown = require('./dist/generateMarkdown.html');
const path = require('path');

// function to write html file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
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