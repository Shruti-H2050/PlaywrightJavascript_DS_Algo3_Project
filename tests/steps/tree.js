const {Given,When,Then}=require("@cucumber/cucumber")
const { chromium, expect } = require("@playwright/test");

Given('The user clicks on Get started button of Tree after logged in', async function () {
    await this.stack.clickOnlinks(this.tree.GetstartedTree);
    await expect(this.page).toHaveURL("https://dsportalapp.herokuapp.com/tree/");
  await expect(this.page).toHaveTitle('Tree');
  });