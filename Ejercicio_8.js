var numbers = [7,9,25,42];

var p=0;
function even (n){
  for(var i of n){
    if (i % 2 == 0){
        p++;
    }
}
console.log(p);
}


console.log(even(numbers));

