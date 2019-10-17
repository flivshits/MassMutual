const chai = require('chai');
const assert = chai.assert;
const cucumber = require('cucumber')
const defineStep = cucumber.defineStep;
const accountSummary = require('../../page-objects/account-summary-page');
const currencyFormatter = require('../../utilities/currency-formatter');

defineStep(/^I scrape all dollar elements for values$/, () => {
    compare.source = accountSummary.getAllTextValueCurrencyElements().map(stringCurrValue =>
        currencyFormatter.formatCurrencyToNumber(stringCurrValue.getText()));

        console.log('source : ', compare.source)

});

defineStep(/^I expect that all of the numbers are greater than '(.+)'$/, (amount) => {
    let sourceLength = compare.source.length;
    compare.challenger = compare.source.filter(value => value > amount);
    console.log('challenger', compare.challenger);
    assert.isTrue(compare.challenger.length === sourceLength);
})