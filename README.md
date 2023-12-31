     WELCOME TO STOCKHOLM EASY !

## Concept

This application aims to introduce tourists to the city of Stockholm.
You will be able to find in it a user part and an administrator part.
This website is responsive, for mobile and desktop.
The stack used is React/JS, Express, Node, SQL, HTML, SCSS.

## Setup & Use

### Windows users

Be sure to run these commands in a git terminal to avoid [issues with newline formats](https://en.wikipedia.org/wiki/Newline#Issues_with_different_newline_formats):

```
git config --global core.eol lf
git config --global core.autocrlf false
```

### Project Initialization

- In VSCode, install plugins **Prettier - Code formatter** and **ESLint** and configure them
- Clone this repo, enter it
- If you are using `yarn` or `pnpm`, adapt the `config/cli` in `package.json`
- Run command `npm install`
- _NB: To launch the backend server, you'll need an environment file with database credentials. You'll find a template one in `backend/.env.sample`_

## Packages to add 
Frontend :
"@emotion/react": "^11.11.1",
    "@emotion/styled": "^11.11.0",
    "@mui/material": "^5.13.7",
    "@vitejs/plugin-react": "^3.0.1",
    "axios": "^1.4.0",
    "formik": "^2.4.2",
    "material-ui-popup-state": "^5.0.9",
    "openai": "^3.3.0",
    "prop-types": "^15.8.1",
    "react": "^18.2.0",
    "react-toastify": "^9.1.3",
    "uuid": "^9.0.0",
    "yup": "^1.2.0"4
    
Backend : 
  "argon2": "^0.30.3",
    "axios": "^1.4.0",
    "cookie-parser": "^1.4.6",
    "jsonwebtoken": "^9.0.1",
    "mysql2": "^3.5.0",
    "yup": "^1.2.0"

    
### Available Commands

- `migrate` : Run the database migration script
- `dev` : Starts both servers (frontend + backend) in one terminal
- `dev-front` : Starts the React frontend server
- `dev-back` : Starts the Express backend server
- `lint` : Runs validation tools, and refuses unclean code (will be executed on every _commit_)
- `fix` : Fixes linter errors (run it if `lint` growls on your code !)

## FAQ

### Tools

- _Concurrently_ : Allows for several commands to run concurrently in the same CLI
- _Husky_ : Allows to execute specific commands that trigger on _git_ events
- _Vite_ : Alternative to _Create-React-App_, packaging less tools for a more fluid experience
- _ESLint_ : "Quality of code" tool, ensures chosen rules will be enforced
- _Prettier_ : "Quality of code" tool as well, focuses on the styleguide
- _ Airbnb Standard_ : One of the most known "standards", even though it's not officially linked to ES/JS
- _Nodemon_ : Allows to restart the server everytime a .js file is udated

### Deployment

For deployment, you have to go to `secrets` → app `actions` on the github repo to insert via `New repository secret` :

- CAPROVER_BACK_APPNAME : name app on caprover
- CAPROVER_FRONT_APPNAME : name app on caprover
- CAPROVER_PASSWORD : password caprover
- CAPROVER_SERVER : link of domain
