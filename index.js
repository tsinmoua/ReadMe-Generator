var inquirer = require("inquirer");
var fs = require('fs');


inquirer.prompt(
    [
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
            message: "Are there any installation instructions?",
            default: "npm i"
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
            type: "input",
            name: "test",
            message: "Are there any test instructions?",
            default: "npm test"
        },
        {
            type: "checkbox",
            name: "license",
            message: "Choose a license for your application",
            choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
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
    ]
).then(function (data) {

    // fs.writeFile("ReadMeGenerator.json", JSON.stringify(data, null, '\t'), function (err) {

    //     if (err) {
    //         return console.log(err);
    //     }

    //     console.log("Creating JSON");

    fs.writeFile("README.md", readMeGenerator(data), function (err) {

        if (err) {
            return console.log(err);
        }

        console.log("Creating README");

    });



});

const readMeGenerator = (data) => {
    return `# ${data.title}

## Description
${data.description}

`
}


// });