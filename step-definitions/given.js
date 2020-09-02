var {Given} = require('cucumber');
import landingPage from './../pages/landing.page';
import loginPage from './../pages/login.page'

Given(/^I login with valid credential$/, function () {
    landingPage.clickOnAcceptCookiesButton();
    landingPage.clickOnSignInLink();
    loginPage.login();
});