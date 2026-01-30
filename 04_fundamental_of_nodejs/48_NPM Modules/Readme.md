crate a two file app.js and maths.js export a variable export const num = 5 form maths.js and import in app.js using like this import num from "maths" usin es6 modules how will you do without "./maths.js" naming extension and file relative path.

if we do import like this import {num} from "maths" the error will say cannot find package.
if we use "maths" rather than "./maths.js" it treat it like package and try to find it in node_modules

what if i create node_modules folder and put maths.js in it will it work no it didn't. but if we use common js and exports using module.exports.num = num and import const {num} = required("maths") it will work so can we say maths.js is now a package no we cant because it is not woking with es6.

but if we create a maths folder in node_modules folder and make our maths.js file name to index.js then we can use it we can say we have created a module but we also need to create a package.json file and make it es6 by definig type module in it if we using es6 modules because by default node_modules uses commonjs. and also we have to define main file as index.js in package.json

now it is npm module just we have not published it on npm rest all good.

but ther is one problem if we change the type of our project it will not work.
we can solve this by creating two file one index.mjs and other index.cjs and in package.json we can define main: "maths.cjs" and module: "maths.mjs"

what is npm modules => modules which are present in node_modules is known as npm modules



## Any module located inside node_modules is called an npm module