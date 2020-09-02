# Wonder Bill - Home Technical Task

## Objective

This project is developed as a home techincal task for Wonder Bill.

## Overview 

This project uses 

- **_Javascript_** : Programming Language

- **_WebDriverIO_** : Web Automation Tool

- **_Cucumber_** :  BDD Tool

- **_Chai_** : Assertion Library

- **_Page Object Model_** : Design Pattern

- **_Node_** : Build Tool

- **_WebDriver-InBuilt_** : Logging

- **_Allure_** : Reporting Library with screenshot

## Pre-requisites

- Install the latest node version
- Install the latest Chrome Browser version
- Install the latest Firefox Browser version
- Install the latest java version
- Install the latest github version

## How does it work

Page Object model is used with BDD style framework using Cucumber and Webdriverio. Report is generated at the end of execution in report folder.
Screenshot is attached in allure report for any failed test scenario. Logs are generated in logs folder.
 
## How to run it 

1. Open terminal(MacOS/Linux) or command prompt(Windows) according to your operating system

2. Traverse to the directory where you want to clone/download the project

3. Clone [this](https://github.com/deepanshugoyal1989/wonderbill) repository using git on your system

    `git clone https://github.com/deepanshugoyal1989/wonderbill.git`
  
4. Run npm install

5. Run npm test with your credentials for a [website](https://my.wonderbill.com/). 

    `npm test -- --userId='<your email address>' --passwd='<your password>'`

6. Go to your console to see account details printed in json format