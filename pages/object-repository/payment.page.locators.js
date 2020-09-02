export default {
    accountNameLocator:'//div[@data-test="linkedAccount"]/div[2]/span/img|//div[@data-test="manual"]/div[2]/span',
    amountPoundSymbolLocator:'//span[@data-test="dialPounds"]/preceding-sibling::span',
    amountInPoundsLocator:'//span[@data-test="dialPounds"]',
    amountInPenceLocator:'//span[@data-test="dialPence"]',
    lastPaymentDateLocator:'//div[@data-test="linkedAccount" or @data-test="manual"]/div[4]/span[text()="Was Due"]/following-sibling::span',
    amountPaidInPoundsLocator:'//div[@data-test="linkedAccount" or @data-test="manual"]/div[4]/span[text()="Was Due"]/../preceding-sibling::div/div/span[text()="£"]/following-sibling::span[1]',
    amountPaidInPenceLocator:'//div[@data-test="linkedAccount" or @data-test="manual"]/div[4]/span[text()="Was Due"]/../preceding-sibling::div/div/span[text()="£"]/following-sibling::span[2]',
    outstandingAmountInPoundsLocator:'//div[@data-test="linkedAccount" or @data-test="manual"]/div[4]/span[(text()="Due")]/../preceding-sibling::div/div/span[text()="£"]/following-sibling::span[1]',
    outstandingAmountInPenceLocator:'//div[@data-test="linkedAccount" or @data-test="manual"]/div[4]/span[(text()="Due")]/../preceding-sibling::div/div/span[text()="£"]/following-sibling::span[2]'
}