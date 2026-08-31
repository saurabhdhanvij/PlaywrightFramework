import{test, expect} from '@playwright/test'
import { CMSloginPage } from '../page/CMSloginPage'

const url= 'https://cmspreprod.devinfinitylearn.in/auth/login'

let phoneNumber='9970509617'
let passsword='test111'
let errorMsg=''
let invalidPassword='test123'

let lp:CMSloginPage
test.beforeEach(async({page})=>{
    lp= new CMSloginPage(page)
    await lp.LaunchUrl(url)
})



test('login with valid data', async({page})=>{

    await lp.LoginIntoCMS(phoneNumber,passsword)

    await expect(lp.dashboard).toBeVisible()
})

test('login with invalid data', async({page})=>{

    await lp.LoginIntoCMS(phoneNumber,invalidPassword)

    await expect(lp.errorMsg).toBeVisible()
})
