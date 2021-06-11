const _ = require('lodash');

var users = require('./json/users.json');

let south = (arr) => {
    result = _(arr)
        .filter(x => 0 > +x.address.geo.lat) 
        .map(x => _.concat(x.username, x.address.city))
        .map(x => _.zipObject(['name', 'city'], x))
        .sortBy('city', 'desc')
        .value();
    return result;
}
console.log(south(users));