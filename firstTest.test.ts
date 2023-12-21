import { Hunter } from "./hunterPage";
const page = new Hunter(); 


test("Click on the FAQ Page", async () => {
    await page.navigate();
    await page.click(page.faqlist);
    await page.driver.quit();
    
})