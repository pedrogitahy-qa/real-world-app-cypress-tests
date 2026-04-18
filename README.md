# Cypress End-to-End Test Automation — Real World App

![Cypress](https://img.shields.io/badge/Tested%20With-Cypress-04C38E)
![JavaScript](https://img.shields.io/badge/Language-JavaScript-yellow)
![Node.js](https://img.shields.io/badge/Runtime-Node.js-green)

---

## Test Automation Project

This repository contains automated end-to-end test scenarios developed using **Cypress** as part of the QA training program **Guardião da Qualidade (LumeStack)**.

The project is based on the **Real World App**, an open-source banking application simulation designed to practice real-world testing workflows such as authentication validation, user interactions, and financial transactions.

The goal of this project is to demonstrate practical experience with **automated testing**, covering both **positive and negative scenarios** in a realistic application environment.

---

## About the Real World App

The Real World App is an open-source demo application created by the Cypress team to simulate the behavior of a real banking platform. It provides a realistic environment for practicing end-to-end testing workflows involving authentication, account management, and financial transactions.

The application reproduces typical user interactions such as user registration, login validation, transaction flows, and account balance updates. This makes it a practical system for validating automated testing strategies in a scenario that closely resembles real production applications.

Original project repository:

https://github.com/cypress-io/cypress-realworld-app

---

## Testing Approach

The test automation strategy focuses on validating critical user workflows within the Real World App using end-to-end testing. Scenarios are designed to simulate realistic user behavior, ensuring that authentication, account interactions, and transaction processes function correctly across the application.

The automated tests prioritize maintainability and clarity by organizing scenarios into logical test flows and reusing commands where appropriate. This approach helps ensure reliable validation of both positive and negative cases while keeping the test suite scalable and easy to maintain.

---

## Technologies Used

- Cypress
- JavaScript
- Node.js

---

## Test Scenarios Covered

- User sign-up
- Successful login
- Invalid login validation
- Send money
- Send money with insufficient funds
- Transaction history
- New user transaction flow
- Existing user transaction flow

---

## Demonstrated Test Scenarios

Below are demonstrations of the automated end-to-end test scenarios executed with Cypress.

Each scenario represents a real user flow covered by the test suite.

| Positive Flow                     | Negative / Edge Case Flow            |
|----------------------------------|-------------------------------------|
| Successful Login                 | Invalid Login                       |
| Successful Signup                | Invalid Signup                      |
| Send Money (Valid Transaction)   | Send Money (Insufficient Funds)     |
| Transaction History (Existing)   | Transaction History (New User)      |

### Successful Login

Validates login with valid user credentials.
The test ensures that the system authenticates the user and redirects to the dashboard successfully.

![Successful Login](docs/gifs/successful-login.gif)

### Invalid Login
Verifies that the application blocks login attempts with invalid input and displays the correct error messages.

![Invalid Login](docs/gifs/invalid-login.gif)

### Successful Signup

The following demonstration shows the automated user sign-up flow executed with Cypress.  
The test fills the registration form with valid credentials and verifies that the user can successfully create an account.

![Signup](docs/gifs/signup.gif)

### Invalid SignUp

Validates system behavior when invalid credentials are used.
The test verifies that the application prevents authentication and displays the appropriate error message.

![Invalid Credentials](docs/gifs/invalid-credentials.gif)

### Send Money (Valid Transaction)

Validates the money transfer flow between users.
The test ensures that a logged-in user can successfully send money to another registered user.

![Send Money](docs/gifs/send-money.gif)

### Send Money (Insufficient Funds)

This test verifies the application's behavior when a user attempts to send money without sufficient balance.
The expected behavior is that the system should block the transfer and display an appropriate validation message. However, the application incorrectly allows the transaction to proceed, revealing a potential bug in the insufficient funds validation rule.

![Send Money - Insufficient Funds](docs/gifs/send-money-insufficient-funds.gif)

### Transaction History (Existing) 

Validates transaction history and interactions for an existing user.
The test confirms that previously executed transactions are correctly displayed and accessible.

![Transaction History](docs/gifs/transaction-history.gif)

### Transaction History (New User) 

Validates the transaction experience for a newly registered user.
The test ensures that the application correctly handles initial interactions and transaction visibility.

![New User Transaction](docs/gifs/new-user-transaction.gif)

---

## Project Structure

The automation project follows a structured organization to keep tests maintainable and scalable.

The test suite is organized using Cypress with reusable commands and modular test files.


```
real-world-app-cypress-tests
│
├── cypress
│   ├── e2e
│   │   ├── login.cy.js
│   │   ├── signup.cy.js
│   │   ├── transactions.cy.js
│   │   └── transfers.cy.js
│   │
│   ├── fixtures
│   │
│   └── support
│       ├── commands.js
│       └── e2e.js
│
├── cypress.config.js
├── package.json
└── README.md
```

This structure organizes the Cypress test suite following best practices, separating test scenarios, fixtures, and support commands for better maintainability.

---

## How to Run the Tests

This project uses Cypress to execute automated end-to-end tests against the Real World App application.

Follow the steps below to install dependencies and run the test suite locally.

### 1. Clone the repository

```bash
git clone https://github.com/pedrogitahy-qa/real-world-app-cypress-tests
cd real-world-app-cypress-tests
```
### 2. Install dependencies

```bash
npm install
```
### 3. Open Cypress Test Runner

```bash
npx cypress open
```

### 4. Run tests in headless mode

```bash
npx cypress run
```

These commands allow you to execute the complete automated test suite locally against the Real World App using Cypress.

---

## Test Coverage

The automated tests cover the main user flows of the Real World App:

• User registration (sign up)  
• User authentication (valid and invalid login scenarios)  
• Money transfer between users  
• Validation of insufficient balance during transfers  
• Transaction history visualization

These scenarios represent critical user interactions in a financial application and ensure that the core system flows behave as expected.

---

## Automation Strategy

The test suite focuses on validating critical end-to-end user flows using Cypress.

Key aspects of the automation approach include:

• Separation of test scenarios by feature  
• Use of reusable commands to reduce duplication  
• Clear test descriptions to improve maintainability  
• Visual demonstrations (GIFs) to illustrate the executed scenarios

This structure helps maintain readability and scalability as the test suite grows.
