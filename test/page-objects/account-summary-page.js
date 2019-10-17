const Element = require('../utilities/element');
class AccountSummaryPage {
    constructor() {

        this.labelTotalValueName = '//label[@id="lbl_ttl_val"]';
        this.textTotalValueCurrency = '//div[@id="txt_ttl_val"]';

        this.labelValueBase = '//label[contains(@id,"lbl_val_")]';
        this.textValueCurrencyBase = '//div[contains(@id,"txt_val_")]';

    }



    getLabelTotalValueNameElement() {
        //Using the wdio framework this would like like:
        //return $(this.labelTotalValueName);
        //But in order to enable this test, I will do the following instead
        return new Element('lbl_ttl_val', 'Value 1');
    }

    
    getAllLabelElements() {
        //let elements = $$(this.labelValueBase);
        let elements = []
        for (let i = 1; i < 6; i++) {
            elements.push( new Element('lbl_val_' + i, 'Value ' + i));
            
        }

        // elements.push($(this.labelTotalValueName));
        elements.push(new Element('lbl_ttl_val', 'Total Balance'));
        console.log('!!! elements : ', elements);
        return elements;
    }

    getTextTotalValueCurrencyElement(){
        //return $(this.textTotalValueCurrency)
        return new Element('txt_ttl_val','$1,000,000.00');
    }

    getAllTextValueCurrencyElements(){
        //let elements = $$(this.textValueCurrencyBase)
        let elements = this.getTextValueCurrencyElementsSansTotalBalance();
        //elements.push($(this.textValueCurrencyBase));
        elements.push(new Element('txt_ttl_val','$1,000,000.00'));
        return elements;
    }

    getTextValueCurrencyElementsSansTotalBalance(){
        //let elements = $$(this.textValueCurrencyBase)
        let elements = [];
        elements.push(new Element('txt_val_1','$122,365.24'));
        elements.push(new Element('txt_val_2','$599.00'));
        elements.push(new Element('txt_val_4','$850,139.99'));
        elements.push(new Element('txt_val_5','$23,329.50'));
        elements.push(new Element('txt_val_6','$566.27'));

        return elements;
    }    




} module.exports = new AccountSummaryPage();

