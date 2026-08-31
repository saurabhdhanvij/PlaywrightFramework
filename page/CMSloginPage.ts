import { Locator, Page } from "@playwright/test";

export class CMSloginPage{
page:Page
phoneNumber:Locator
password:Locator
LoginButton:Locator
dashboard:Locator
errorMsg:Locator
PasswordClick:Locator

constructor(page:Page){

    this.page=page
    this.phoneNumber=this.page.getByPlaceholder('Phone Number')
    this.password=this.page.locator('#password')
    this.LoginButton=this.page.getByRole('button', {name:'Login', exact:true}).last()
    this.dashboard=this.page.locator('.cmsui-logo').first()
    this.errorMsg=this.page.locator('#toast-container')
    this.PasswordClick=this.page.getByText('Login With Password ', {exact:true})
}


async LaunchUrl(url:string){

    await this.page.goto(url)


}
async LoginIntoCMS(phoneNumber:string, passsword:string){
    await this.PasswordClick.click()
    await this.phoneNumber.fill(phoneNumber)
    await this.password.fill(passsword)
    await this.LoginButton.click()

    }
}


