const {Given,When,Then}=require("@cucumber/cucumber")
const { chromium, expect } = require("@playwright/test");
Given('The user clicks on Get started button of LinkedList after logged in', async function () {
  await this.stack.clickOnlinks(this.linkedlist.GetstartedLinkedList);
  await expect(this.page).toHaveURL("https://dsportalapp.herokuapp.com/linked-list/");
  await expect(this.page).toHaveTitle('Linked List');
  
  });