// tables generated from 27-run designs at http://www.stat.ucla.edu/~hqxu/pub/ffd/ffd3a.pdf  
const rgJSON = require("./tables.json");

let twentySevenRunDesignChoice = ["4", "2"];
let designChoice = rgJSON["twentySevenRunDesigns"][twentySevenRunDesignChoice[0]][twentySevenRunDesignChoice[1]];
let designColumns = designChoice["columns"];


let one = [1, 1, 1, 1, 1, 0];
let two = [0, 1, 1, 1, 1, 1];
// let three = [0, 0, 1, 1, 1, 1];
// let four = [2, 2, 2, 2, 2, 0];
// let five = [0, 2, 2, 2, 2, 2];
// let six = [0, 0, 2, 2, 2, 2];

let sumMod3 = function(arr1, arr2) {
  sumArr = arr1.map(function(num, idx) {
    let total = num + arr2[idx];
    let mod3 = total % 3;
    return mod3;
  });
  return sumArr;
};

// gets the inverse by taking three and subtracting the original number
let inverseMod3 = function(arrMod3) {
  inverse_arr = arrMod3.map(function(num, idx) {
    num = num % 3;
    let total = 3 - num;
    let mod3 = total % 3;
    return mod3;
  });
  return inverse_arr;
};

// get the run columns from the 
let getRuns = function() {
  let runCols = designColumns.map(num => rgJSON["runs"][num.toString()]);
  let transposedCols = runCols[0].map((col, i) => runCols.map(row => row[i]));
  return transposedCols;
};

let runs = getRuns();

let getGenerators = function() {
  let genCols = designColumns.map(num => rgJSON["generators"][num.toString()]);
  console.log(genCols)
}

getGenerators();

// let transposedArrays = runArr[0].map((col, i) => runArr.map(row => row[i]));

// console.log(runArr[0].map((col, i) => runArr.map(row => row[i])));

// transposeArrays(runArr);
// create_runs_table = function(columns)
