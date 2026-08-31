import { Locator,Page } from "@playwright/test"

export class LoginPage{
    page:Page
    email:Locator
    password:Locator
    errorMeesage:Locator
    loginBtn:Locator
    homeIdentifier:Locator
    constructor(page:Page){

        this.page=page
        this.email=this.page.getByPlaceholder('email@example.com')
        this.password=this.page.getByPlaceholder('enter your passsword')
        this.errorMeesage=this.page.locator('#toast-container')
        this.loginBtn=this.page.locator('#login')
        this.homeIdentifier=this.page.locator('[routerlink="/dashboard/myorders"]')


        
    }

    async LaunchUrl(url:string){

        await this.page.goto(url)

    }

    async LoginIntoApplication(username:string,passsword:string){

        await this.email.fill(username)
        await this.password.fill(passsword)
        await this.loginBtn.click()
    }
}