const replaceAll = require('./replace-all');
class CurrencyFormatter{
    formatCurrencyToNumber(currString){
        console.log('curr string :', currString)
        return parseFloat( replaceAll(currString.replace('$',''),',',''));
    }

    formatNumberToCurrency(num){
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
          }).format(num);  
    }

} module.exports = new CurrencyFormatter();