const fs = require("fs");
const inquirer = require("inquirer");

async function promptUser() {
    try {
        // array of questions for user
        const questions = await inquirer.prompt([{
            type: "input",
            message: "What is the title of the README?",
            name: "title"
        },
        {
            type: "input",
            message: "What is the description of the README?",
            name: "description"
        }])

        console.log(questions)
        
    } catch (err) {
        console.log(err);
    }

}





// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

const readMeData = promptUser();

// function call to initialize program
// init();
