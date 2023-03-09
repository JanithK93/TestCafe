import { Selector, t } from "testcafe";

class checkoutCompletePage{
    pageHeading: Selector;
    successMsg: Selector;
    descriptionText: Selector;
    redirectBtn: Selector;

    constructor(){
        this.pageHeading = Selector('#header_container > div.header_secondary_container > span');
        this.successMsg = Selector('#checkout_complete_container > h2');
        this.descriptionText = Selector('#checkout_complete_container > div');
        this.redirectBtn = Selector('#back-to-products');
    }

    async verifyPurchaseSuccess(){
        await t
            .expect(this.pageHeading.innerText).eql('Checkout: Complete!')
            .expect(this.successMsg.innerText).eql('Thank you for your order!')
            .expect(this.descriptionText.innerText)
                .eql('Your order has been dispatched, and will arrive just as fast as the pony can get there!')
            .expect(this.redirectBtn.visible).ok();
    }
}
export default new checkoutCompletePage;