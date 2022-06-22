# AZA Transaction microservice Documentation


# Pre-requisites
- Install [Node.js](https://nodejs.org/en/) version 16.15.
- Install yarn 1.22.17 or higher.



# Getting started
- Clone the repository
```
git clone https://github.com/peterchege/aza-finance.git
```
- Install dependencies
```
cd aza-finance
yarn install
```
- Build and run the project on dev environment
```
yarn dev
```
  Navigate to `http://localhost:3000`

- API Document endpoints
  - `/api/v1/transactions`
  swagger-ui  Endpoint : http://localhost:3000/swagger/


  ## Run app with docker

```

 docker-compose build

 docker-compose up or docker-compose up -d

```
Note: make sure you are on the root file when running the docker commands 




## Project Structure
The folder structure of this app is explained below:

| Name | Description |
| ------------------------ | --------------------------------------------------------------------------------------------- |
| **dist**                 | Contains the distributable (or output) from your TypeScript build.  |
| **node_modules**         | Contains all  npm dependencies                                                            |
| **configuration**        | Application configuration including environment-specific configs 
| **controllers**          | Controllers define functions to serve various express routes. 
| **utils**                | Common libraries to be used across your app.  
| **routes**               | Contain all express routes, separated by module/area of application                       
| **models**               | Models define schemas that will be used in storing and retrieving data from Application database  |
| **app.ts**               | Entry point to express app                                                               |
| **server.ts**            | Port and swagger configuration point                                                               |
| package.json             | Contains npm dependencies as well as [build scripts](#what-if-a-library-isnt-on-definitelytyped)   
| tsconfig.json            | Config settings for compiling source code only written in TypeScript    
