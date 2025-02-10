const {Given,When,Then}=require("@cucumber/cucumber")
const { chromium, expect } = require("@playwright/test");

Given('The user clicks on Get started button of Graph after logged in', async function () {
    await this.stack.clickOnlinks(this.graph.GetstartedGraph);
    await expect(this.page).toHaveURL("https://dsportalapp.herokuapp.com/graph/");
    await expect(this.page).toHaveTitle('Graph');
  });