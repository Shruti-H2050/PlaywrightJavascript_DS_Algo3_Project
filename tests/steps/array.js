
  const {Given,When,Then}=require("@cucumber/cucumber")
  const { chromium, expect } = require("@playwright/test");

  Given('The user clicks on Get started button of Array after logged in', async function () {
    await this.stack.clickOnlinks(this.array.GetstartedArray);
    await expect(this.page).toHaveURL("https://dsportalapp.herokuapp.com/array/");
  await expect(this.page).toHaveTitle('Array');
  });