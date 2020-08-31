var numbers = [7,9,87,42];

var res = numbers.filter(rechazar);

function rechazar(num){
    return num % 2 == 1;
}

console.log(res);


