// #region Task 3 - Recursive loops
/**
* 00. Write a script that will compute the amount using UK coins combination
* 0. Amounts are [96, 209, 54, 107, 66]  format is per your preference: £2.48 or 248
* 1. Coins array: [0.01, 0.02, 0.05, 0.1, 0.2, 0.5, 1, 2] or [1, 2, 5, 10, 20, 50, 100, 200]
*/


var remainingAmount = 0;
var coinsArray = [1, 2, 5, 10, 20, 50, 100, 200].reverse();
var combination = []; [200,]
var counter = 0;
var start = new Date();

var changeArr = [96, 209, 54, 107, 66, 12133];


changeArr.forEach(function (e) {
    changeCalc(e);
});


function changeCalc(amount) {
    remainingAmount = amount; 
    if (remainingAmount === 0) {
        console.log(coinPrinter());
        combination = [];
        remainingAmount = 0;
        counter = 0;
        return;
    }
    if (remainingAmount > 0 && remainingAmount >= coinsArray[counter]) { 
        remainingAmount -= coinsArray[counter]; 
        combination.push((coinsArray[counter] / 100).toFixed(2));
    } else {
        counter++;
    }
    changeCalc(remainingAmount);
}

function coinPrinter() {
    return {
        time : new Date()-start,
        result : combination.map(function (c) {
        return '£' + c;
    }) };
}


[10, 2, 4, 9, 5, 6, 8, 11, 23, 34, 54, 12, 13]

// function sort(arr, n)

// } 