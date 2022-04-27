const inquirer = require("inquirer")
const fs = require("fs")

// array of questions for user input
let managerQuestions = [
    {
        type: "input",
        name: "ManagersName",
        message: "Managers name: "
    },
    {
        type: "input",
        name: "ManagersId",
        message: "Managers ID: "
    },
    {
        type: "input",
        name: "ManagersEmail",
        message: "Managers email: "
    },
    {
        type: "input",
        name: "ManagersOfficeId",
        message: "Managers office ID: "
    },
];

let engineerQuestions = [
    {
        type: "input",
        name: "engineersName",
        message: "Engineers name: "
    },
    {
        type: "input",
        name: "engineersId",
        message: "Engineers ID: "
    },
    {
        type: "input",
        name: "engineersEmail",
        message: "Engineers email: "
    },
    {
        type: "input",
        name: "engineersGithub",
        message: "Engineers Github: "
    },
];

let internQuestions = [
    {
        type: "input",
        name: "internsName",
        message: "Interns name: "
    },
    {
        type: "input",
        name: "internsId",
        message: "Interns ID: "
    },
    {
        type: "input",
        name: "internsEmail",
        message: "Interns email: "
    },
    {
        type: "input",
        name: "internsSchool",
        message: "Interns school: "
    },
];

let addNew = [
    {
        type: "list",
        name: "addNewEmplyee",
        message: "Select a new employee to add: ",
        choices: ["Engineer", "Intern", "done"]
    },
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) => {
            err ? console.error(err) : console.log(`'${fileName}' has been generated!`)
        }
    )
}

// function to initialize app
function init() {
    console.log("To generate your roster website, answer the following questions:")
    inquirer
    .prompt(questions) // prompt all the questions
    .then(data => writeToFile("index.html", data)) // then with the results, write them to a new readme file
    .catch((error) => {
        console.error(error) // if there was ann error console log it
        });
}

// Function call to initialize app
init();