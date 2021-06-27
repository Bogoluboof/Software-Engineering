const _ = require('lodash');

const { readCsv } = require('./csv');

const Adult = (students) => {
    return _.filter(students, student => student.age >= 18);
}
let students = readCsv('students');

console.log(Adult(students));