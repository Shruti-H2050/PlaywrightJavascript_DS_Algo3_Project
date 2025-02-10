const {Given,When,Then} = require("@cucumber/cucumber")
const {expect} = require("@playwright/test")

 
       
Given('User is on Braustin webapplication and clicks search bar', async function () {
   await this.searchPom.goToUrl();
  await this.searchPom.clickSearchIcon();
  });
       
   
       
  When('User enters {string} to be searched in search bar', async function (string) {
   // String = 'TRU Homes Thrill';
    await this.searchPom.enterSearchItem('RGN The Braustin');
    
         });
       
   
       
         Then('User must see the searched items on the page', async function () {
          await this.searchPom.goToSearchedItemUrl();
         });