const {Given,When,Then}=require("@cucumber/cucumber")
const { chromium, expect } = require("@playwright/test");

Given('The user clicks on Get started button of Queue after logged in', async function () {
    await this.stack.clickOnlinks(this.queue.GetstartedQueue);
    await expect(this.page).toHaveURL("https://dsportalapp.herokuapp.com/queue/");
    await expect(this.page).toHaveTitle('Queue');
    
  });