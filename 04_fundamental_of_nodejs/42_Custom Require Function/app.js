const b = loadModule("./math");
console.log(b);

const { sum } = loadModule("./sum");
console.log(sum(1, 2, 3, 4));

function loadModule(path) {
  const fs = require("fs"); //nodjs dont use require it has acces of c++ it uses it own things.
  const vm = require("vm");

  let realPath;
  if (path.endsWith(".js")) {
    realPath = path;
  } else {
    realPath = path + ".js";
  }

  const fileContent = fs.readFileSync(realPath).toString();
  //   console.log(fileContent);

  //module wrapper function
  return (function (modulee) {
    eval(fileContent); //nodjs doesn't use eval it uses vm

    

    // if we use vm.runInThisContext(fileContent) it runs it in global context as seprate using nodejs v8 but if we uses eval it runs in current scope. also eval is so bad and not safe if we use "use strict" it automatically skips eval even if we used it.


    // console.log(send.a)
    return modulee;
  })({});
}
