import{By}from 'selenium-webdriver';
import{BasePage}from './basePage';

export class Hunter extends BasePage{
    faqlist: By = By.xpath('//*[@id="footer"]/div[1]/div/dl[4]/dd/ul/li[2]/a');


    constructor(){
        super({url:'https://www.oneplus.com/us'});
    };
};
