const { Given, When, Then } = require("@cucumber/cucumber");

//const { chromium, expect } = require("@playwright/test");

Given('User is on Login Page', async function () {
  await this.page.goto("https://dsportalapp.herokuapp.com/login");
});

  When('user enters username {string} and password {string}', async function(username, password) {
   await this.page.locator("//input[@name='username']").fill('sreevidya')
   await this.page.locator("//input[@name='password']").fill('test@123')
  });

  When('Clicks on Login button', async function() {
    await this.page.locator("//input[@value='Login']").click();
    
  });