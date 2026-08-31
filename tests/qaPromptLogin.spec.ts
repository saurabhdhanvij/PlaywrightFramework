import{test, expect} from '@playwright/test'
import { QALoginPage } from '../page/qaPrompLoginPage'


const url= 'https://promptqa-shop.web.app/login'
let email= 'demo@promptqa.test'
let passsword= 'Demo@1234'
let errorMeesage='Invalid email or password'
let invalidPassword='rteysysstsy'

let lp:QALoginPage
test.beforeEach(async({page})=>{
    lp= new QALoginPage(page)
    await lp.LaunchUrl(url)

})

test('login valid', async({page})=>{

    await lp.LoginIntoApplication(email,passsword)

    await expect(lp.SuccessLogin).toBeVisible()

})

test('invalid login', async({page})=>{

    await lp.LoginIntoApplication(email,invalidPassword)

    await expect(lp.ErrrorMessage).toBeVisible()
})

