const fs = require("fs");
let f = fs.readFileSync("Day11/input.txt", "utf8").split('\n');

let m = new Map();

for(const line of f){

    m.set(line.split(':')[0], line.split(':')[1].trim().split(' '));

}

let DacSuccessors = new Set();
let fftSuccessors = new Set();


function Count(startNode, endNode, graph, baseNode){

    

    if(startNode == 'out') return 0;

    let paths = graph.get(startNode);

    if(paths && paths.includes(endNode)){

        

        return 1;

    }
    else{

        let total = 0;

        if(paths.includes(endNode)) paths = [endNode];

        paths.forEach(node => {


            if(baseNode == 'svr'){

                if(fftSuccessors.has(node)) return 0;
                else total += Count(node, endNode, graph, 'svr');

            }
            else if(baseNode == 'fft'){
                
                if(DacSuccessors.has(node)) return 0;
                else{
                    fftSuccessors.add(node);
                    total += Count(node, endNode, graph, 'fft')
                }

            }
            else{
                if(baseNode == 'dac') DacSuccessors.add(node);


                total += Count(node, endNode, graph, baseNode)


            }

           
            
        });

        return total;

    }


}


const dacOut = Count('dac', 'out', m, 'dac');
const fftDac = Count('fft', 'dac', m, 'fft');
const svrFft = Count('svr', 'fft', m, 'svr')

console.log(dacOut * fftDac * svrFft);