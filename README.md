# wdioBDDFramework
e2e test framework using WDIO-BDD
# Requirements:
- Node version 14 or higher
- Visual code studio
# Quick start
Download the latest stable release here or clone the git repo — git clone https://github.com/grameshbabu89/jsframeworkWDIO.git

Then, Install the dependencies 
    
    npm install

Now you are ready to write your own features.

# Features
- Super simple setup
- Full integration with WebdriverIO
- Integrated with Allure report
# How to write a test
Tests are written in Gherkin syntax that means that you write down what's supposed to happen in a real language. 

All test files are located in ./features/* and have the file ending .feature. 

You will already find some test files in that directory. They should demonstrate, how tests could look like. Just create a new file and write your first test.

Sample site : https://automationteststore.com/

1_Registration.feature

    Feature: New user registration

    Scenario Outline: As a user, I should be able to register as a new customer
        Given I launch the application
        When I click sign in page
        Then I click continue to new registration
        Then I am on the registration page
        Then I enter <Email>, <FirstName>, <LoginName>, <Password> and other mandatory fields then submit
        Then I validate the <FirstName> is displayed in the account section
        Then I logout the application
        Then I close the browser

    Examples:
      | Email                 | FirstName | LoginName | Password |
      | wdiotesting7@test.com | TestUser  | Test0123  | Password |

    Scenario: Another test
      Given ...
      
# How to run the test:

To run your tests just call the WDIO runner:

    $ npm run wdio
  
Make sure you have added the script in the package.json as below
  
    "scripts": {
        "wdio": "wdio run wdio.conf.js" }

Please note The WDIO runner uses the configuration file wdio.conf.js by default.
Define feature and step definition path in the configuration file.
  
    specs: [
        './features/**/*.feature'
    ]
    
    cucumberOpts: {
        require: ['./features/step-definitions/*.js']

# Report:
Specify the report location in the config file.

    reporters: ['spec',['allure', 
            {
                outputDir: 'allure-results'  
            }]]

An Allure report will be generated after execution is completed.

    ./allure-report/index.html
    





