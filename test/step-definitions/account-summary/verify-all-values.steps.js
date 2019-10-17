const chai = require('chai');
const assert = chai.assert;
const cucumber = require('cucumber')
const defineStep = cucumber.defineStep;
const accountSummary = require('../../page-objects/account-summary-page');
const currencyFormatter = require('../../utilities/currency-formatter');

defineStep(/^I examine their respective attribute: '(.+)'$/, (attribute) => {
    compare.source = compare.source.map(element => element.getAttribute(attribute)
        .substring(element.getAttribute(attribute).lastIndexOf('_') + 1));
    compare.challenger = compare.challenger.map(element => element.getAttribute(attribute)
        .substring(element.getAttribute(attribute).lastIndexOf('_') + 1));
});

defineStep(/^I confirm that the values would produce the correct Total Balance$/, () => {
    let pass = true;
    let pointOfFailure = null;
    for (let i =0; i < compare.source.length; i++){
        if (compare.source[i] !== compare.challenger[i]){
            pass = false;
            pointOfFailure = 'index ' + i + ' with values of ' + compare.source[i]
            + ' and ' + compare.challenger[i];
            break;
        }
    }
    assert.isTrue(pass, 'The id\'s do not allign at ' + pointOfFailure);
});