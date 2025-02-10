const { BeforeAll, AfterAll, Before, After, setWorldConstructor,setDefaultTimeout, BeforeStep } = require('@cucumber/cucumber');
const { chromium } = require("@playwright/test");

const {DataStructuresPom}  = require('../pages/DataStructuresPom');
const {StackPom}  = require('../pages/StackPom');
const {LinkedListPom}  = require('../pages/LinkedListPom');
const {QueuePom}  = require('../pages/QueuePom');
const {TreePom}  = require('../pages/TreePom');
const {GraphPom}  = require('../pages/GraphPom');
const {HomePom}  = require('../pages/HomePom');

const {SignInPage} = require("../pages/SignInPage")
const{ArrayPom} = require("../pages/ArrayPom");
const{RegisterPom} = require("../pages/RegisterPom");

const{SearchPom} = require("../pages/SearchPom");

let browser;
let page;
let dsPOM;
let stack;
let linkedlist;
let queue;
let tree;
let graph;
let home;

let signInPom; 
let array;
let registerPom;

let searchPom;

setDefaultTimeout(60 * 1000);
class CustomWorld {
    constructor() {
      this.browser = browser;
      //this.context = context;
      this.page = page;
      this.dsPOM = new DataStructuresPom(this.page);
      this.stack=new StackPom(this.page);
      this.linkedlist=new LinkedListPom(this.page);
      this.queue=new QueuePom(this.page);
      this.tree=new TreePom(this.page);
      this.graph=new GraphPom(this.page);
      this.home=new HomePom(this.page);

      this.signInPom = new SignInPage(this.page);
      this.array = new ArrayPom(this.page);
      this.registerPom = new RegisterPom(this.page);
      
      this.searchPom = new SearchPom(this.page);

    }
  }
  
  setWorldConstructor(CustomWorld);
  
  BeforeAll(async function () {
    //console.log('beforeall')
    browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    page = await context.newPage();
  //   await page.goto("https://dsportalapp.herokuapp.com/login");
  //  await page.locator("//input[@name='username']").fill('sreevidya')
  //  await page.locator("//input[@name='password']").fill('test@123')
  //  await page.locator("//input[@value='Login']").click();
  });
  
  /*AfterAll(async function () {
    await page.close();
    await browser.close();
  });*/
  
  Before(async function () {
  await this.page.goto("https://www.braustin.com/");
 // await this.page.locator("//input[@name='username']").fill('sreevidya')
   //await this.page.locator("//input[@name='password']").fill('test@123')
   //await this.page.locator("//input[@value='Login']").click();
})