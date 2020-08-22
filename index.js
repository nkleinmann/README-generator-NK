// necessary for inquirer
const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");

//write README file
const writeFileAsync = util.promisify(fs.writeFile);

//Accesses generateMarkdown file 
const generateMarkdown = require("./utils/generateMarkdown.js");

// function that asks users questions
let promptUser = () => {
    return inquirer.prompt(questions);
}

// array of objects with questions for user
const questions = 
        [
            {
                type: "input",
                name: "title",
                message: "What is the title of the README?"
            },
            {
                type: "input",
                name: "description",
                message: "What is the description of the README?"
            },
            {
                type: 'input',
                name: 'installation',
                message: 'What is the instillation process?'
            },
            {
                type: 'input',
                name: 'usage',
                message: 'What is the use for this app?'
            },
            {
                type: 'input',
                name: 'contributing',
                message: 'What is the contribution process like? If this is collaborative, provide details and guidelines here.'
            },
            {
                type: 'input',
                name: 'tests',
                message: 'What tests do you have for your application (if any)? List test instructions and examples of how they work here.'
            },
            {
                type: 'input',
                name: 'questions',
                message: 'Enter any instructions on how to contact you with questions here.'
            },
            {
                type: 'input',
                name: 'email',
                message: 'Enter email here:'
            },
            {
                type: 'input',
                name: 'github',
                message: 'Enter Github here:'
            },
            {
                type: 'list',
                choices: [
                    "MIT",
                    "GPL",
                    "APACHE"
                ],
                name: 'license',
                message: 'Please select a license for your project:'
            }
        ]


// function to initialize program
async function init() {
try {
    const answer = await promptUser();
    console.log(answer);

    
    const readMe = generateMarkdown(answer);

    writeFileAsync("README-Test.md", readMe).then(function() {
        console.log("successfully wrote to README-Test.md");
    });
}
catch (err) {
    console.log(err);
}

}

init();

