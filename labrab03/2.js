const _ = require('lodash');

const { readCsv } = require('./csv');

const Average = (students, groups, groupName) => {
    const {id: groupID} = _.find(groups, group => group.nameGr === groupName);
    const Average = students.filter(student => student.idGr === groupID);
    const sum = _.reduce(Average, (sum, student) => Number(student.age) + sum, 0);
    return sum / Average.length;
}
const groups = readCsv('groups');
const students = readCsv('students')

console.log(Average(students, groups, 'ПИб-1'));