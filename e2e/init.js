require("babel-polyfill");
const detox = require("detox");
const config = require("../package.json").detox;

function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

before(async () => {
  await detox.init(config);
});

after(async () => {
  await detox.cleanup();
});
