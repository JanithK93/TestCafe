import { Selector, t } from "testcafe";

class checkoutPage{
    pageHeading: Selector;
    firstName: Selector;
    lastName: Selector;
    zipCode: Selector;
    cancelBtn: Selector;
    continueBtn: Selector;
    finishBtn: Selector;

    checkoutOverviewHeading: Selector;
    paymentInforLabel: Selector;
    paymentInfoText: Selector;
    shippingInforLabel: Selector;
    shippingInforText: Selector;
    priceTotalLabel: Selector;
    priceTotalText: Selector;
    taxText: Selector;
    totalText: Selector;

    constructor(){
        this.pageHeading = Selector('#header_container > div.header_secondary_container > span');
        this.firstName = Selector('#first-name');
        this.lastName = Selector('#last-name');
        this.zipCode = Selector('#postal-code');

        this.cancelBtn = Selector('#cancel');
        this.continueBtn = Selector('#continue');
        this.finishBtn = Selector('#finish');

        this.checkoutOverviewHeading = Selector('#header_container > div.header_secondary_container > span');
        this.paymentInforLabel = Selector('#checkout_summary_container > div > div.summary_info > div:nth-child(1)');
        this.paymentInfoText = Selector('#checkout_summary_container > div > div.summary_info > div:nth-child(2)');
        this.shippingInforLabel = Selector('#checkout_summary_container > div > div.summary_info > div:nth-child(3)');
        this.shippingInforText = Selector('#checkout_summary_container > div > div.summary_info > div:nth-child(4)');
        this.priceTotalLabel = Selector('#checkout_summary_container > div > div.summary_info > div:nth-child(5)');
        this.priceTotalText = Selector('#checkout_summary_container > div > div.summary_info > div.summary_subtotal_label');
        this.taxText = Selector('#checkout_summary_container > div > div.summary_info > div.summary_tax_label');
        this.totalText = Selector('#checkout_summary_container > div > div.summary_info > div.summary_info_label.summary_total_label');
    }

    async verifyPageElements(){
        await t
            .expect(this.pageHeading.innerText).eql('Checkout: Your Information')
            .expect(this.firstName.visible).ok()
            .expect(this.lastName.visible).ok()
            .expect(this.zipCode.visible).ok()
            .expect(this.cancelBtn.exists).ok()
            .expect(this.continueBtn.exists).ok()
    }

    async fillCustomerDetails(randomFirstName, randomLastName, randomZipCode){
        await t
            .typeText(this.firstName, randomFirstName)
            .typeText(this.lastName, randomLastName)
            .typeText(this.zipCode, randomZipCode)
            .click(this.continueBtn);
    }

    async verifyCheckoutOverviewDetails(){
        await t
            .expect(this.checkoutOverviewHeading.innerText).eql('Checkout: Overview')
            .expect(this.paymentInforLabel.innerText).eql('Payment Information')
            .expect(this.paymentInfoText.innerText).eql('SauceCard #31337')
            .expect(this.shippingInforLabel.innerText).eql('Shipping Information')
            .expect(this.shippingInforText.innerText).eql('Free Pony Express Delivery!')
            .expect(this.priceTotalLabel.innerText).eql('Price Total')
            .expect(this.priceTotalText.innerText).eql('Item total: $25.98')
            .expect(this.taxText.innerText).eql('Tax: $2.08')
            .expect(this.totalText.innerText).eql('Total: $28.06');
    }

    async completePurchase(){
        await t
            .click(this.finishBtn);
    }
}
export default new checkoutPage;