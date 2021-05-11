const puppeteer = require('puppeteer');

async function scrapeProduct(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const [el] = await page.$x('//*[@id="app"]/div[2]/div[2]/div/main/div[2]/div[3]/div[3]/div[4]/div[5]/div[1]/div/div[1]/span[2]')
    const src = await el.getProperty('innerText')
    
    
    

    console.log({src})

}

scrapeProduct('https://tracker.gg/valorant/profile/riot/ghanstar%231079/overview?playlist=unrated')