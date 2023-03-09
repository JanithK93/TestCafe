import { Selector, t } from "testcafe";

class loginPage{
    userName: Selector;
    password: Selector;
    loginBtn: Selector;
    pageName: Selector;
    
    constructor(){
        this.userName = Selector('#user-name');
        this.password = Selector('#password');
        this.loginBtn = Selector('#login-button');
        this.pageName = Selector('.title');
    }

    async loginWebsite(username, password){
        await t
        .typeText(this.userName, username)
        .typeText(this.password, password)
        .click(this.loginBtn)
        .expect(Selector(this.pageName).innerText).eql('Products');
    }
}

export default new loginPage;