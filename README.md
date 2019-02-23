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
->start script will start the app and lint it ==> "npm start"
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

