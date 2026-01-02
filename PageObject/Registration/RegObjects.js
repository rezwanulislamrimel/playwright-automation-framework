import class RegistrationObjects {
    export Constructor(page){
        this.page = page;
        this.AccountIcon=this.page.locator("//a[contains(@href,'account')]");
        this.AccountIcon=this.page.locator("//a[contains(@href,'account')]");
        this.CreateAccountLink= this.page.locator ("// a[contains(@href,'register')]");
        this.FullName=this.page.getByRole("textbox",{name:"full_name"});
        this.Email=this.page.getByRole("textbox",{name:"email"})
        this.Password=this.page.getByRole("textbox",{name:"password"});
        this.SignUp=this.page.getByRole("textbox",{name:"email"})
        this.Password=this.page.getByRole("Button",{name:"Sign Up"});



    }
}