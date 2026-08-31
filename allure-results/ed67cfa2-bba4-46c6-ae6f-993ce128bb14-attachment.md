# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: CMSLoginTest.spec.ts >> login with invalid data
- Location: tests\CMSLoginTest.spec.ts:24:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('#password')

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - banner [ref=e5]:
    - generic [ref=e7]:
      - link [ref=e10] [cursor=pointer]:
        - /url: "#"
      - list [ref=e12]:
        - listitem [ref=e13]:
          - link [ref=e14] [cursor=pointer]:
            - /url: /auth/login
            - button "Login" [ref=e15]
  - generic [ref=e17]:
    - generic [ref=e18]:
      - heading "Welcome to" [level=4] [ref=e19]
      - heading "Infinity Community" [level=2] [ref=e20]
      - heading "Make learning a fun" [level=4] [ref=e22]
    - generic [ref=e24]:
      - heading "LOGIN WITH OTP" [level=3] [ref=e25]
      - generic [ref=e26]:
        - iframe [ref=e29]:
          - generic [ref=f1e6]:
            - text: protected by
            - strong [ref=f1e7]: reCAPTCHA
        - generic [ref=e31]:
          - generic [ref=e32]: "+91"
          - textbox "Phone Number" [active] [ref=e33]: "9970509617"
        - button "Send OTP" [ref=e34] [cursor=pointer]
        - generic [ref=e35] [cursor=pointer]: Login With Password
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
  10 | 
  11 | constructor(page:Page){
  12 | 
  13 |     this.page=page
  14 |     this.phoneNumber=this.page.getByPlaceholder('Phone Number')
  15 |     this.password=this.page.locator('#password')
  16 |     this.LoginButton=this.page.locator('btn btn-primary login-btn').last()
  17 |     this.dashboard=this.page.locator('.cmsui-logo').first()
  18 |     this.errorMsg=this.page.locator('#toast-container')
  19 | }
  20 | 
  21 | 
  22 | async LaunchUrl(url:string){
  23 | 
  24 |     await this.page.goto(url)
  25 | }
  26 | 
  27 | async LoginIntoCMS(phoneNumber:string, passsword:string){
  28 | 
  29 |     await this.phoneNumber.fill(phoneNumber)
> 30 |         await this.password.fill(passsword)
     |                             ^ Error: locator.fill: Test timeout of 30000ms exceeded.
  31 |         await this.LoginButton.click()
  32 |     
  33 | }
  34 | }
  35 | 
  36 | 
  37 | 
```