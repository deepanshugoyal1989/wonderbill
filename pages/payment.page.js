import Page from './page'
import paymentPageLocators from './object-repository/payment.page.locators'


class PaymentPage extends Page {
    get accountName() {
        return $(paymentPageLocators.accountNameLocator);
    }

    get amountPoundSymbol() {
        return $(paymentPageLocators.amountPoundSymbolLocator);
    }

    get amountInPounds() {
        return $(paymentPageLocators.amountInPoundsLocator);
    }

    get amountInPence() {
        return $(paymentPageLocators.amountInPenceLocator);
    }

    get lastPaymentDate() {
        return $(paymentPageLocators.lastPaymentDateLocator);
    }

    get amountPaidInPounds() {
        return $$(paymentPageLocators.amountPaidInPoundsLocator);
    }

    get amountPaidInPence() {
        return $$(paymentPageLocators.amountPaidInPenceLocator);
    }

    get outstandingAmountInPounds() {
        return $$(paymentPageLocators.outstandingAmountInPoundsLocator);
    }

    get outstandingAmountInPence() {
        return $$(paymentPageLocators.outstandingAmountInPenceLocator);
    }

    getAccountName() {
        let accName = super.getObjectText(this.accountName);
        if(accName==="") {
            accName = super.getAttributeValue(this.accountName,'title');
        }

        return accName;

    }

    getAmount() {
        let poundSymbol = super.getObjectText(this.amountPoundSymbol);
        let pounds = super.getObjectText(this.amountInPounds);
        let pence = super.getObjectText(this.amountInPence);
        let amount = poundSymbol+pounds+pence;
        return amount;
    }

    getLastPaymentDate() {
        let lastPayDate = super.getObjectText(this.lastPaymentDate);
        lastPayDate = lastPayDate.toString().trim().replace(" ","");
        lastPayDate = lastPayDate.replace(/st|th/gi," ");
        lastPayDate = lastPayDate+" 2020";
        let payDate = new Date(lastPayDate);
        const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(payDate)
        const mo = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(payDate)
        const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(payDate)
        lastPayDate = `${ye}-${mo}-${da}`;
        return lastPayDate;
    }

    getAmountPaid() {
        let sumPaid = this.calculateAmount(this.amountPaidInPounds, this.amountPaidInPence);
         return "£"+sumPaid.toString();
    }

    getOutstandingAmount() {
       let outstandingSum = this.calculateAmount(this.outstandingAmountInPounds, this.outstandingAmountInPence);
        return "£"+outstandingSum.toString();
    }

    calculateAmount(locatorInPounds, locatorInPence) {
        let sum=0;
        locatorInPounds.forEach(element => {
            sum= sum + +(super.getObjectText(element));
        });
        sum = sum * 100;
        locatorInPence.forEach(element => {
            let elementValue = super.getObjectText(element);
            elementValue = elementValue.toString().replace(".","").trim();
            sum = sum + +(elementValue);
        })
        sum = sum/100;
        return sum.toString();
    }



    goBackToHomePage() {
        browser.back();
    }
}

export default new PaymentPage();