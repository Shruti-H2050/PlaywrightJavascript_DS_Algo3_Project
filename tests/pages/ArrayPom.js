exports.ArrayPom=class ArrayPom{
    constructor(page){
        this.page=page;
        this.GetstartedArray='//a[@href="array"]';
        this.arraysInPython="//a[text()='Arrays in Python']"
        this.arraysUsingList="//a[text()='Arrays Using List']"
        this.arraysBasicOperationsList="//a[text()='Basic Operations in Lists']"
        this.arrayApplication = "//a[text()='Applications of Array']"

    }
    // async clickOnlinks(path){
    //     await this.page.locator(path).click();
    // }
}