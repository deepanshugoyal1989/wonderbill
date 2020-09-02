var {When} = require('cucumber');
import homePage from './../pages/home.page'
import paymentPage from './../pages/payment.page'
import jsonUtil from './../utils/json.util'
import * as constantUtil from './../utils/constants.util'
import jsonHelper from './../helpers/json.helper'


When(/^I collect payment data for each account$/, function () {

    const numOfAccounts = homePage.getTotalNumberOfAccount();
    for(let i=0;i<numOfAccounts;i++) {
       homePage.clickOnAccount(i);
        jsonUtil.initializeEmptyObject();
        jsonUtil.addItemToObject(constantUtil.ACCOUNT_NAME,paymentPage.getAccountName());
        jsonUtil.addItemToObject(constantUtil.MONTHLY_AMOUNT,paymentPage.getAmount());
        jsonUtil.addItemToObject(constantUtil.LAST_PAYMENT_DATE,paymentPage.getLastPaymentDate());
        jsonUtil.addItemToObject(constantUtil.PAID_AMOUNT,paymentPage.getAmountPaid());
        jsonUtil.addItemToObject(constantUtil.OUTSTANDING_AMOUNT,paymentPage.getOutstandingAmount());
        jsonUtil.addObjectToArray();
       paymentPage.goBackToHomePage();
    }

    jsonHelper.jsonString = jsonUtil.getJsonString();

});