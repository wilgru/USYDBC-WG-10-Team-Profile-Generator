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

  // function to write README file
	generateDist() {
		fs.writeFile("./dist/index.html", renderHtml({ manager:this.manager, engineers:this.engineers, interns:this.interns }), (err) => {
					err ? console.error(err) : console.log(`HTML has been generated!`)
				}
		)
	}

  // Asks user what type of employee to add
  askForNewEmployee() {
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
        // 
        this.manager = new Manager(val.name, val.id, val.email, val.officeId)

        this.askForNewEmployee()
      });
  }

  // Asks user for details to add new engineer
  addNewEngineer() {
    inquirer
      .prompt(questions.engineerQuestions)
      .then(val => {
        // 
        this.engineers.push(new Engineer(val.name, val.id, val.email, val.github))

        this.askForNewEmployee()
      });
  }

  // Asks user for details to add new intern
  addNewIntern() {
    inquirer
      .prompt(questions.internQuestions)
      .then(val => {
        // 
        this.interns.push(new Intern(val.name, val.id, val.email, val.school))

        this.askForNewEmployee()
      });
  }

  // Prompts the user for a letter
  askForLetter() {
    return inquirer
      .prompt([
        {
          type: "input",
          name: "choice",
          message: "Guess a letter!",
          // The users guess must be a number or letter
          validate: val => /[a-z1-9]/gi.test(val),          
        }
      ])
      .then(val => {
        // If the user's guess is in the current word, log that they chose correctly
        const didGuessCorrectly = this.currentWord.guessLetter(val.choice);
        if (didGuessCorrectly) {
          console.log(chalk.green("\nCORRECT!!!\n"));

          // Otherwise decrement `guessesLeft`, and let the user know how many guesses they have left
        } else {
          this.guessesLeft--;
          console.log(chalk.red("\nINCORRECT!!!\n"));
          console.log(this.guessesLeft + " guesses remaining!!!\n");
        }

        console.log(this.currentWord.toString() + "\n");
      });
  }

  // Logs goodbye and exits the node app
  quit() {
    console.log("\nGoodbye!");
    process.exit(0);
  }
}

module.exports = Setup;