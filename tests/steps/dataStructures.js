const { Given, When, Then } = require("@cucumber/cucumber");

const { chromium, expect } = require("@playwright/test");
const { readExcel } = require('../utils/excelReading');

//const { DataStructuresPom } = require('../pages/DataStructuresPom');


Given('User Clicks on {string} Button on  {string}', async function (string, string2) {
  //let dsPOM = new DataStructuresPom(this.page);
  await this.dsPOM.clickGetStartedlink();
  //await this.page.waitForTimeout(2000);


});



Then('The user should land in {string} Page', async function (string) {
  await expect(this.page).toHaveURL("https://dsportalapp.herokuapp.com/data-structures-introduction/");
  await expect(this.page).toHaveTitle(string);
});


When('The user clicks {string} button on Data Structures-Introduction page', async function (string) {
  await this.dsPOM.clickTimeComplexlink();
  //await this.page.waitForTimeout(2000);
});


Then('User will be redirected to {string} page', async function (string) {
  await expect(this.page).toHaveURL("https://dsportalapp.herokuapp.com/data-structures-introduction/time-complexity/");
  await expect(this.page).toHaveTitle(string);
});


When('The user clicks {string} button on Time Complexity page', async function (string) {
  await this.dsPOM.clickTryEditor();
  
});


Then('The user should be redirected to a page having an tryEditor with a Run button to test', async function () {
  await expect(this.page.locator(this.dsPOM.DSTryEditorTextBox)).toBeVisible();
  await expect(this.page.locator(this.dsPOM.DSTryEditorRunBtn)).toBeEnabled();
});



When('The user enters Python Code into editor and clicks Run button', async function () {
await readExcel(this.page);

await this.dsPOM.clickTryEditorRunBtn();
await this.page.waitForTimeout(3000);
});



Then('User should see the result', async function () {
  await expect(this.page.locator(this.dsPOM.DSTryEditorResult)).toHaveText('27');
});




When('The user naviagtes back and clicks the {string} link on left side of page', async function (string) {
  await this.page.goBack();
  await this.dsPOM.clickDSPracticeQuestions();

});


Then('The user should be redirected to {string} of Data structures-Introduction', async function (string) {
await expect(this.page).toHaveURL("https://dsportalapp.herokuapp.com/data-structures-introduction/practice");
});


Then('User clicks Sign out', async function () {
  await this.dsPOM.clickSignout();
});