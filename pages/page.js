/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {

    /**
     * It will click on any web element
     * @param locator web element
     */
    clickOnObject(locator) {
        try {
            this.waitUntilElementIsDisplayed(locator);
            locator.click();
        } catch (e) {
            browser.log("Error occurred while click on object");
            browser.log("Element : "+locator);
            browser.log("Error : "+e);
            throw new Error(e);
        }

    }

    /**
     * It will wait until the passed web element is displayed
     * @param locator web element
     */
    waitUntilElementIsDisplayed(locator) {
        browser.waitUntil(
            () => locator.isDisplayed(),
            {
                timeoutMsg: "Locator : "+locator+"is not displayed under 5 secs"
            }
        );
    }

    /**
     *
     * @param locator
     */
    clickOnLink(locator) {
        this.clickOnObject(locator);
    }

    /**
     *
     * @param locator
     */
    clickOnButton(locator) {
        this.clickOnObject(locator);
    }

    /**
     *
     * @param locator
     * @param text
     */
    writeToTextBox(locator, text) {
        try {
            this.waitUntilElementIsDisplayed(locator);
            locator.setValue(text);
        } catch (e) {
            browser.log("Error occurred while writing in text box");
            browser.log("Element : " + locator);
            browser.log("Error : " + e);
        }
    }

    /**
     *
     * @param locator
     * @returns {Promise<string> | string | string} text of web element
     */
    getObjectText(locator) {
        try {
            this.waitUntilElementIsDisplayed(locator);
            return locator.getText();
        } catch (e) {
            browser.log("Error occurred while getting text");
            browser.log("Element : " + locator);
            browser.log("Error : " + e);
        }

    }

    /**
     *
     * @param locator
     * @param attributeName
     * @returns {Promise<string> | string}
     */
    getAttributeValue(locator, attributeName) {
        try {
            this.waitUntilElementIsDisplayed(locator);
            return locator.getAttribute(attributeName);
        } catch (e) {
            browser.log("Error occurred while getting attribute value");
            browser.log("Element : " + locator);
            browser.log("Error : " + e);
        }
    }

    /**
     *
     * @param milliseconds
     */
    pauseBrowser(milliseconds=5000) {
        browser.pause(milliseconds);
    }

    /**
     *
     * @returns {string}
     */
    getTitle() {
        return browser.getTitle();
    }




}
