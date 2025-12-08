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
                        co_ords[i] = [{x: 0, y: 0, z: 0}];
                        co_ords[k] = [{x: 0, y: 0, z: 0}];

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

const distances = new Set();

for(const p1 of co_ords){

    for(const p2 of co_ords){

        const d = calc_distance(p1[0], p2[0]);

        if(d != 0)distances.add(calc_distance(p1[0], p2[0]));

        


    }

}


const iter_d = [...distances].sort((a, b) => a - b);

for(let i = 0; i < 1000; i++){

    co_ords = find_closest(co_ords,iter_d[i]);

}

let ar_lengths = [];

for(const co of co_ords){


    ar_lengths.push(co.length);
  


}

ar_lengths = ar_lengths.sort((a,b) => b - a);



console.log(ar_lengths[0] * ar_lengths[1] * ar_lengths[2])

