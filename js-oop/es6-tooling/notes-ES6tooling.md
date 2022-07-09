ES6 Tooling (browsers)

Transpiler

- translator/compiler
- give modern JS and convert into ES5

Bundler

- combine all js files into a single file (bundle)
- most popular is webpack
  - minifies and uglifies (shorten identifiers too) - reduce size of bundle to client

Node.js

- needed for NPM
- installs chocolatey, python, VS / c++? redistributable, KB's and other things if you let it

I installed node via download

I ran:
npm init --yes (in new es6-tooling dir)
npm i babel-cli@6.26.0 babel-core@6.26.0 babel-preset-env@1.6.1 --save-dev

babel-cli: run from command line convert/transpile
babel-core: all logic for transpiling implemented
babel-preset-env: plugins for every JS feature.. like let, const.. arrow functions. This is a combination of all the new functions.

--save-dev: save as development dependencies.. purely on dev machine

adds these items:
package.json, package-lock.json - used internally by npm
node_modules - dependencies used by babel.. don't worry about

I added this to package.json in scripts:
"babel":"babel --presets env index.js -o build/index.js"

I added the build folder

I ran:
npm run babel

see index.js in build folder to see transpiled version to es5

You don't want to do this for EVERY js file you have... you want to pack that together first
