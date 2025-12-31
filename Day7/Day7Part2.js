
class Beam {

    constructor (grid, x, y){

        this.grid = grid;
        this.x = x;
        this.y = y;
        this.memo = new Map();

    }
    

    Count(x, y){

        const m = this.grid;

        if(!(0 <= x && x < m.get(y).length)) return 0; 
        if(!(0 <= y)) return 0;
        if(y >= [...m.keys()].length) return 1;

        while(m.get(y) && m.get(y)[x] != '^' && y < [...m.keys()].length) y++

        
        if(m.get(y) && m.get(y)[x] == '^'){ 

            let lhs = 0;
            let strPos = `${x - 1}, ${y + 1}`;
            if(this.memo.get(strPos) != 0 && this.memo.get(strPos)) lhs = this.memo.get(strPos);
            else {
                if(0 <= x - 1){

                    lhs = this.Count(x - 1, y + 1);
                    if(lhs != 0) this.memo.set(strPos, lhs);

                }
            }

            let rhs = 0;
            strPos = `${x + 1}, ${y + 1}`;
            if(this.memo.get(strPos) != 0 && this.memo.get(strPos)) rhs = this.memo.get(strPos);
            else {
                if(x + 1 < m.get(y).length){

                    rhs = this.Count(x + 1, y + 1);
                    if(rhs != 0) this.memo.set(strPos, rhs);

                }
            }

            return lhs + rhs;
        }
        else if(y >= [...m.keys()].length){
            this.memo.set(`${x}, ${y}`, 1);
            return 1;
        }

    }
}

const fs = require("fs");
let f = fs.readFileSync("Day7/input.txt", "utf8").split('\n');

let grid = new Map();

for(let i = 0; i < f.length; i++){
    grid.set(i, f[i]);
}

let start_x = grid.get(0).indexOf('S');

const output = new Beam(grid, start_x, 1);
console.log(output.Count(start_x, 0));

