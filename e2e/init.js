require("babel-polyfill");
const detox = require("detox");
const config = require("../package.json").detox;

function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

before(async () => {
  console.log("before 1m wait");
  await timeout(60000);
  console.log("before detox.init");
  await detox.init(config);
  console.log("detox.init done wait a minute");
  await timeout(60000);
});

after(async () => {
  await detox.cleanup();
});
