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
    
       // lines[0]
            function sumThree(array) {
            return array[0]
                .split(' ')
                .sort((a, b) => a - b)
                .slice(0, 3)
                .map(function (item) {
  return parseFloat(item)
            })
                .reduce((a, b) => a + b,);
            }
                console.log(sumThree(lines),)
        
});