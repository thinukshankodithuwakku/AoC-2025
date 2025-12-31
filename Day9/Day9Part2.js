const fs = require("fs");
let f = fs.readFileSync("Day9/input.txt", "utf8").split('\n')

//Parsing input
const co_ords = f.map(line => ({x: line.split(',').map(Number)[0], y: line.split(',').map(Number)[1]}));

const unique_xs = [...new Set(co_ords.map(c => c.x))].sort((a,b) => a - b);
const unique_ys = [...new Set(co_ords.map(c => c.y))].sort((a,b) => a - b);

const minY = Math.min(...unique_ys);
const maxY = Math.max(...unique_ys);

const validXRanges = new Map();


const vLines = [];



for(const x of unique_xs){

    const points = co_ords.filter(c => c.x == x).map(c => c.y);

    const line = {x: x, start: Math.min(...points), end: Math.max(...points)};
    vLines.push(line);

}


for(let y = minY; y <= maxY; y++){

    let range = [];

    for(const line of vLines) if(line.start <= y && y <= line.end) range.push(line.x);

    range = [Math.min(...range), Math.max(...range)];

    validXRanges.set(y, range);
    
}

function is_valid(p, q){

    if(p.x == q.x || p.y == q.y) return true;

    const minX = Math.min(...[p.x, q.x]);
    const maxX = Math.max(...[p.x, q.x]);
    const minY = Math.min(...[p.y, q.y]);
    const maxY = Math.max(...[p.y, q.y]);

    if(!(validXRanges.get(minY)[0] <= minX && maxX <= validXRanges.get(minY)[1])) return false;
    else if(!(validXRanges.get(maxY)[0] <= minX && maxX <= validXRanges.get(maxY)[1])) return false;

    for(let y = minY; y <= maxY; y++){

        const [left, right] = validXRanges.get(y);

        if(!(left <= minX && maxX <= right)) return false;

    }

    return true;

}

function calc_area(p1, p2){

    return (Math.abs(p1.x - p2.x) + 1) * (Math.abs(p1.y - p2.y) + 1);

}

let biggest_area = -Infinity;

for(const p of co_ords){

    const otr = co_ords.filter(c => !(c.y == p.y && c.x == p.x));

    for(const q of otr){

        const area = calc_area(p,q);

        if(area <= biggest_area) continue;
        if(is_valid(p,q)) biggest_area = area;

    }

}


console.log(biggest_area);
