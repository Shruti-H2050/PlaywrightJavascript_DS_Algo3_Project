const { setWorldConstructor } = require('@cucumber/cucumber');
const{expect} = require ('@playwright/test');
exports.SearchPom =
class SearchPom{
    constructor(page){
        this.page = page;
        this.searchIcon =  '//form[@role="search"]';
        this.searchBarField = '//input[@placeholder="Search"]';
        
        
    }
   
    async goToUrl(){
        await this.page.goto('https://www.braustin.com/');
    }
    async clickSearchIcon(){
        await this.page.locator(this.searchIcon).click();
    }
    async enterSearchItem(searchItem){
        //await page.getByPlaceholder('Search').fill(searchItem);
         await this.page.locator(this.searchBarField).fill(searchItem);
         await this.page.keyboard.press('Enter');
    }
    async goToSearchedItemUrl(){
        let searchparameter = '[A-Za-z]%20[A-Za-z]%20[A-Za-z]'
        await this.page.goto('https://www.braustin.com/shop/all-models?searchTerm=' +searchparameter);
    }


}