var numbers = [1,2,3,4,5];

var res = numbers.some(algunoEsPar);

function algunoEsPar(num){
    return num % 2 == 0;
}

console.log(res);
