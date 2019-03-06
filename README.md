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
-> when creating rules in the eslint: 0 = off, 1 = Warning, 2 = Error, can choose from a list of many rules found online
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

Tips: 
-> all js should be put in a js file 
-> organize directory by features

*PRODUCTION BUILD*
-> the distServer NOT for actual production, it is just usefule for hosting the minified production build LOCALLY for debugging
-> minification: speeds up page loads and saves bandwidth by shortening names, removing comments, unsused code & new line/whitespace when built (does not actually change what is written by us just condenses on build)
-> to switch between the mock Api and production (hard coded data currently): run the app, it will load the prod data, to swtich to mockAPi add "/?useMockApi=true" into the url after 'localhost:3000'

-> scripts to automate the prod build (npm run build)
  -> build runs the build script for prod with the pre and post builds running respective to build
  -> css is bundled in when build is run
-> an html plugin from webpack (found in the webpack.config files) is used to generate html index file based off the src/index.html 
-> the "inject: true" tells the webpack plugin to dynamically add in any necessary script tags 

->Bundle splitting: splitting the bundles so that the user only has to download page specific bundles not all the libraries and everything during page reload
-> vendor.js and all referenced libraries within it will be bundled separately as specified in the webpack.config.prod.js
  -> you could add other bundles in the same manner

-> Cache Busting: save HTTP Requests for up to a year & forces requests for the latest versions
  -> this is done by hashing the bundle file name & generate the file dynamically 
  -> a new hash is created only when a change to the bundle is made

-> Error logging: can sign up for "TrackJS" for free and paste the install lines of code into the head of the html to track

*PRODUCT DEPLOYMENT*
-> Heroku: can go to devcenter.heroku.com to take the first steps to setting up a node.js deployment
  -> follow th setup/deployment steps
  -> use git bash to interact with the heroku CLI commands
  -> usually contains an "app.json" to describe the app and a "Procfile" to tell heroku what command to run
  -> can use surge to host static front end
  -> "npm run deploy" command will run the app at a random url given by surge but also uses the heroku api to get the data
  (must add the heroku url to the distServer for this to work)
  -> Surge allows use of own domain or request a subdomain via command line flag
  -> flow: npm start, npm run build, npm run deploy
