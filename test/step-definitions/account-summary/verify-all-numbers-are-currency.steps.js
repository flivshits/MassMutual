const chai = require('chai');
const assert = chai.assert;
const cucumber = require('cucumber')
const defineStep = cucumber.defineStep;
const accountSummary = require('../../page-objects/account-summary-page');
const currencyFormatter = require('../../utilities/currency-formatter');

defineStep(/^I scrape all dollar elements for currency$/, () => {
    compare.challenger = accountSummary.getAllTextValueCurrencyElements()
        .map(element => {
            console.log('curr str!!', element.getText())
            return  element.getText();
        });
        console.log('curr str')
})

defineStep(/^I derive their number values$/, () => {
    compare.source = compare.challenger
        .map(currVal => currencyFormatter.formatCurrencyToNumber(currVal));
});

defineStep(/^I convert their numeric values to currency format$/, () => {
    compare.source = compare.source
        .map(numVal => currencyFormatter.formatNumberToCurrency(numVal));
})

defineStep(/^I validate that the original currency value is the same as the new currency value$/, () => {
    let pass = true;
    try {
        for (let i = 0; i < compare.source.length; i++) {
            if(compare.source[i] !== compare.challenger[i]){
                pass = false;
            }
        }
    } catch (e) {
        assert.fail('Meaningful error message')
    }

    assert.isTrue(pass);
})