"use strict";
const fs = require("fs");
const f = fs.readFileSync("Day6/input.txt", "utf8").split('\n').map((line) => line.trim());
let string_split = [];
let problems = new Map();
function evaluate(numlist, op) {
    let total = 0;
    switch (op) {
        case '+':
            for (const num of numlist) {
                total += num;
            }
            return total;
        case '*':
            total = 1;
            for (const num of numlist) {
                total *= num;
            }
            return total;
        default:
            return 0;
    }
}
for (const line of f) {
    const toAdd = line.split(" ").filter((i) => i.trim() != "");
    string_split.push(toAdd);
    console.log(toAdd);
}
for (let i = 0; i < string_split[0].length; i++) {
    let numList = [];
    let a = 0;
    while (!isNaN(Number(string_split[a][i]))) {
        numList.push(Number(string_split[a][i]));
        a++;
    }
    problems.set(i, [string_split[a][i], numList]);
}
let grandTotal = 0;
const problemNums = Array.from(problems.keys());
for (const key of problemNums) {
    const sheet = problems.get(key);
    grandTotal += evaluate(sheet[1], sheet[0]);
}
console.log(grandTotal);
