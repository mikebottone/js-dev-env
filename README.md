# js-dev-env
Starter kit for a javascript develop environment with linting, testing, bundling, package manager, web server, automated prod build/test scripts, handle http requests, create mock api's, automated deployment

*EDITORS*
-> Install EditorConfig extension for your Editor

*PACKAGE MANAGER*
-> install node and npm 
(not necessary) -> copy the json from bit.ly/jsdevpackagejson and create a package.json file in the root directory
-> install packages by entering "npm install" into the command line
-> update to the latest packages by using "npm update"

*DEVELOPMENT WEB SERVER EXPRESS*
-> this server config is found in buildScripts
-> To run it use "node buildScripts/srcServer.js" or "npm start" in the terminal

*localtunnel* -might not work due to firewall configurations: Shares work in progress by punching a hole in your firewall (so local machine can operate as a web server) and and exposes your local host via a public url 
-> Setup: npm install localtunnel -g
          -start your app
          -run command "lt --port 3000" in second terminal (copy the url and can be viewed by anyone while terminal is running) or "npm run share"

*AUTOMATION - npm scripts in the package.json*
->prestart script will run (displaying a msg in the console) before the start script when "npm start" is entered in the terminal
->start script will start the app, test, and lint it ==> "npm start"
->share script will share the local host on localtunnel ==> "npm run share"
->lint script will check the files for the code standards and syntax specified ==> "npm run lint"

*TRANSPILING -compiles ES6 down to js*
-> Typescript (more like java): superset of javascript which adds in type annotations and interfaces, type safety, enhanced autocomplete, readability
-> Babel (more like JS): written in standardized js, leverage full JS ecosystem, can use experimental features, no type definitions/annotations required, less type related issues

*Bundling*
->packages js into files into module formats readable by browser
-> ES6 Modules: standardized, statically analyzable, easy to read, imports/exports
-> Bundlers: take your js files and package them for target environment
-> Webpack Bundler: intelligently bundles css, images, fonts, HTML; allows for bundle splitting and hot reloading
->requires the webpack.config file

*Linting*
->checks the code at compile time to enforce coding consistency in style and syntax, helps to avoid mistakes
->ESLint is a linter: config format, choose built in rules, choose warnings (can still be committed) vs errors (stop development), plugins
-> eslint-watch to check the files
->can config in separate file or include in package.json
-> when creating rules in the eslint: 0 = off, 1 = Warning, 2 = Error
-> lint script was added to the package.json to provide linting to the files after "esw" (eswatch) => command "npm run lint"

*TESTING and CONTINUOUS INTEGRATION (CI) with Mocha*
-> unit testing: single function/module
-> This repo contains testing with mocha framework, the chai assertion library, JSDOM helper library, runs tests in node upon save/start
-> CI Server: can run automated build after each commit, run test suite, check code coverage, and automate deployment
  ->Travis CI: linux/Mac environment server -- makes sure the build passes not fails
  ->Appveyor: Windows environment server
->CI's will ensure build can run on both platforms, they are free and can be logged in through github

*HTTP CALLS*
-> centalized api calls; one place to configure
-> using "fetch"
-> MOCK API to mock http requests and actions as if it was real data/services
-> Using JSON Schema Faker to generate random data and JSON Server to change the data a save it
  -> mock api's do not require actual http calls, instead they are simulated
  -> libraries used to create fake data include faker.js, chance.js, and randexp.js within JSON Schema Faker
  -> mockDataSchema.js provides the shape of the schema we are using following JSON.schema.org JSON schema standard
  -> can read the docs on JSON Schema Faker for examples
  -> JSON Server will parse the json file created and make a mock api for each top level object found
  -> new fake data will be created after each start of the mock api server
