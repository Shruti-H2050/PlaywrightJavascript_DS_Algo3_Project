//const { page } = require("../steps/login");

exports.DataStructuresPom=
class DataStructuresPom{

constructor(page){  
    this.page=page;
    this.GetstartedDS='//a[@href="data-structures-introduction"]';
    this.timeComplexity='//a[@href="time-complexity"]';
    this.DSTryEditor="//a[@href='/tryEditor']";
    this.DSTryEditorTextBox="//div/pre/span[@role='presentation']";
    this.DSTryEditorRunBtn="//button[text()='Run']";
    this.DSTryEditorRunBtn="//button[text()='Run']";
    this.DSTryEditorResult='[id="output"]'
    this.DSPracticeQuestions="//a[text()='Practice Questions']";
    this.SignOut="//a[text()='Sign out']";

}

async clickGetStartedlink(){
    await this.page.locator(this.GetstartedDS).click();
}
async clickTimeComplexlink(){
    await this.page.locator(this.timeComplexity).click();
}
async clickTryEditor(){
    await this.page.locator(this.DSTryEditor).click();
}
async clickTryEditorRunBtn(){
    await this.page.locator(this.DSTryEditorRunBtn).click();
}
async clickDSPracticeQuestions(){
    await this.page.locator(this.DSPracticeQuestions).click();
}
async clickDSPracticeQuestions(){
    await this.page.locator(this.DSPracticeQuestions).click();
}
async clickSignout(){
    await this.page.locator(this.SignOut).click();
}


}