# js-dev-env
Starter kit for a javascript develop environment with linting, testing, bundling, package manager, web server, automated prod build/test scripts, handle http requests, create mock api's, automated deployment

*EDITORS*
-> Install EditorConfig extension for your Editor

*PACKAGE MANAGER*
-> install node and npm 
(not necessary) -> copy the json from bit.ly/jsdevpackagejson and create a package.json file in the root directory
-> install packages by entering "npm install" into the command line
-> update to the latest packages by using "npm update"
*might be depreciated -> globally install node security project by running "npm install -g nsp"
    -> running "nsp check" will check for any vulnerabilities in the packages 

*DEVELOPMENT WEB SERVER EXPRESS*
-> this server config is found in buildScripts
-> To run it use "node buildScripts/srcServer.js"

*localtunnel*: Shares work in progress by punching a hole in your firewall (so local machine can operate as a web server) and and exposes your local host via a public url 
-> Setup: npm install localtunnel -g
          -start your app
          -run command "lt --port 3000" in second terminal (copy the url and can be viewed by anyone while terminal is running)

