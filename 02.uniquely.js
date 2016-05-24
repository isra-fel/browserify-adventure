module.exports = function (s) {
    var uniq = require('uniq');
    return uniq(s.split(','));
}