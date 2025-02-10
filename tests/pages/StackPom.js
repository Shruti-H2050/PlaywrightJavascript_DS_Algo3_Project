exports.StackPom=class StackPom{
    constructor(page){
        this.page=page;
        this.GetstartedStack='//a[@href="stack"]';
        this.operationsinStack="//a[text()='Operations in Stack']"
        this.implementation="//a[text()='Implementation']"
        this.applications="//a[text()='Applications']"

    }
    async clickOnlinks(path){
        await this.page.locator(path).click();
    }
}