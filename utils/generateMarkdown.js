function generateMarkdown(data) {
  return `# **${data.title}**
  # ${data.name}

  * [Project Description](#about)
  * [Installation](#installation)
  * [Credits](#credits)
  * [License](#license)
  
  ## GitHub username:
  https://github.com/${data.github}
  ### About:
  ${data.about}

  ### Installation:
  ${data.installation}

  ### Credits
  ${data.credits}
  
  
  
  
  
  
  ## License: 
  ![Badge](https://img.shields.io/badge/License-${data.license}-red)

`;
}

module.exports = generateMarkdown;
