const fs = require('fs')
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
// const generateMarkdown = require('./utils/generateMarkdown.js');
inquirer.prompt([
  {
    type: "input",
    name: "title",
    message: "Project Title:",
    validate: (projInput) => {
      if (projInput) {
        return true;
      } else {
        console.log("Please enter Your Name");
        return false;
      }
    },
  },
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
        type: 'input',
        name: 'repoName',
        message: 'What is the Repo name?'
      },
      {
        type: "list",
        message: "which license are you using?",
        name: "license",
        choices: ["MIT","Apache","Mozilla", "Bat_Signal", "GNU AGPLv3"]
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
        type: 'confirm',
        name: 'video',
        message: 'Is there a video showing how to use this app? ',
        default: true
      },
      {
        type: 'input',
        name: 'videoLink',
        message: 'Copy paste the link here:',
        when: ({ video }) => {
          if(video) {
            return true;
          } else {
            return false
          }
        }
      },

      {
          type: 'input',
          name: 'installation',
          message: 'Installation instructions.',
          validate: instrucInput => {
            if (instrucInput){
              return true;
            } else {
              console.log('Please enter installation instructions or enter none');
              return false;
            }
          }
      },
      {
        type: 'confirm',
        name: 'confirmCredit',
        message: ' Did anyone help with the project?',
        default: true
        
      },
      {
        type: 'input',
        name: 'credits',
        message: 'Who contributed to this project?',
        when: ({ confirmCredit }) => {
          if(confirmCredit) {
            return true;
          } else {
            return false
          }
        }
      },
]).then(function(data){
    // const fileName = data.title.toLowerCase().split(' ').join('') + '.md';
    // console.log(fileName)
    
    fs.writeFileSync('README.md', generateMarkdown(data),
     
    )})
