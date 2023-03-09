import { Selector, t } from "testcafe";

class inventoryPage{
    itemJacketName: Selector;
    itemJacketPrice: Selector;
    bikeLightAddToCartBtn: Selector;
    bikeLightRemovetBtn: Selector;
    tshirtAddToCartBtn: Selector;
    tshirtRemoveCartBtn: Selector;
    cartIcon: Selector;
    cartItemCount: Selector;

    constructor(){
        this.itemJacketName = Selector('#item_5_title_link')
                        .child('div');
        this.itemJacketPrice = Selector('#inventory_container')
                                .child('div')
                                .child('div:nth-child(4)')
                                .child('div.inventory_item_description')
                                .child('div.pricebar')
                                .child('div');

        this.bikeLightAddToCartBtn = Selector('#add-to-cart-sauce-labs-bike-light');
        this.bikeLightRemovetBtn = Selector('#remove-sauce-labs-bike-light');
        this.tshirtAddToCartBtn = Selector('#add-to-cart-sauce-labs-bolt-t-shirt');
        this.tshirtRemoveCartBtn = Selector('#remove-sauce-labs-bolt-t-shirt');
        this.cartIcon = Selector('#shopping_cart_container');
        this.cartItemCount = Selector('#shopping_cart_container')
                                .child('a')
                                .child('span')
    }

    async verifyItemNameAndPrice(){
        await t
            .expect(this.itemJacketName.innerText).eql('Sauce Labs Fleece Jacket')
            .expect(this.itemJacketPrice.innerText).eql('$49.99');
    }

    async addItemsToCart(){
        await t
            .click(this.bikeLightAddToCartBtn)
            .click(this.tshirtAddToCartBtn)
            .expect(this.bikeLightRemovetBtn.visible).ok()
            .expect(this.tshirtRemoveCartBtn.visible).ok()
            .expect(this.cartItemCount.innerText).eql('2')
            .click(this.cartIcon)     
    }
}
export default new inventoryPage;