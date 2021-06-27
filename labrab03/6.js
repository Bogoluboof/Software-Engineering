const _ = require('lodash');

const { readCsv } = require('./csv');

const Hobby = (students, groups, hobbies, merge, groupName) => {
    const {id: groupID} = _.find(groups, group => group.nameGr === groupName);
    const StudentsGroup = students.filter(student => student.idGr === groupID);
    const StudentsGroupObject = _.keyBy(StudentsGroup, (student) => student.id);
    const hobbiesObject = _.keyBy(hobbies, (hobby) => hobby.id);
    let hobbiesAndStudents = [];
    _.forEach(merge, x => {
        if(StudentsGroupObject[x.idStudent]) {
            hobbiesAndStudents.push( {
                student: StudentsGroupObject[x.idStudent].nameSt,
                hobby: hobbiesObject[x.idHobby].name,
            })
        }
    });
    return _.orderBy(hobbiesAndStudents, ['user', 'hobby'], ['asc', 'desc']);
}
const hobbies = readCsv('hobby');
const students = readCsv('students');
const groups = readCsv('groups');
const merge = readCsv('merge');

console.log(Hobby (students, groups, hobbies, merge, 'ПИб-1'));