import { Locator, Page } from "@playwright/test";

export class ContentPage{

    page:Page
    contentResourses:Locator
    AllVideos:Locator


    constructor(page:Page){

        this.page=page
        this.contentResourses=this.page.getByText('Content Resources')
        this.AllVideos=this.page.getByText('All Videos')
    }

    async Videos(){

        await this.contentResourses.click()
        await this.AllVideos.click()
    }
}