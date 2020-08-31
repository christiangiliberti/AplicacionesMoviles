var numbers = [8,6,2,4];

var res = numbers.every(aprobo);

function aprobo(num){
    return num >= 4;
}

console.log(res);
