## AB Tasty - QA Automation Test Suite

## Description

This repository contains automated tests for the AB Tasty login page. The test suite covers key scenarios including successful login, error handling, responsive design, and localization. Due to the lack of working credentials, some functionalities like SSO and MFA could not be fully tested.

## Technologies

- Cypress: Testing framework for end-to-end automation.
- Node.js: Dependency management.
- GitHub Actions/GitLab CI/CD: Automated test execution on merge requests.

## How to Run Tests Locally

- Clone the repository;
- Install dependencies;
- Run tests with Cypress Test Runner: npx cypress open ;
- Select `login.cy.js` from the Test Runner interface to execute the tests.
- Run tests in headless mode: npx cypress run;


## Project Structure

- /cypress/e2e/login.cy.js: Automated tests for the login page.
- /cypress/fixtures/users.json: Test data (valid and invalid users).
- /cypress/support/commands.js: Custom Cypress commands.
- cypress.config.js: Cypress configuration file.

## CI/CD Integration

- This project uses GitHub Actions to automatically run Cypress tests:
- Tests are triggered on:
  - Pull requests targeting the `main` branch.
  - Direct pushes to the `main` branch.
- CI pipeline ensures all critical functionalities are tested before merging.

## Scenarios Covered

- Successful login with valid email and password.
- Error handling:
- Invalid email.
- Invalid password.
- Exceeding login attempt limits.
- Forgot password link redirection.
- Responsive design checks.
- Localization tests:
- French (FR).
- Spanish (ES).
- German (DE).

## Limitations

- Captcha:
- Real Captcha functionality is not accessible for automated testing; only logical scenarios are verified.
- Google Login:
- Tested through mocked API responses (active in the `login.cy.js` file).
- SSO Login:
- Testing could not be performed due to the absence of working credentials.
- MFA Code:
- MFA functionality could not be tested as no working data is available.

## Additional Instructions

- For any questions or suggestions, please contact me at [your email or LinkedIn link].


 
