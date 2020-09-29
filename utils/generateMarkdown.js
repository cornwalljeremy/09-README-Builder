function generateMarkdown(data) {
  return `# **${data.title}**
  # ${data.name}

  * [Project Description](#about)
  * [Installation](#installation)
  * [Credits](#credits)
  * [License](#license)
  
  ## GitHub Repo for this project:
  [${data.repoName}](https://github.com/${data.github}/${data.repoName})

  ### About:
  ${data.about}
  ${data.videoLink}

  ### Installation:
  ${data.installation}

  ### Credits:
  Made by *Jeremy Cornwall*

  gitHub: ${data.github},

  [Jeremy's Webpage](https://cornwalljeremy.github.io/cornwall-portfolio),

  [LinkedIn](https://www.linkedin.com/in/jeremy-cornwall-a9698448/),

   and ${data.credits} 
  
  
  
  
  
  
  ## License: 
  ![Badge](https://img.shields.io/badge/License-${data.license}-red)

`;
}

module.exports = generateMarkdown;
