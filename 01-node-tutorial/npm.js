//NPM - Node Package Manager.
//NPM Info - reuse code by other developers (external modules)

// package.json - manifest file (stores important info about project/package)
// To create package.json
"npm init"; // (step by step, press enter to skip)
"npm init -y"; //(everything default)

// http://npmjs.com - use a module if it have many downloads. - trustworthy.

// local dependency - use it only in this particular project
"npm i <packageName>";

// Global dependecy - use it in any project
"npm install -g <packageName>";

//To uninstall
"npm uninstall <packageName>";
// nuclear way - delete node_module file and package-lock.json file. Remove that dependency in package.json.
// Now run
"npm intall"// after installing the modules will be in node_modules folder. // It will install only mentioned modules in dependencies folder.

//why package-lock.json file?
//To store all the versions of the modules and packages. Do not break when the version changes.

// Why we need `package.json`?

// - we need to provide information about project. I has all the dependencies.
// - useful when sharing projects in git and github.
// - In the .gitignore file we can specify the folders /node_module
// - push it
// - when someone taking pull
// - need to run
`npm install`; // So that all the files mentioned in the dependencies will be downloaded

// "scripts": {
//     "start": "node app.js"
// }

//If we define commands on script we can run the commands by
"npm start"(or);
("npm run start");
