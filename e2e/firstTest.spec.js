const { blacklistLiveReloadUrl, getAppUrl } = require("detox-expo-helpers");

describe("Root testing suite", () => {
  function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  const delay = 100000;
  beforeEach(async () => {
    console.log("timeout 1, wait for exp start");
    await timeout(120000);

    let url = await getAppUrl();
    console.log("device.launchApp");
    device.launchApp({
      newInstance: true,
      url,
      sourceApp: "host.exp.exponent",
      launchArgs: { EXKernelDisableNuxDefaultsKey: true }
    });
    console.log("wait " + delay + " ms");
    await timeout(delay);
    await blacklistLiveReloadUrl();
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
