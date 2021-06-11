const _ = require('lodash');

var clrs = require('./json/colors.json');

let SmallClrsNames = (arr) => {
    result = _(arr)
        .map(_.keys)
        .flatten()
        .filter(x => 6 > x.length)
        .sort()
        .value()
    return result;
}
console.log(SmallClrsNames(clrs))