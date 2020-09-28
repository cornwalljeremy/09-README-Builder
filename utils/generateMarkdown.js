function generateMarkdown(data) {
  return `# **${data.title}**
  # ${data.name}
  * [Project Description](#about)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  
  ## GitHub username:
  https://github.com/${data.github}
  ### About:
  ${data.about}
  
  
  
  
  
  
  ## License: 
  ![Badge](https://img.shields.io/badge/License-${data.license}-red)

`;
}
// fs.writeFile('./README.md')
// .then(data => console.log(data))
// .catch(err => console.log(err))

module.exports = generateMarkdown;
