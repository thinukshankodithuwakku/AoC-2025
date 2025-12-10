const { stringify } = require("querystring");


function reduce_set(target, ws, frequency){

    const literal = Array(target.length).fill(0);

    for(let i = 0; i < target.length; i++){

        for(let j = 0; j < ws.length; j++){

            if(ws[j].includes(i)){

                literal[i] += frequency[j];

            }

        }

        literal[i] = literal[i] % 2;

    }

    return literal.map(n => String(n)).join('');

}



function iterate_by_base(target, ws, base){

    let binary = target.split('').map(char => (char == '#') ? '1' : '0').join('');
    let sum = Infinity;


    c = 0;

    while(c < base ** ws.length){


        const n = (c).toString(base).padStart(ws.length,'0').split('').map(n => Number(n));

        const temp = n.reduce((a,b) => a + b, 0);
        
        const result = reduce_set(target, ws, n);

        if(result == binary && temp < sum) sum = temp;

        c++;

        

    }

    return sum;

}


const fs = require("fs");
let f = fs.readFileSync("Day10/input.txt", "utf8").split('\n')

const data = [];

for(const line of f){

    const target = line.split(']')[0].slice(1);


    const ws = line.split(']')[1].split('{')[0].split(')').map(item => item.trim().slice(1)).filter(item => item !== '').map(item => item.split(',').map(n => Number(n)))

    data.push([target, ws]);
    

}

let total = 0;

for(const item of data){

    total += iterate_by_base(item[0], item[1], 2);

}

console.log(total);
