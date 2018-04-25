const { UrlUtils } = require("xdl");
//const { reloadApp } = require("detox-expo-helpers");

let url;
const getAppUrl = async () => {
  if (!url) {
    url = await UrlUtils.constructManifestUrlAsync(process.cwd());
  }

  return url;
};

const reloadApp = async () => {
  let url = await getAppUrl();
  await device.relaunchApp({
    url: "https://exp.host/@y.krutilin/with-detox-tests",
    sourceApp: "host.exp.Exponent",
    launchArgs: { EXKernelDisableNuxDefaultsKey: true }
  });
};

describe("Example", () => {
  function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  beforeEach(async () => {
    await reloadApp();
    await timeout(60000);
  });

  it("should have welcome screen", async () => {
    await expect(element(by.id("welcome"))).toBeVisible();
  });

  it("should show hello screen after tap", async () => {
    await element(by.id("hello_button")).tap();
    await expect(element(by.label("Hello!!!"))).toBeVisible();
  });

  it("should show world screen after tap", async () => {
    await element(by.id("world_button")).tap();
    await expect(element(by.label("World!!!"))).toBeVisible();
  });
});
