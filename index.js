// necessary for inquirer
const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");

//write README file
const writeFileAsync = util.promisify(fs.writeFile);

const generateMarkdown = require("./utils/generateMarkdown.js");

// function that asks users questions
let promptUser = () => {
    return inquirer.prompt(questions);
}

const questions = 
        // array of questions for user
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
                message: 'What is the use for this app? Provde 2-3 screenshots.'
            },
            {
                type: 'input',
                name: 'contributing',
                message: 'What is the contribution process like? If this is collaborative, provide details and guidelines here.'
            },
            {
                type: 'input',
                name: 'tests',
                message: 'What tests do you ahve for your application (if any)? List test instructions and examples of how they work here.'
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
                type: 'input',
                name: 'license',
                message: 'Please select a license for your project:'
            }
        ]


// promptUser().then(function(answers) {
//     const text = generateReadMe(answers);
//     return writeFileAsync("READEME.md", text);
// })
// .then(function() {
//     console.log("Successfully wrote to ReadMe!");
// })
// .catch(function(err) {
//     console.log(err);
// });




// function writeREADME(fileData) {
//     try {
//         fs.writeFile("READMEE.md", readMeTemplate, function (err) {
//             if (err) {
//                 return console.log(err);
//             }
//             console.log("file written successfully!");
//         })
//     } catch (err) {
//         console.log(err);
//     }
// }

// // function to write README file
// function writeToFile(fileName, data) {
// }

// function to initialize program
async function init() {
try {
    const answer = await promptUser();
    console.log(answer);

    const readMe = generateMarkdown(answer);

    await writeFileAsync("README-Test.md", readMe);

    console.log("successfully wrote to README-Test.md");
}
catch (err) {
    console.log(err);
}

}

init();

