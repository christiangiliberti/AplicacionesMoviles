var numbers = [7,8,9];

var ele =  8;

var res = numbers.some(contiene);


function contiene(n){
    if(numbers.includes(ele)){
        return true;
      }else{
        return false;
      }
}


console.log(res);
