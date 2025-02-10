const {Given,When,Then}=require("@cucumber/cucumber")
const { chromium, expect } = require("@playwright/test");
Given('The user opens Home Page', async function () {
    
    
    await this.page.goto("https://dsportalapp.herokuapp.com/home");
    await this.page.waitForTimeout(4000);
    //await this.signInPom.signout();
    await expect(this.page).toHaveURL("https://dsportalapp.herokuapp.com/home");
    await expect(this.page).toHaveTitle('NumpyNinja');
});


When('The user clicks {string} drop down', async function (string) {
    await this.stack.clickOnlinks(this.home.hDataStructersDD);
    
});


Then('User should see {int} different data structure entries in that dropdown', async function (int) {
    
        await expect(this.page.locator(this.home.hDataStructersOptions)).toHaveCount(6);
        

});


When('The user selects any data structures item from the drop down without Sign in.', async function () {

    await this.stack.clickOnlinks(this.home.hDataStructersArray);
});


Then('It should alert the user with a message {string}', async function (string) {
   await expect(this.page.locator(this.home.alertMsg)).toHaveText(string);
});


When('The user clicks any of the {string} buttons below the data structures', async function (string) {
    //await this.stack.clickOnlinks(this.graph.GetstartedGraph);
    await this.stack.clickOnlinks(this.graph.GetstartedGraph);
    
   
});


        

When('The user clicks {string}', async function (string) {
    await this.stack.clickOnlinks(this.home.signIn);
    await this.page.waitForTimeout(2000);
});


Then('The user should be redirected to Sign in page', async function () {
    await expect(this.page).toHaveURL("https://dsportalapp.herokuapp.com/login");
    await expect(this.page.locator("//input[@name='username']")).toBeVisible();
    await expect(this.page.locator("//input[@name='password']")).toBeVisible();
    await expect(this.page.locator("//input[@value='Login']")).toBeVisible();
});


When('The user clicks1 {string}', async function (string) {
    await this.stack.clickOnlinks(this.home.register);
    await this.page.waitForTimeout(2000);
});


Then('The user should be redirected to Register form', async function () {
    await expect(this.page).toHaveURL("https://dsportalapp.herokuapp.com/register");
    await expect(this.page.locator("//input[@name='username']")).toBeVisible();
    //await expect(this.page.locator("//input[@name='password']")).toBeVisible();
});