const _ = require('lodash');

var clients = require('./json/clients.json'); 

let south = (arr) => {
    result = _(arr)
        .values()
        .flatten()
        .filter(x => 'Кунгур' === x.address.city)
        .sortBy(['gender', 'age', 'name'], ['asc', 'desc', 'asc'])
        .value();
    return result;
}
console.log(south(clients));