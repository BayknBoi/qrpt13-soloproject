import { Hunter } from "./hunterPage";
const page = new Hunter(); 


test("can click cookie", async () => {
    await page.navigate();
    await page.driver.manage().window();
    await page.click(page.engButton);
    await page.driver.sleep(2000);
    await page.click(page.bigCookie);
    await page.repeatClick(80,page.bigCookie);
    await page.click(page.upgradeButton);
    await page.click(page.upgradeButton2);
    await page.driver.sleep(1000)
    await page.click(page.twitter);
    await page.tabs();
    await page.driver.quit();
    
})