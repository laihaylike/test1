function evenNumber(value){ //Ham tim phan tu chan
    return (value%2==0 && value>0);
}

function oddNumber(value){ //Ham tim phan tu le
    return (value%2!=0 && value>0);
} 

function negativeNumber(value){ //Ham tim phan tu am
    return value<0;
}

var array = [1,2,3,4,5,6,-1,9,7,5,4,-9];

var filtered1 = array.filter(evenNumber); //Loc phan tu chan
var filtered2 = array.filter(oddNumber); //Loc phan tu le
var filtered3 = array.filter(negativeNumber); //Loc phan tu am
console.log("Số chẵn là: " + filtered1);
console.log("Số lẻ là: " + filtered2);
console.log("Số âm là: " + filtered3);
