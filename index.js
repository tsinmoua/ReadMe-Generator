var inquirer = require("inquirer");
var fs = require('fs');

inquirer.prompt([
    {
        type: "input",
        name: "title",
        message: "What is the name of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Please describe your project."
    },
    {
        type: "input",
        name: "installation",
        message: "Are there any installation instruction commands?",
        default: "npm i"
    },
    {
        type: "input",
        name: "test",
        message: "Are there any test instruction commands?",
        default: "npm test"
    },
    {
        type: "input",
        name: "usage",
        message: "Usage information?",
    },
    {
        type: "input",
        name: "contribution",
        message: "Contribution Guidelines?",
    },
    {
        type: "list",
        name: "license",
        message: "Choose a license for your application",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
    },
    {
        type: "input",
        name: "credits",
        message: "Please list any collaborators that you worked with.",
    },
    {
        type: "input",
        name: "github",
        message: "What is your GitHub username?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?",
    },

]).then(function (data) {

    fs.writeFile("README.md", readMeGenerator(data), function (err) {

        if (err) {
            return console.log(err);
        }
        console.log("Successfully created README.md");

    });
});

const readMeGenerator = (data) => {

    haveLicense = license => {
        if (license !== "None") {
            return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
            
        }
        return ''
    }

    return `
# ${data.title}
${haveLicense(data.license)}

## Description 
${data.description}
<!-- What was your motivation? Why did you build this project? (Note: The answer is not "Because it was a homework assignment.") What problem does it solve? What did you learn? What makes your project stand out? -->

## Table of Contents

* [Installation](#installation)
* [Test Instructions](#test%20instructions)
* [Usage Information](#usage%20information)
* [Contributions](#contributions)
* [License](#license)
* [Credits](#credits)
* [Questions](#questions)

## Installation
To install, run the following in your command line:
\`\`\`
${data.installation}
\`\`\`
<!-- What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running. -->

## Test Instructions
To test, run the following in your command line:
\`\`\`
${data.test}
\`\`\`
<!-- Go the extra mile and write tests for your application. Then provide examples on how to run them. -->

## Usage Information
${data.usage}
<!-- Provide instructions and examples for use. Include screenshots as needed.  -->

## Contributions
${data.contribution}
<!-- If you created an application or package and would like other developers to contribute it, you will want to add guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own. -->

## License
This project is licensed under the ${data.license} license.
<!-- The last section of a good README is a license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, use [https://choosealicense.com/](https://choosealicense.com/) -->

## Credits
${data.credits}
<!-- List your collaborators, if any, with links to their GitHub profiles.
If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.
If you followed tutorials, include links to those here as well. -->

## Questions
If you have any questions, please contact me at ${data.email}.  
You can find more of my work at https://github.com/${data.github}

<!-- ## Badges
![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)

Badges aren't _necessary_, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time. -->

`
}