import {registrationObjects} from "./RegObjects.js";
export class Registration {

    constructor (test){
this.page= page;
this.locator = new registrationObjects.(page);
    }
    async clickOnAccountIcon(){
        await.this.locator.AccountIcon.click();

    }
    async ClickOnCreateAccountLink(){
        await.this.locator.CreateAccountLink.click();
    }
    async EnterFullName(){
        await.this.locator.FullNameInput.fill(fullname);
    }
    async EnterEmail (){

        await.this.locator.emailInput.fill(email);
    }
    async enterPassword(){
        await.this.locator.passwordInput.fill(password);
    }
    async clickOnSignUpButton(){
        await.this.locator.buttonSignUp.click();      
    }
} 