const { clear } = require('console');
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');

const writeToFile = fileContent => {
  console.log(writeToFile)
  return new Promise((resolve, reject) => {
    fs.writeToFile('./README.md', fileContent, err => {
      if(err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: 'File Created'
      })
    })
  })
  
}

// // function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  

`;

}
writeToFile('./README.md')
.then(data => console.log(data))
.catch(err => console.log(err))


module.exports = generateMarkdown;
