import Page from './page'
import landingPageLocators from './object-repository/landing.page.locators'

class LandingPage extends Page {

    constructor() {
        super();
    }

    get signInLink() {
        return $(landingPageLocators.signInLinkLocator);
    }

    get acceptCookiesButton() {
        return $(landingPageLocators.acceptCookiesButtonLocator);
    }


    clickOnSignInLink() {
        super.clickOnLink(this.signInLink);
    }

    clickOnAcceptCookiesButton() {
        super.clickOnButton(this.acceptCookiesButton);
    }





}

export default new LandingPage();