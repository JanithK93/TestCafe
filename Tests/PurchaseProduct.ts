import {ClientFunction, Selector} from 'testcafe';

var getLocation;
fixture('Purchase products from the list')
.page('./');

test('Login to the website', async (t) => {
    getLocation = ClientFunction(() => document.location.href);
    console.log("=== Base URL === "+ getLocation);
    await t
    .expect(getLocation()).eql('https://www.saucedemo.com/') // https://www.saucedemo.com/inventory.html
    .typeText('#user-name', 'performance_glitch_user')
    .typeText('#password', 'secret_sauce')
    .click('#login-button')
    .expect(Selector('.title').innerText).eql('Products');
});

// test('Check the price of a product', async (t) => {
//     await t
//     .
// });

