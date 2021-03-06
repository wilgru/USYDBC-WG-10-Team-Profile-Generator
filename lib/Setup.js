const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");
const renderHtml = require("../src/renderHtml");
const questions = require("./questions");

// The Game constructor is responsible for keeping score and controlling the flow of the overall game

class Setup {
  // Save a reference for `this` in `this` as `this` will change inside of inquirer
  constructor() {
    this.manager;
    this.engineers = [];
    this.interns = [];
  }

  // initial function
  start() {
    console.log("To generate a roster HTML page, you must first add some employees:")
    this.addNewManager()
  }

  // function to write README file
	generateDist() {
		fs.writeFile("./dist/index.html", renderHtml({ manager:this.manager, engineers:this.engineers, interns:this.interns }), (err) => {
					err ? console.error(err) : console.log(`HTML has been generated!`)
				}
		)
	}

  // Asks user what type of employee to add
  askForNewEmployee() {
    console.log("Would you like to add another employee? Select one from the list or select 'Done' if you are finished.")
    inquirer
      .prompt(questions.addNew)
      .then(val => {
        // If the user says 
        switch (val.choice) {
          case "Engineer":
            this.addNewEngineer();
            break;
          case "Intern":
            this.addNewIntern();
            break;
          case "Done":
            this.generateDist();
            break;
        }
      });
  }

  // Asks user for details to add new manager
  addNewManager() {
    inquirer
      .prompt(questions.managerQuestions)
      .then(val => {
        if(this.validate(val)){ // make sure no field was left empty, if so prompt the user to try again (by recalling this function)
          // store the new manager
          this.manager = new Manager(val.name, val.id, val.email, val.officeId)

          this.confirmationMessage(val.name)
          this.askForNewEmployee()
        } else {
          console.log("Error: A field was left empty, please try again...\n")
          this.addNewManager()
        }
      });
  }

  // Asks user for details to add new engineer
  addNewEngineer() {
    inquirer
      .prompt(questions.engineerQuestions)
      .then(val => {
        if(this.validate(val)){ // make sure no field was left empty, if so prompt the user to try again (by recalling this function)
          // add the new employee into the engineers array
          this.engineers.push(new Engineer(val.name, val.id, val.email, val.github))

          this.confirmationMessage(val.name)
          this.askForNewEmployee()
        } else {
          console.log("Error: A field was left empty, please try again...\n")
          this.addNewEngineer()
        }
      });
  }

  // Asks user for details to add new intern
  addNewIntern() {
    inquirer
      .prompt(questions.internQuestions)
      .then(val => {
        if(this.validate(val)){ // make sure no field was left empty, if so prompt the user to try again (by recalling this function)
          // add the new employee into the interns array
          this.interns.push(new Intern(val.name, val.id, val.email, val.school))

          this.confirmationMessage(val.name)
          this.askForNewEmployee()
        } else {
          console.log("Error: A field was left empty, please try again...\n")
          this.addNewIntern()
        }
      });
  }

  // print a confirmation message
  confirmationMessage(val) {
    console.log(`'${val}' has been added!\n`)
  }

  // validate the parsed object
  validate(values) {
    let passed = true
    Object.values(values).forEach(val => {
      if (val === undefined || val === null || val === '') {
        passed = false
      }
    })
    return passed
  }

  // Logs goodbye and exits the node app
  quit() {
    console.log("\nGoodbye!");
    process.exit(0);
  }
}

module.exports = Setup;