const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
const path = require('path');

// array of questions for user
const questions = [
    {
      type: "input",
      name: "name",
      message: "What Is Your Name? (Required)",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter Your Name");
          return false;
        }
      },
    },
    {
        type: "input",
        name: "github",
        message: "enter your github user name (Required)",
        validate: gitInput => {
          if (gitInput){
            return true;
          } else {
            console.log('Please enter Your github Username');
            return false;
          }
        }
      },
      {
        type: 'confirm',
        name: 'confirmAbout',
        message: ' Would You Like to enter some info about the project? ',
        default: true
      },
      {
        type: "input",
        name: "about",
        message: "Provide info about the project",
        when: ({ confirmAbout }) => {
          if(confirmAbout) {
            return true;
          } else {
            return false
          }
        }
      },
      {
          type: 'input',
          name: 'instructions',
          message: 'Installation instructions.',
          validate: instrucInput => {
            if (instrucInput){
              return true;
            } else {
              console.log('Please enter installation instructions or enter none');
              return false;
            }
          }
      }
    ];


 function writeToFile(fileName, data) {
     console.log(writeToFile)
return fs.writeFileSync(path.join(process.cwd(), fileName), data)

}

function init() {
    console.log(init)
    inquirer.prompt(questions).then(response => {
        generateMarkdown.writeToFile('README.md', generateMarkdown(response));
    })
    ;
}
   
init()

// function call to initialize program

