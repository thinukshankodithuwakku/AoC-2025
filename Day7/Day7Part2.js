
let count = 0;

class Beam {

    constructor (grid, x, y){

        this.grid = grid;
        this.x = x;
        this.y = y;

    }

    MK_Beam(map, x, y){

        const y_axis = Array.from(map.keys());
        const x_axis = map.get(0);


        if(x < 0 || y < 0 || y >= y_axis.length || x >= x_axis.length)return;

        
        

        while(map.get(y) && map.get(y)[x] != '^' && y < y_axis.length){
            


            const row = [...map.get(y)];
            row[x] = '|';
            map.set(y, row.join(""));

            y++;

        }

        count+=2;

        if(map.get(y) && map.get(y)[x-1] != '|'){ 
            

            
            this.MK_Beam(map, x-1, y);
        
        }


        if(map.get(y) && map.get(y)[x+1] != '|'){ 
            

            
            this.MK_Beam(map, x+1, y);
        
        }
    }


    STRT_Beam(){

        this.MK_Beam(this.grid, this.x, this.y);

    }

    show_grid(){

        const rows = Array.from(this.grid.keys());


        for(const row of rows){

            console.log(this.grid.get(row), row);

        }

    }

    trace(x, y){

        let parent_count = 0;

        for(let yp = y; yp >= 0; yp--){

            if(this.grid.get(yp) && this.grid.get(yp)[x-1] && this.grid.get(yp)[x-1] == '^'){

                parent_count++

            }

            if(this.grid.get(yp) && this.grid.get(yp)[x+1] && this.grid.get(yp)[x+1] == '^'){

                parent_count++

            }

            if(this.grid.get(yp) && this.grid.get(yp)[x] && this.grid.get(yp)[x] == 'S'){

                return parent_count;

            }

        }

        return parent_count;

    }

    trace_all(){

        let c = 0;
        const y_l = Array.from(this.grid.keys()).length - 1;


        for(let y = y_l; y >= 0; y--){

            

            for(let x = 0; x < this.grid.get(y_l).length; x++){

                if(this.grid.get(y) && this.grid.get(y)[x] && this.grid.get(y)[x] == '|'){

                    c += this.trace(x,y);

                }

            }


        }

        console.log(c);

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

output.STRT_Beam();
output.show_grid();
output.trace_all();
