# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: CMSLoginTest.spec.ts >> login with invalid data
- Location: tests\CMSLoginTest.spec.ts:28:5

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for getByLabel('Login With Password ')

```

# Test source

```ts
  1  | import { Locator, Page } from "@playwright/test";
  2  | 
  3  | export class CMSloginPage{
  4  | page:Page
  5  | phoneNumber:Locator
  6  | password:Locator
  7  | LoginButton:Locator
  8  | dashboard:Locator
  9  | errorMsg:Locator
  10 | PasswordClick:Locator
  11 | 
  12 | constructor(page:Page){
  13 | 
  14 |     this.page=page
  15 |     this.phoneNumber=this.page.getByPlaceholder('Phone Number')
  16 |     this.password=this.page.locator('#password')
  17 |     this.LoginButton=this.page.locator('btn btn-primary login-btn').last()
  18 |     this.dashboard=this.page.locator('.cmsui-logo').first()
  19 |     this.errorMsg=this.page.locator('#toast-container')
  20 |     this.PasswordClick=this.page.getByLabel('Login With Password ')
  21 | }
  22 | 
  23 | 
  24 | async LaunchUrl(url:string){
  25 | 
  26 |     await this.page.goto(url)
  27 | 
  28 | 
  29 | }
  30 | async LoginIntoCMS(phoneNumber:string, passsword:string){
> 31 |     await this.PasswordClick.click()
     |                              ^ Error: locator.click: Target page, context or browser has been closed
  32 |     await this.phoneNumber.fill(phoneNumber)
  33 |     await this.password.fill(passsword)
  34 |     await this.LoginButton.click()
  35 | 
  36 |     }
  37 | }
  38 | 
  39 | 
  40 | 
```