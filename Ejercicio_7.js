var numbers = [2,-3,9];

var res = numbers.some(hayAlgunNegativo);

function hayAlgunNegativo(num){
    return num < 0;
}

console.log(res);
