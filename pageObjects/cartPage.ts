import { Selector } from "testcafe";

class cartPage{
    cartPageHeading: Selector;
    bikeLightName: Selector;
    bikeLightPrice: Selector;
    bikeLightItemCount: Selector;
    bikeLightRemoveBtn: Selector;

    constructor(){
        this.cartPageHeading = Selector('#header_container')
                                    .child('div.header_secondary_container')
                                    .child('span');
        this.bikeLightName = Selector('#item_0_title_link')
                                .child('div');
        this.bikeLightPrice =  Selector('#cart_contents_container > div > div.cart_list')
                                    .child('div:nth-child(3) > div.cart_item_label > div.item_pricebar > div');
        this.bikeLightItemCount = Selector('#cart_contents_container > div > div.cart_list')
                                    .child('div:nth-child(3) > div.cart_quantity');
        this.bikeLightRemoveBtn = Selector('#remove-sauce-labs-bike-light');

        this.tshirtText = Selector('#item_1_title_link > div');
        this.tshirtPrice = Selector('#cart_contents_container > div > div.cart_list')
                                .child('div:nth-child(4) > div.cart_item_label > div.item_pricebar > div');
        this.tshirtItemCount = Selector('#cart_contents_container > div > div.cart_list')
                                    .child('div:nth-child(4) > div.cart_quantity');
        this.tshirtRemoveBtn = Selector('#remove-sauce-labs-bolt-t-shirt');                            

        this.continueShoppingBtn = Selector('#continue-shopping');
        this.checkoutBtn = Selector('#checkout');



    }
}

export default new cartPage;