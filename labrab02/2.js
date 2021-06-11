const _ = require('lodash');

var clrs = require('./json/colors.json');

let rgb = (arr) => {
    result = _(arr)
        .map(x => _.toPairs(x))
        .flatten()
        .map(x => _.concat(x[0], _.dropRight(x[1])))
        .map(x => _.zipObject(['color', 'rgb'], [x[0], _.takeRight(x, 3)]))
        .sortBy('color', 'asc')
        .value();
    return result;
}

console.log(rgb(clrs));