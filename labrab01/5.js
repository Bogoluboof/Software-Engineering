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
    console.log(
        lines[0]
            .split(' ')
            .map(ab => Number(ab))
            .sort((a,b) => a-b)
            .filter(ab => ab % 10 == 3)[0]
    );
});