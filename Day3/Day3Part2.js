function search(l, lim){

    let uniqueDigits = [];

    for(const d of l){

        if(!uniqueDigits.includes(parseInt(d))){

            uniqueDigits.push(parseInt(d));

        }

    }

    uniqueDigits = uniqueDigits.sort((a,b) => b - a);



    for(const d of uniqueDigits){



        i = l.indexOf(String(d));

        if(l.length - i >= lim){

            return l.slice(i, l.length);

        }


    }

    return l;

}





function find(l){

    let lm = 12;

    out = "";

    while(out.length < 12){

        const res = search(l, lm);

        out += res[0];
        l = res.slice(1,res.length);
        lm--;

    }

    return parseInt(out);

}

const fs = require("fs");

const f = fs.readFileSync("Day3/input.txt", "utf8").split('\n');

total = 0;

for(const line of f){

    const s = line.trim();


    total += find(s);

}

console.log(total);
