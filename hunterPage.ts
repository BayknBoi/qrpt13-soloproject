import{By}from 'selenium-webdriver';
import{BasePage}from './basePage';
const fs = require('fs');

export class Hunter extends BasePage{
    englishButton: By = By.xpath('//*[@id="langSelect-EN"]');
    engButton:By=By.id('langSelect-EN');
    bigCookie:By=By.id('bigCookie');
    twitter:By=By.xpath('//*[@id="topbarTwitter"]');
    statsButton:By=By.xpath('//*[@id="statsButton"]')
    upgradeButton:By=By.xpath('//*[@id="product0"]')
    upgradeButton2:By=By.xpath('//*[@id="upgrade0"]')


    constructor(){
        super({url:'https://orteil.dashnet.org/cookieclicker/'});
    };
    async repeatClick(num, clickThing) {
        for (let i = 0; i < num; i++) {
            await this.click(clickThing); 
        };
    };
    async tabs(){
        let myTabs=await this.driver.getAllWindowHandles();
        await this.driver.switchTo().window(myTabs[1]);
        await this.driver.sleep(1500);
        fs.writeFile(`${__dirname}/xPicture.png`,
        await this.driver.takeScreenshot(),"base64",
        (e)=>{
            if (e)console.log(e);
            else console.log("A picture is worht a thousand words");
        });
        await this.driver.close();
        await this.driver.switchTo().window(myTabs[0]);
    };
};
