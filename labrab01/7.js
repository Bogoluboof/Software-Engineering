var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let lines = [];

rl.on('line', function(line){
    lines.push(line);
});

rl.on('close', () => {
    function number(array) {
        return array[0]
            .split(' ')
            .map(ab => Number(ab))
            .reduce((a, b) => a + b,);
        }
            console.log(number(lines)-5050)
        });