const fs = require("fs");
let f = fs.readFileSync("Day9/input.txt", "utf8").split('\n')


let co_ords = [];

for(const line of f){

    co_ords.push(line.split(',').map(i =>parseInt(i)));


}

function calc_area(a, b){

    if(!a || !b) return 0;

    return (Math.abs(a[0] - b[0])+1) * (Math.abs(a[1] - b[1])+1);

}

function calc_distance(a, b){

    if(a[0] == 0 && a[1] == 0)return 0;

    if(b[0] == 0 && b[1] == 0)return 0;

    if(Math.abs(a[0] - b[0]) == 0)return 0;

    if(Math.abs(a[1] - b[1]) == 0)return 0;

    return Math.sqrt(Math.abs(a[0] - b[0])**2 + Math.abs(a[1] - b[1])**2);
}

let distance_map = new Map();

for(const p1 of co_ords){

    for(const p2 of co_ords){

        const d = calc_distance(p1, p2);

        const prev = distance_map.get(d) && distance_map.get(d).length == 2  ? distance_map.get(d) : 0;

        if(d != 0 && calc_area(p1, p2) > calc_area(prev[0], prev[1])){

            distance_map.set(d, [p1, p2]);

        }

    }

}

const ds = Array.from(distance_map.keys()).sort((a,b) => b - a);

const l = Math.max(...ds);

const co1 = distance_map.get(l)[0];
const co2 = distance_map.get(l)[1];

console.log((Math.abs(co1[0] - co2[0])+1) * (Math.abs(co1[1] - co2[1])+1));