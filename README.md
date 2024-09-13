# Angular Code Quality Enforcer

## Project Overview

This project demonstrates the integration of ESLint and Prettier into an existing Angular project to enforce code quality and consistency. The setup ensures that the codebase adheres to best practices by linting and formatting the codebase, enhancing readability and maintainability.

The primary objectives of the project include:

- Setting up and configuring ESLint and Prettier.
- Fixing linting errors and warnings.
- Integrating Prettier with ESLint.
- Creating custom linting rules.
- Automating linting and formatting using `npm` scripts and a pre-commit hook.

## Features

- **ESLint Integration**: Ensures code adheres to consistent styling rules.
- **Prettier Integration**: Automatically formats the code to maintain a clean and uniform code style.
- **Pre-Commit Hook**: Using Husky, linting and formatting are enforced before each commit.
- **Custom ESLint Rules**: Introduced custom rules to enforce project-specific guidelines.
- **New Angular Component**: A sample component that demonstrates adherence to linting and formatting rules.

## Project Setup

### Prerequisites
- [Node.js](https://nodejs.org/)
- [Angular CLI](https://angular.io/cli)
- A code editor, such as [VS Code](https://code.visualstudio.com/)

### Installation Steps

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/AmaliTech-Training-Academy/linting-formatting-practice.git
   cd linting-formatting-practice

2. **Install Dependencies**:
   Run the following command to install the project dependencies:
   ```bash
   npm install

3. **Set Up ESLint**:
   Install the necessary ESLint packages and set up the `.eslintrc.json` configuration:
   ```bash
   npm install eslint @angular-eslint/eslint-plugin --save-dev

4. **Set Up Prettier**:
   Install Prettier and set up its configuration using .prettierrc:
   ```bash
   npm install prettier eslint-config-prettier eslint-plugin-prettier --save-dev
   
5. **Set Up Husky for Pre-Commit Hook**:
   Install and configure Husky to run linting and formatting before every commit:
   ```bash
   npx husky install
   npx husky add .husky/pre-commit "npm run lint && npm run format"

### Initial number of Errors/warnings
1. 'app-user-list' is not a known element
2. 'type error' in the service file where an interface/type was provided

### solution:
convert the components to standalone components, then you can use it with the module. with the type error, create an interface for the variable 'users' and type it appropriately 

### Linting and Formatting Guide
To use the linting and formatting tools effectively:

1. Run ESLint: Run npm run lint to check for any linting errors in the codebase. 
   Address the issues either manually or using the auto-fix option.

2. Run Prettier: Use npm run format to automatically format the codebase as per the rules 
   defined in the .prettierrc configuration.

3. Pre-commit Hook: The project is configured to run linting and formatting automatically 
   before each commit. Ensure your changes pass these checks before committing.


### New Angular Component
A new Angular component was created to demonstrate adherence to the linting and formatting rules. The component follows all the configured ESLint rules and has been formatted according to the Prettier configuration.

### Conclusion
This project successfully integrates ESLint and Prettier into an Angular environment, ensuring a consistent and high-quality codebase. The pre-commit hook further automates the process, making it easier for developers to maintain code quality.