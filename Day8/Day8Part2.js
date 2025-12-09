function calc_distance(p1, p2) {

    if(p1.x == 0 && p1.y == 0 && p1.z == 0)return 0;
    if(p2.x == 0 && p2.y == 0 && p2.z == 0)return 0;

    return Math.sqrt(Math.abs(p1.x - p2.x)**2 + Math.abs(p1.y - p2.y)**2 + Math.abs(p1.z - p2.z)**2);

}


function find_closest(co_ords, target) {

    for(let i = 0; i < co_ords.length; i++){
        for(let j = 0; j < co_ords[i].length; j++){

            for(let k = 0; k < co_ords.length; k++){

                for(let l= 0; l < co_ords[k].length; l++){

                    if(calc_distance(co_ords[i][j], co_ords[k][l]) == target && i != k){


                        const merged = [...co_ords[i], ...co_ords[k]];

                        if(i > k){
                            
                            co_ords.splice(i, 1);
                            co_ords.splice(k, 1);
                        }
                        else{
                            
                            co_ords.splice(k, 1);
                            co_ords.splice(i, 1);
                        }

                        co_ords.push(merged);

                        return co_ords;


                    }

                }

            }


        }



    }


    

    return co_ords;


}

const fs = require("fs");
let f = fs.readFileSync("Day8/input.txt", "utf8").split('\n')

let co_ords = [];


for(const line of f){

    const raw = line.split(',').map(n => parseInt(n));
    
    co_ords.push([{x: raw[0], y: raw[1], z: raw[2]}]);

}

const copy = structuredClone(co_ords);

const distances = new Set();

for(const p1 of co_ords){

    for(const p2 of co_ords){

        const d = calc_distance(p1[0], p2[0]);

        if(d != 0)distances.add(calc_distance(p1[0], p2[0]));

        


    }

}


const iter_d = [...distances].sort((a, b) => a - b);
let c = 0;

let remaining = {};

while(!co_ords.some(c => c.length >= f.length)){

    remaining = co_ords.filter(c => c.length == 1)[0][0];

    co_ords = find_closest(co_ords,iter_d[c]);
    c++;
}


let min = Infinity;
let min_pair = {};

for(const co of copy){

    const d = calc_distance(remaining, co[0]);

    if(d != 0 && d < min){

        min = d;
        min_pair = co[0];

    }

}


console.log(remaining.x * min_pair.x);




