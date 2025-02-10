//const { page } = require("../steps/login");

exports.RegisterPom=
class RegisterPom{

constructor(page){  
    this.page=page;
    this.registerLink='https://dsportalapp.herokuapp.com/register';
    this.usrNameField="#id_username";
    this.passwordField = '#id_password1';
    this.confirmPasword = '#id_password2';
    this.clickRegisterBtn = '//input[@value="Register"]'

}

async clickRegisterlink(){
    console.log('click');
    await this.page.goto('https://dsportalapp.herokuapp.com/register');
}
async enterFieldsEmpty(){
    await this.page.locator(this.usrNameField).fill("");
    await this.page.locator(this.passwordField).fill("");
    await this.page.locator(this.confirmPasword).fill("");
}
async clickRegistreBtn(){
    await this.page.locator(this.clickRegisterBtn).click();
   // await this.page.getByRole('input', { type: 'submit' }).click();
   // await page.getByRole('checkbox', { name: 'Subscribe' }).check();
}
// async enterUsrnameField(){
//     await this.page.locator(this.usrNameField).fill("abc");
// }
// async pswdConfirmEmpty(){
//     await this.page.locator(this.usrNameField).fill("abc");
//     await this.page.locator(this.passwordField).fill("abc");
//     await this.page.locator(this.confirmPasword).fill("");
    
// }
// async enterAllFields(){
//     await this.page.locator(this.usrNameField).fill("abc");
//     await this.page.locator(this.passwordField).fill("Test123");
//     await this.page.locator(this.confirmPasword).fill("Test1234");
    
// }
// async enterNumtoFields(){
//     await this.page.locator(this.usrNameField).fill(76543);
//     await this.page.locator(this.passwordField).fill(123465);
//     await this.page.locator(this.confirmPasword).fill(123465);
    
// }
// async enterValidDetails(){
//     await this.page.locator(this.usrNameField).fill("stunningninja");
//     await this.page.locator(this.passwordField).fill("TestWeb@123 ");
//     await this.page.locator(this.confirmPasword).fill("TestWeb@123 ");
    
// }

}