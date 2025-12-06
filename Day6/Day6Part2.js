
const fs = require("fs");
let f = fs.readFileSync("Day6/input.txt", "utf8").split('\n');
f = f.map(line => line.trimEnd());


let x_pointer = 0;


for(const line of f){

    if(line.length > x_pointer){

        x_pointer = line.length;

    }

}

for(let y = 0; y < f.length; y++){

    if(f[y].length == x_pointer){

        break;

    }

}

let digits = [];


for(let x = x_pointer - 1; x >= 0; x--){

    let collumn = "";
    let symbol = '';

    for(const line of f){

        if(line.length >= x + 1 && line[x].trim() !== '' && line[x].trim() !== '*' && line[x].trim() !== '+'){

            collumn += line[x];
        }
        else if(line.length >= x + 1 && line[x].trim() !== ''){

            symbol = line[x].trim();

        }

    }


    digits.push([collumn, symbol]);
}


digits.push(['', ''])

let master = [];
let builder = [];

for(let i = 0; i < digits.length; i++){

    const line = digits[i];

    if(line[0] !== ''){

        builder.push(Number(line[0]));

    }
    else{


        master.push([builder, digits[i-1][1]]);
        builder = [];

    }

}


function evaluate(numlist, op) {
    let total = 0;
    switch (op) {
        case '+':
            for (const num of numlist) {
                total += num;
            }
            return total;
        case '*':
            total = 1;
            for (const num of numlist) {
                total *= num;
            }
            return total;
        default:
            return 0;
    }
}

let grandTotal = 0;

for(const problem of master){

    grandTotal += evaluate(problem[0], problem[1]);

}
console.log(grandTotal);

