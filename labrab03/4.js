const _ = require('lodash');
const { readCsv } = require('./csv');

const Adult = (students, groups, groupName) => {
    const {id: groupID} = _.find(groups, group => group.nameGr === groupName);
    const StudentsGroup = students.filter(student => student.idGr === groupID);
    return  _.filter(StudentsGroup, student => student.age >= 18);
}
const groups = readCsv('groups');
const students = readCsv('students')

console.log(Adult(students, groups, 'ПИб-1'));