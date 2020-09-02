import Page from './page';
import homePageLocators from './object-repository/home.page.locators'


class HomePage extends Page {

  get allAccounts() {
      return $$(homePageLocators.accountsListLocator);
  }

  getTotalNumberOfAccount() {
      super.pauseBrowser(2000);
      return this.allAccounts.length
  }

  clickOnAccount(position) {
      let element = this.allAccounts[position];
      super.clickOnLink(element);
  }

}

export default new HomePage();