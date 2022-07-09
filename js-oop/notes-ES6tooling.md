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

Webpack

I ran
npm i -g webpack-cli@2.0.14

webpack-cli init -- there is a bug with this .. see:

https://stackoverflow.com/questions/61147439/webpack-cli-init-typeerror-env-run-on-is-not-a-function

run this:
npm i -g webpack webpack-cli @webpack-cli/init@0.2.2
it asked if I wanted to install webpack-cli/generators and I said Y
then run webpack-cli init again

things stopped matching up completely from here.. so I just did my best guesses

    PS C:\Users\Kyle\code\mosh-js\js-oop\webpack-demo> webpack-cli init
    ? Which of the following JS solutions do you want to use? ES6
    ? Do you want to use webpack-dev-server? No
    ? Do you want to simplify the creation of HTML files for your bundle? Yes
    ? Do you want to add PWA support? No
    ? Which of the following CSS solutions do you want to use? none
    ? Do you like to install prettier to format generated configuration? Yes
    ? Pick a package manager: npm
    [webpack-cli] ℹ INFO  Initialising project...

next I ran
npm init --yes

now to bundle.. I ran
npm run build

changed index to point to packed version
opened http://127.0.0.1:5500/js-oop/webpack-demo/index.html to confirm console logged correctly

change package.json build to have -w
run npm run build

now it should be watching

got rid of .js from circle import
