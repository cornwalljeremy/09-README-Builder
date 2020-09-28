const fs = require('fs')
const inquirer = require('inquirer')

inquirer.prompt([
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
]).then(function(data){
    console.log(data)
    return new Promise((resolve, reject) =>{
    fs.writeFile('README.md', data.stringify(),
     err => {
        if(err){
        reject(err);
            return ;
        }
        resolve({
            ok: true,
            message: 'It All Looks Good!'
        })
    }
    )})
})