import { Selector, t } from "testcafe";

class cartPage{
    cartPageHeading: Selector;
    bikeLightName: Selector;
    bikeLightPrice: Selector;
    bikeLightItemCount: Selector;
    bikeLightRemoveBtn: Selector;
    tshirtText: Selector;
    tshirtPrice: Selector;
    tshirtItemCount: Selector;
    tshirtRemoveBtn: Selector;
    continueShoppingBtn: Selector;
    checkoutBtn: Selector;

    constructor(){
        this.cartPageHeading = Selector('#header_container')
                                    .child('div.header_secondary_container')
                                    .child('span');
        this.bikeLightName = Selector('#item_0_title_link')
                                .child('div');
        this.bikeLightPrice =  Selector('#cart_contents_container > div > div.cart_list > div:nth-child(3) > div.cart_item_label > div.item_pricebar > div');
        this.bikeLightItemCount = Selector('#cart_contents_container > div > div.cart_list > div:nth-child(3) > div.cart_quantity');
        this.bikeLightRemoveBtn = Selector('#remove-sauce-labs-bike-light');

        this.tshirtText = Selector('#item_1_title_link > div');
        this.tshirtPrice = Selector('#cart_contents_container > div > div.cart_list > div:nth-child(4) > div.cart_item_label > div.item_pricebar > div');
        this.tshirtItemCount = Selector('#cart_contents_container > div > div.cart_list > div:nth-child(4) > div.cart_quantity');
        this.tshirtRemoveBtn = Selector('#remove-sauce-labs-bolt-t-shirt');                            

        this.continueShoppingBtn = Selector('#continue-shopping');
        this.checkoutBtn = Selector('#checkout');
    }

    async verifyItemsInCart(){
        await t
            .expect(this.cartPageHeading.innerText).eql('Your Cart')
            .expect(this.bikeLightName.innerText).eql('Sauce Labs Bike Light')
            .expect(this.bikeLightPrice.innerText).eql('$9.99')
            .expect(this.bikeLightItemCount.innerText).eql('1')
            .expect(this.bikeLightRemoveBtn.visible).ok()

            .expect(this.tshirtText.innerText).eql('Sauce Labs Bolt T-Shirt')
            .expect(this.tshirtPrice.innerText).eql('$15.99')
            .expect(this.tshirtItemCount.innerText).eql('1')
            .expect(this.tshirtRemoveBtn.visible).ok()

            .expect(this.continueShoppingBtn.exists).ok()
            .expect(this.checkoutBtn.exists).ok()
    }

    async clickCheckout(){
        await t
            .click(this.checkoutBtn);
    }
}

export default new cartPage;