const _ = require('lodash');

const { readCsv } = require('./csv');

const GroupsAndStudents = (students, groups) => {
    const groupsObject = _.keyBy(groups, (group) => group.id);
    const getArr = _.flow(
        items => _.map(items, s => ({
            student: s.nameSt,
            age: s.age,
            group: groupsObject[s.idGr].nameGr
        })),
        items => _.orderBy(items, ['group', 'age'], ['asc', 'desc']),
        items => _.map(items, item => ({
            student: item.student,
            group: item.group
        })),
    );
    return getArr(students);
}
const students = readCsv('students');
const groups = readCsv('groups');

console.log(GroupsAndStudents(students, groups));