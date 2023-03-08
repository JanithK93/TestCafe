import loginPage from "../PageObjects/loginPage";

fixture('Login Tests')
.page('https://www.saucedemo.com/');

test('User Login to the website', async (t) => {
    await loginPage.loginWebsite('performance_glitch_user','secret_sauce');
});

