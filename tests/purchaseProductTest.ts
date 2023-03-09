import cartPage from "../pageObjects/cartPage";
import checkoutCompletePage from "../pageObjects/checkoutCompletePage";
import checkoutPage from "../pageObjects/checkoutPage";
import inventoryPage from "../pageObjects/inventoryPage";
import loginPage from "../PageObjects/loginPage";
const { faker } = require('@faker-js/faker');

var randomFirstName;
var randomLastName;
var randomZipCode;

fixture.only('Purchase products from the list')
    .page('https://www.saucedemo.com/')
    .beforeEach(async function (t) {
        await loginPage.loginWebsite('performance_glitch_user', 'secret_sauce');
    });

test('Purchase Items from the website', async (t) => {
    
    randomFirstName = faker.name.firstName();
    randomLastName = faker.name.lastName();
    randomZipCode = faker.address.zipCode();

    await inventoryPage.verifyItemNameAndPrice();
    await inventoryPage.addItemsToCart();
    await cartPage.verifyItemsInCart();
    await cartPage.clickCheckout();
    await checkoutPage.verifyPageElements();
    await checkoutPage.fillCustomerDetails(randomFirstName, randomLastName, randomZipCode);
    await checkoutPage.verifyCheckoutOverviewDetails();
    await checkoutPage.completePurchase();
    await checkoutCompletePage.verifyPurchaseSuccess();
});

// test('Add items to cart', async (t) => {
//     await inventoryPage.addItemsToCart();
// });

// test('Assert items in the cart', async (t) => {
//     await cartPage.verifyItemsInCart();
// });

// test('Proceed with checkout', async(t) => {
//     await cartPage.clickCheckout();
// });

// test('Assert checkoutPage', async (t) => {
//     await checkoutPage.verifyPageElements();
// });

// test('Fill customer details to purchase items', async (t) => {
//     randomFirstName = faker.name.firstName();
//     randomLastName = faker.name.lastName();
//     randomZipCode = faker.number.zipCode();
//     await checkoutPage.fillCustomerDetails(randomFirstName, randomLastName, randomZipCode);
// });

// test('Assert checkout overview page', async (t) => {
//    await checkoutPage.verifyCheckoutOverviewDetails();
//    await checkoutPage.completePurchase();
// });

// test('Assert complete purchase response', async (t) => {
//    await checkoutCompletePage.verifyPurchaseSuccess();
// });
