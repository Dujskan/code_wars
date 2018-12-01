function getCount(str) {
    var regEx = /[aeiou]/g;
    return str.match(regEx) ? str.match(regEx).length : 0;
}