const glpk = require("glpk.js");

fs = require('fs');
let f = fs.readFileSync("Day10/input.txt", "utf8").split('\n');

const data = [];

for(const line of f){

  //Parsing input

  const buttons = line.substring(line.indexOf(']') + 1, line.indexOf('{')).trim().split(' ').map(btn => btn.replace('(', '').replace(')', '').split(',').map(n => Number(n)));
  const target = line.substring(line.indexOf('{') + 1, line.indexOf('}')).split(',').map(n => Number(n));


  data.push([buttons, target]);

}

function MK_System(item){

  const vars = [];

  for(let i = 97; i < 97 + item[0].length; i++){

    vars.push(String.fromCharCode(i));

  }

  let relevant_vars = [];
  const val_to_expr = [];

  for(let i = 0; i < item[1].length; i++){

    relevant_vars = [];

    for(let j = 0; j < item[0].length; j++){

      if(item[0][j].includes(i)){

        relevant_vars.push(vars[j]);

      }

    }


    val_to_expr.push({
      val: item[1][i],
      vars: relevant_vars
    });

  }



  return {
    eqtns: val_to_expr,
    vars: vars,
  };

}


(async () => {
  const GLPK = await glpk();

  function solve(item){

    const info = MK_System(item);

    
    const problem = {

      objective: {

        direction: GLPK.GLP_MIN,
        name: "sum",
        vars: info.vars.map(v => ({ name: v, coef: 1 })),
      },

      subjectTo: 

        info.eqtns.map(v => ({

          vars: v.vars.map(c => ({name: c, coef: 1})),
          bnds: { type: GLPK.GLP_FX, lb: v.val, ub: v.val },


        }))
      ,

      bounds: info.vars.map(v => ({

        name: v,
        type: GLPK.GLP_LO,
        lb: 0,

      })),

      generals: info.vars,

    }

    return GLPK.solve(problem, {
      msgLevel: 0,
    }).result.z;

  }

  let total = 0;

  for(const item of data){

    total += solve(item);

  }

  console.log(total);
})();

