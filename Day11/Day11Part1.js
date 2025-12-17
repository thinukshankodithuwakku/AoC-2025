let path_counter = 0;

function follow_path(map, start){

    const paths = map.get(start);


    if(paths.length == 1 && paths[0] == "out"){

       //console.log(start, " goes to out")
        path_counter++;
        return "out";

    }
    else{

        if(paths.includes('you')){

            follow_path(map, 'you');

        }
        else{

            for(const path of paths){
                //console.log(start, " goes to ", path)
                follow_path(map, path);
                
            }

        }

        

        return "not-out";

    }

}

const fs = require("fs");
let f = fs.readFileSync("Day11/input.txt", "utf8").split('\n');

let m = new Map();

for(const line of f){

    m.set(line.split(':')[0], line.split(':')[1].trim().split(' '));

}

const keys = Array.from(m.keys()).filter(k => m.get(k).includes('you'));

follow_path(m, keys[0]);

console.log(path_counter);