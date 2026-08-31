import {Locator, Page} from '@playwright/test'

export class QALoginPage{

    page:Page
    email:Locator
    password:Locator
    Loginbutton:Locator
    ErrrorMessage:Locator
    SuccessLogin:Locator

   constructor(page:Page){

    this.page=page
    this.email=this.page.getByTestId('login-email')
    this.password=this.page.getByTestId('login-password')
    this.ErrrorMessage=this.page.getByTestId('login-submit-error')
    this.Loginbutton=this.page.getByTestId('login-submit')
    this.SuccessLogin=this.page.getByTestId('nav-profile')

   }

   async LaunchUrl(url:string){

    await this.page.goto(url)
   }
   
   async LoginIntoApplication(username:string, passsword:string){

   await  this.email.fill(username)
   await this.password.fill(passsword)
    await this.Loginbutton.click()

   }
}
