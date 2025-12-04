const grid = new Map();

function check(g, x, y){

    let count = 0;

    const maxX = (g.get(0)).length - 1;



    if(g.get(y - 1) && g.get(y - 1)[x] == '@'){

        count++; //Above

    }

    if(0 < x && g.get(y - 1) && g.get(y - 1)[x - 1] == '@'){

        count++; //Top-left

    }

    if(x < maxX && g.get(y - 1) && g.get(y - 1)[x + 1] == '@'){

        count++; //Top-right

    }

    

    if(g.get(y + 1) && g.get(y + 1)[x] == '@'){

        count++; //Below

    }

    if(0 < x && g.get(y + 1) && g.get(y + 1)[x - 1] == '@'){

        count++; //Bottom-left

    }

    if(x < maxX && g.get(y + 1) && g.get(y + 1)[x + 1] == '@'){

        count++; //Bottom-right

    }


    if(g.get(y) && g.get(y)[x - 1] == '@'){

        count++; //Left

    }

    if(x < maxX){

        if(g.get(y) && g.get(y)[x + 1] == '@'){

            count++; //Right

        }

    }

    return count;

}

const fs = require("fs");

const f = fs.readFileSync("Day4/input.txt", "utf8").split('\n');

for(let i = 0; i < f.length; i++){

    grid.set(i, f[i]);

}

const y_axis = Array.from(grid.keys());
let count = 0;



for(const y of y_axis){

    for(let x = 0; x < grid.get(0).length; x++){




        if(grid.get(y)[x] == '@' && check(grid, x, y) < 4){


            count++;

        } 

    }

}

console.log(count)
