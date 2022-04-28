// array of questions for user input
let managerQuestions = [
    {
        type: "input",
        name: "name",
        message: "Manager's name: "
    },
    {
        type: "input",
        name: "id",
        message: "Manager's ID: "
    },
    {
        type: "input",
        name: "email",
        message: "Manager's email: "
    },
    {
        type: "input",
        name: "officeId",
        message: "Manager's office ID: "
    },
];

let engineerQuestions = [
    {
        type: "input",
        name: "name",
        message: "Engineer's name: "
    },
    {
        type: "input",
        name: "id",
        message: "Engineer's ID: "
    },
    {
        type: "input",
        name: "email",
        message: "Engineer's email: "
    },
    {
        type: "input",
        name: "github",
        message: "Engineer's Github: "
    },
];

let internQuestions = [
    {
        type: "input",
        name: "name",
        message: "Intern's name: "
    },
    {
        type: "input",
        name: "id",
        message: "Intern's ID: "
    },
    {
        type: "input",
        name: "email",
        message: "Intern's email: "
    },
    {
        type: "input",
        name: "school",
        message: "Intern's school: "
    },
];

let addNew = [
    {
        type: "list",
        name: "choice",
        message: "Select a new employee to add: ",
        choices: ["Engineer", "Intern", "Done"]
    },
];

module.exports = {
    addNew: addNew,
    internQuestions: internQuestions,
    engineerQuestions: engineerQuestions,
    managerQuestions: managerQuestions
}