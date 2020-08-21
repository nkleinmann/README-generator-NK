// function to generate markdown for README
function generateMarkdown(data) {
    console.log(data);

    return `# ${data.title}


    ###${data.description}
            
    // ### Table of Contents:
    // [Installation](#installation)
    // [Usage](#usage)
    // [Contributing](#contributing)
    // [Tests](#tests)
    // [Questions](#questions)
    // [License](#license)
            
    ###Installation:
    ${data.installation}
            
    ###Usage:
    ${data.usage}
            
    ###Contributing:
    ${data.contributing}
            
    ###Tests:
    ${data.tests}
    
    ###Questions:
    Email: ${data.email}
    GitHub: 
    ${data.questions}

    // ###License:
  
  `;
  }
  
  module.exports = generateMarkdown;
  