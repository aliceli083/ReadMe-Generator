// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')
const fs = require('fs');
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// TODO: Create an array of questions for user input
const questions = [{
type: 'input',
message: 'What is the title of the project?',
name: 'title',
},
{
    type: 'input',
    message: 'What is the description?',
    name: 'description',
},
{
    type: 'input',
    message: 'installation',
    name: 'installation',
},
{
    type: 'input',
    message: 'usage',
    name: 'usage',
},
{
    type: 'list',
    message: 'Which license is the application covered under?',
    name: 'license',
    choices: [
        {
            name: "MIT",
            value: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
        },
        {
            name: "ISC",
            value: "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)",
        },
        {
            name: "Eclipse",
            value: "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)",

        }
    ]
},
{
    type: 'input',
    message: 'contributing',
    name: 'contributing',
},
{
    type: 'input',
    message: 'tests',
    name: 'tests',
},
{
    type: 'input',
    message: 'What is your GitHub username?',
    name: 'GitHubUsername',
},
{
    type: 'input',
    message: 'What is your email address?',
    name: 'EmailAddress'
}];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
fs.writeFileSync(fileName, generateMarkdown(data))
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(data=>{
        writeToFile('README.md', data)
    })
}

// Function call to initialize app
init();


