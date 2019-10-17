class Element {
    constructor(id, textValue) {
        this.id = id;
        this.textValue = textValue;
    }

    getText() {
        return this.textValue;
    }

    getAttribute(key){
        return this[key];
    }
} module.exports = Element;