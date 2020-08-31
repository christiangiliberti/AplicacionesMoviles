var numbers = [7,8,9];

var res = numbers.some(contiene);

function contiene(num){
    if(numbers.includes(8)){
        return true;
      }else{
        return false;
      }
}

console.log(res);


/*
var contiene = [7,9,87,42,50];

console.log(contiene.includes(8));
*/

