const _ = require('lodash');

const { readCsv } = require('./csv');

const Average = (students) => {
    const sum = _.reduce(students, (sum, student) => {
        return Number(student.age) + sum;
    }, 0);
    return (sum / students.length).toFixed(2);
}
let students = readCsv('students');

console.log(Average(students));