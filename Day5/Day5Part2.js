

function is_overlap_single(range1, range2){

    if(range1[0] == range2[0] && range1[1] == range2[1]){

        return false;

    }
    else if(range2[0] <= range1[0] && range1[1] <= range2[1]){

        return true;

    }
    else if(range2[0] <= range1[0] && range1[0] <= range2[1]){

        return true;

    }
    else if(range1[0] <= range2[0] && range2[0] <= range1[1]){

        return true;

    }
    else if(range1[0] <= range2[0] && range2[1] <= range1[1]){

        return true;

    }
    else{

        return false;

    }


}

function merge(range1, range2){



    if(is_overlap_single(range1, range2)){

        const group = [range1[0], range1[1], range2[0], range2[1]];

        const min = Math.min(...group);
        const max = Math.max(...group);

        return [min, max];

    }
    else{

        return range1;

    }

    

}

function is_overlap(dB, a){

    for(const b of dB){

        if(is_overlap_single(a, b)){

            return true;

        }

    }

    return false;

}

function inArr(ar, check){

    for(const item of ar){

        if(item[0] == check[0] && item[1] == check[1]){

            return true;

        }

    }

    return false;


}

function arsEqual(ar1, ar2){

    if(ar1[0] == ar2[0] && ar1[1] == ar1[1]){

        return true;

    }
    else{

        return false;

    }

}

function all_same(ar){

    const base = ar[0];

    for(const i of ar){

        if(!arsEqual(base, i)){

            return false;

        }

    }

    return true;

}

function simplify(dB, range){
    
    const clone = [...dB];

    while(!all_same(clone)){
        
        for(let a = 0; a < dB.length; a++){

            clone[a] = merge(range, dB[a]);
            range = clone[a];
        }

    }



    return range;

}




function merge_all(dB){

    let cleaned = [];

    for(const r of dB){

        if(!inArr(cleaned, simplify(dB, r))){

            cleaned.push(simplify(dB, r));

        }

        

    }
    return cleaned;

}

const fs = require("fs");

const f = fs.readFileSync("Day5/input.txt", "utf8").split('\n');


let dB = [];

for(const line of f){

    const raw = line.split('-');
    dB.push([parseInt(raw[0]), parseInt(raw[1])]);

}



function sortRanges(ranges) {
  return ranges.slice().sort((a, b) => {
    if (a[0] !== b[0]) return a[0] - b[0];  
    return a[1] - b[1];                   
  });
}

dB = sortRanges(dB);
dB = merge_all(dB);

let total = 0;

for(const range of dB){

    const count = (range[1] - range[0]) + 1;
    total += count;

}

console.log(total);




