import { Selector, t } from "testcafe";

class inventoryPage{
    itemJacketName: Selector;
    itemJacketPrice: Selector;
    constructor(){
        this.itemJacketName = Selector('#item_5_title_link')
                        .child('div');
        this.itemJacketPrice = Selector('#inventory_container')
                                .child('div')
                                .child('div:nth-child(4)')
                                .child('div.inventory_item_description')
                                .child('div.pricebar')
                                .child('div');
    }

    async verifyItemNameAndPrice(){
        await t
            .expect(Selector(this.itemJacketName).innerText).eql('Sauce Labs Fleece Jacket')
            .expect(Selector(this.itemJacketPrice).innerText).eql('$49.99');
    }
}
export default new inventoryPage;