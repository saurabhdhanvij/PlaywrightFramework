import{test, Page} from '@playwright/test'
import { CMSloginPage } from '../page/CMSloginPage'
import { ContentPage } from '../page/ContentPage'
import { LoginPage } from '../page/loginPage'

let content: ContentPage

test.beforeEach(async({page})=>{

    content= new ContentPage(page)
    
    
    




})

test('click on content', async({page})=>{

    await content.contentResourses.click()

    await content.AllVideos.click()
})

