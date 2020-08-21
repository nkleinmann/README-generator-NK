// function to generate markdown for README
function generateMarkdown(data) {
    console.log(data);

    return `# ${data.title}


## ${data.description}
            
## Table of Contents:
1. [Installation](#installation)
1. [Usage](#usage)
1. [Contributing](#contributing)
1. [Tests](#tests)
1. [Questions](#questions)
1. [License](#license)
            
## Installation:
${data.installation}
            
## Usage:
${data.usage}
            
## Contributing:
${data.contributing}
            
## Tests:
${data.tests}
    
## Questions:
Email: ${data.email}
\n
GitHub: 
[${data.github}](https://github.com/${data.github})
\n
${data.questions}

## License:
  ![${data.license}](https://img.shields.io/badge/license-${data.license}-blue)
  `;
}

// exporting function generateMarkdown
module.exports = generateMarkdown;
