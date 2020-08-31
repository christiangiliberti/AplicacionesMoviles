var numbers = [7,9,25,42];

var even=function(num){
var par=0;
for(var i of num){
    if (i % 2 == 0){
        par++;
    }
}
console.log(par)
}

console.log(even(numbers));

