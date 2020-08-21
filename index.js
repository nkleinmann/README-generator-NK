// necessary for inquirer
const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);

// function that asks users questions
function promptUser(answers) {
    return inquirer.prompt(
        // array of questions for user
        [
            {
                type: "input",
                message: "What is the title of the README?",
                name: "title"
            },
            {
                type: "input",
                message: "What is the description of the README?",
                name: "description"
            }
        ])
    }

        // This should be in/from generateMarkdown.js?
        // generates read me template

        function generateReadMe(answers) {
            return  `#${answers.title}

            ###${answers.description}
            
            Table of Contents:
            
            Installation:
            
            Usage:
            
            License:
            
            Contributing:
            
            Tests:
            
            Questions:`
        }
    //     const readMeTemplate =
    //         `#${questions.title}

    //     ###${questions.description}
        
    //     Table of Contents:
        
    //     Installation:
        
    //     Usage:
        
    //     License:
        
    //     Contributing:
        
    //     Tests:
        
    //     Questions:`

    //     console.log(questions)

    // } catch (err) {
    //     console.log(err);
    // }

// }

promptUser().then(function(answers) {
    const text = generateReadMe(answers);
    return writeFileAsync("READEME.md", text);
})
.then(function() {
    console.log("Successfully wrote to ReadMe!");
})
.catch(function(err) {
    console.log(err);
});




function writeREADME(fileData) {
    try {
        fs.writeFile("READMEE.md", readMeTemplate, function (err) {
            if (err) {
                return console.log(err);
            }
            console.log("file written successfully!");
        })
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

//This function is not working
// writeREADME(readMeTemplate);

// function call to initialize program
// init();
