const chai = require('chai');
const assert = chai.assert;
const cucumber = require('cucumber')
const defineStep = cucumber.defineStep;

const accountSummary = require('../../page-objects/account-summary-page');
const currencyFormatter = require('../../utilities/currency-formatter');

defineStep(/^I scrape dollar elements for values sans total balance$/, () => {
    compare.source = accountSummary.getTextValueCurrencyElementsSansTotalBalance()
        .map(elem => elem.getText());
});

defineStep(/^I take the sum for all values$/, () => {
    compare.source = compare.source
        .map(elem => currencyFormatter.formatCurrencyToNumber(elem))
        .reduce((accum, currVal) => (accum + currVal));
});

defineStep(/^I take the value for total balance$/, () => {
    compare.challenger = currencyFormatter
        .formatCurrencyToNumber(accountSummary.getTextTotalValueCurrencyElement().getText());
});

defineStep(/^the sum for all elements and total balance should be equal$/, () =>{
    assert.equal(compare.source, compare.challenger);
});