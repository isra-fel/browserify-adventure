function parse (str) {
    var arr = [];
    str.split('\n').forEach(function (line) {
        arr.push(JSON.parse(line));
    });
    return arr;
}

function stringify (arr) {
    var str = '';
    var first = true;
    arr.forEach(function (line) {
        if (first) {
            first = false;
            str += JSON.stringify(line);
        }
        else
            str += '\n' + JSON.stringify(line);
    });
    return str;
}

module.exports.parse = parse;
module.exports.stringify = stringify;