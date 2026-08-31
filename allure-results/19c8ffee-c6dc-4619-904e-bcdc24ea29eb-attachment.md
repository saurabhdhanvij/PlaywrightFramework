# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: CMSLoginTest.spec.ts >> login with valid data
- Location: tests\CMSLoginTest.spec.ts:19:5

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for getByLabel('Login With Password ')

```

# Test source

```ts
  1  | import{test, expect} from '@playwright/test'
  2  | import { CMSloginPage } from '../page/CMSloginPage'
  3  | 
  4  | const url= 'https://cmspreprod.devinfinitylearn.in/auth/login'
  5  | 
  6  | let phoneNumber='9970509617'
  7  | let passsword='test111'
  8  | let errorMsg=''
  9  | let invalidPassword='test123'
  10 | 
  11 | let lp:CMSloginPage
  12 | test.beforeEach(async({page})=>{
  13 |     lp= new CMSloginPage(page)
  14 |     lp.LaunchUrl(url)
  15 | })
  16 | 
  17 | 
  18 | 
  19 | test('login with valid data', async({page})=>{
  20 | 
> 21 |     await lp.PasswordClick.click()
     |                            ^ Error: locator.click: Target page, context or browser has been closed
  22 | 
  23 |     await lp.LoginIntoCMS(phoneNumber,passsword)
  24 | 
  25 |     await expect(lp.dashboard).toBeVisible()
  26 | })
  27 | 
  28 | test('login with invalid data', async({page})=>{
  29 | 
  30 |     await lp.LoginIntoCMS(phoneNumber,invalidPassword)
  31 | 
  32 |     await expect(lp.errorMsg).toBeVisible()
  33 | })
  34 | 
```