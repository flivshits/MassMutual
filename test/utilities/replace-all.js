let replaceAll = (string, stringToBeReplaced, replacementString) => {
    if (string.indexOf(stringToBeReplaced) > -1){
        return replaceAll(string.replace(stringToBeReplaced, replacementString), 
        stringToBeReplaced, 
        replacementString);
    }
    return string;
}
module.exports = replaceAll;