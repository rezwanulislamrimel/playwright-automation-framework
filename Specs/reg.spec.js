import {test} from  "@Playwright/test";

import {Registration} from "../PageObject/Registration/RegAction.js";
test.describe ("Evershop Ecommerce Registratin Feature", () =>{
test("successfully register with valid information", async(page) =>{
const registration =new Registration(page);
await page.url("https://demo.evershop.io/");
await registration.clickOnAccountIcon();
await registration.ClickOnCreateAccountLink();
await registration.enterFullName("first Test");
await registration.enterEmail("firsttest@gmail.com");
await registration.enterPassword("password1234@");
await registration.ClickOnSignUpButton();



});
test("Unsuccesfully register with valid information", async (page)=> {});


});
 
