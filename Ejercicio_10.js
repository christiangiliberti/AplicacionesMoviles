var numbers = [7,8,9];


function contiene(a,n){
    var res = a.some(numero => numero == n);
    console.log(res);
}


console.log(contiene(numbers,8));
