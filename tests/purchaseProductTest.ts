import inventoryPage from "../pageObjects/inventoryPage";
import loginPage from "../PageObjects/loginPage";

fixture.only('Purchase products from the list')
    .page('https://www.saucedemo.com/')
    .beforeEach(async (t) => {
        await loginPage.loginWebsite('performance_glitch_user','secret_sauce');
    });

test('Assert item name and price', async (t) => {
    await inventoryPage.verifyItemNameAndPrice();
});

test('Add items to cart', async (t) => {
    await inventoryPage.addItemsToCart();
});

