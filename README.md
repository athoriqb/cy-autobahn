# Autobahn Automation with Cypress and Cucumber

## Requirement
- Google Chrome
- NPM 9.3.1+
- MacOS

## How to Run
- clone this project
- open project to editor (Ex: VS Code)
- open terminal and already set in root folder
- run command `npm install`
- execute command `chmod +x ./cypress/cucumber-json/cucumber-json-formatter`. This is for generate cucumber.json that needed to generate cucumber HTML report. If using another OS, please refer to this [link](https://github.com/cucumber/json-formatter)
- run command `npm run cypress-web` to running the automation. 

Note: When running the cypress automation and have flacky error after running at signup page, that will be cause by the email already used because the email generate random from Generator Mail site

## Structure Project
- `cypress.config.js` for base configuration in cypress framework, including config for base url, default timeout, spec feature locate file path, etc.
- `cucumber-html-report.js` for base configuration generate cucumber html report, including report path, json path, and metedata information
- Folder `report` contains cucumber html report file that will be generate after execute cypress
- Folder `cypress/cucumber-json` contains generate cucumber json file
- Folder `features` contains test file, including feature file, step definition, and page object file. (Important! the feature file name should be exactly same with the folder that contains step definition file, including the step definition file name should be same too)
- Folder `fixture` contains json file that needed for dynamic data that can be used while execute the automation
- Folder `screenshot` contains screenshot file when automation fail
- Folder `support` contains js file that have command cypress, general function or library that can be used while scripting
- Folder `videos` contains video file that recording while cypress running from start until end in headless
