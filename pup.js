const user = "0KF91A766"
const password = "6rvMVT&#H3xqXrJ"
const pin = "9463"

const puppeteer = require('puppeteer');

async function loginWithPuppeteer(user, password, pin) {
    const browser = await puppeteer.launch({ headless: false }); // Set headless to false for testing
    const page = await browser.newPage();

    try {
        await page.goto('https://www.paycomonline.net/v4/ee/web.php/app/login',);

        await page.waitForSelector('[name="username"]', { visible: true })

        // Fill in the user and password fields (update selectors as needed)
        await page.type('[name="username"]', user); // Replace "username" with the actual name attribute of the user input
        await page.type('[name="userpass"]', password); // Replace "password" with the actual name attribute of the password input
        await page.type('[name="userpin"]', pin); // Replace "password" with the actual name attribute of the password input

        // Click the login button (update selector as needed)
        await page.click('[name="submit"]'); // Update this selector as needed

        // Wait for navigation or a specific element to confirm login success
        await page.waitForNavigation();

        console.log('Login successful');

        // Add any additional actions after login here

    } catch (error) {
        console.error('Error during login:', error);
    } finally {
        await browser.close(); // Close the browser when done
    }
}

// Test the function with sample credentials
export default loginWithPuppeteer(user, password, pin);

