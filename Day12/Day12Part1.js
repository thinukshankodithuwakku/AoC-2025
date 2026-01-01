const fs = require("fs");
const f = fs.readFileSync("Day12/input.txt", "utf8");
const present_src = f.substring(0, f.indexOf('x') - 2).trim().split('\n');
const region_src = f.substring(f.indexOf('x') - 2, f.length).trim().split('\n');

const presents = [];
let builder = [];

//The parsing process for day 12 was harder than the actual puzzle itself XD


for(const line of present_src){

    if(line.trim() == ''){ 
        presents.push(builder);
        builder = [];
        
    }
    else if(!line.trim().endsWith(':')) builder.push(line.split('').filter(char => char.trim() !== ''));

}

let instructions = [];

for(const line of region_src){

    const dim = line.split(':')[0];
    const width = dim.split('x').map(Number)[0];
    const height = dim.split('x').map(Number)[1];

    const quantity = line.split(':')[1].split(' ').map(Number);

    const region = {

        width: width,
        height: height,
        quantity: quantity,

    }

    instructions.push(region);

}

let total = 0;

for(const instruction of instructions){

    const new_width = Math.floor(instruction.width / 3);
    const new_height = Math.floor(instruction.height / 3);
    const new_area = new_width * new_height;


    if(new_area >= instruction.quantity.reduce((a, b) => a + b)) total++;

}

console.log(total);



