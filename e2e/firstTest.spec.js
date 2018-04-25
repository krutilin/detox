const { reloadApp } = require("detox-expo-helpers");

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
