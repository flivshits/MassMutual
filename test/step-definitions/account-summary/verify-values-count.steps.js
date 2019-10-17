const chai = require('chai');
const assert = chai.assert;
const cucumber = require('cucumber')
const defineStep = cucumber.defineStep;
const accountSummary = require('../../page-objects/account-summary-page');

defineStep(/^I scrape elements for label elements$/, () => {
    compare.source = accountSummary.getAllLabelElements();
});

defineStep(/^I scrape elements for dollar elements$/, () => {
    compare.challenger = accountSummary.getAllTextValueCurrencyElements();
});

defineStep(/^I expect to have the correct count for values on the screen$/, () => {
    assert.equal(compare.source.length, compare.challenger.length);
});
