const args = require("yargs").argv;
import Page from './page';
import loginPageLocators from './object-repository/login.page.locators'


/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get username() { return $(loginPageLocators.userIdLocator) }
    get password () { return $(loginPageLocators.passwordLocator) }
    get signIn () { return $(loginPageLocators.signInButton) }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    login () {
        super.writeToTextBox(this.username, args.userId );
        super.writeToTextBox(this.password, args.passwd);
        super.clickOnButton(this.signIn);
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    // open () {
    //     return super.open('login');
    // }

    getLoginPageTitle() {
        return super.getTitle();
    }
}

export default new LoginPage();
