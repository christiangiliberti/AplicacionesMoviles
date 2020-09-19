var numbers = [7,9,87,42];


function even (n){
    if (n % 2 == 1){
        return true;
    }
}
function rechazar (n,a){
    return a.filter(n=>even(n));
    }


console.log(rechazar(even,numbers));
