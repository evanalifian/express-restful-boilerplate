# Express RESTful API Boilerplate


I make this bolerplate to make RESTful API using [Express.js](https://expressjs.com/). This project includes all i need to make API:


## Depedencies


- **Express**: A Node.js framework.
- **Prisma**: Popular Node.js ORM.
- **Winston**: A library for logging.
- **dotenv**: Module that loads environment variables from a .env file into process.env.


## devDepedencies


- **cross-env**: To run scripts that set and use environment variables across platforms.
- **nodemon**: Simple monitor script for use during development of a Node.js app.


## Getting Started


To work with this boilerplate, you clone this project and then install all depedencies.

```
git clone https://github.com/evanalifian/express-restful-boilerplate.git <opt: project name>
npm install
```


## Folder Structure


```
root-folder
|-- prisma
|   |__ schema.prisma
|-- src
|   |-- controllers
|   |    |__ products-controller.js
|   |-- middlewares
|   |    |__ error-middleware.js
|   |    |__ not-found-middleware.js
|   |-- routes
|   |    |__ products-routes.js
|   |-- services
|   |    |__ products-service.js
|   |-- utils
|   |    |__ response-error.js
|   |-- app.js
|   |-- database.js
|   |-- index.js
|   |-- logger.js
|-- .env
|-- .env.prod
|-- .gitignore
|-- babel-config.json
|-- package-lock.json
|-- package.json
|-- README.json
```

### Folder Structure Explanation

- src/: The main folder for all application source code.
  - controllers/: A place to store controller logic that handles requests and responses.
  - routes/: Place to define application routes.
  - middlewares/: Place for custom middleware (if any).
  - services/: A place for business logic that is not directly related to requests and responses.
  - services/: A place for utilities and helper functions..
  - index.js: The main file that runs the Express server.
  - app.js: Files for setting up and configuring Express app.
- prisma/: Folder for Prisma configuration.
- .env and .env.prod: Files for storing environment variables according to different environments.
- .gitignore: File to ignore certain files/folders in git.
- package.json: Files for defining dependencies and npm scripts.
- README.md: Project documentation.