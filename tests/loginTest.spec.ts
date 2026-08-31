import{test, expect} from '@playwright/test'
import { LoginPage } from '../page/loginPage'

const url='https://rahulshettyacademy.com/client/#/auth/login'
let email='saurabh.dhanvij@gmail.com'
let passsword='Test@123'
let errorMeesage="Incorrect email or password."
let invalidPassword="etryeueei"

let lp:LoginPage

test.beforeEach(async ({page})=>{

    lp=new LoginPage(page)
    lp.LaunchUrl(url)
})

    test('login with valid credentials', async({page})=>{

        await lp.LoginIntoApplication(email,passsword)
        await expect(lp.homeIdentifier).toBeVisible()
    })

    test('login with invalid credentials', async({page})=>{

        await lp.LoginIntoApplication(email, invalidPassword)
        await expect(lp.errorMeesage).toBeVisible()
    })
