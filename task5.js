function Fibonacci(n){
    if (n==0){
        return 0;
    }
    if (n==1 || n==2){
        return 1;
    }
    return Fibonacci(n-2) + Fibonacci(n-1);
}

var n = 9;
var b = [];

for (var i=0; i<=n; i++){
    b.push(Fibonacci(i));
}

console.log(b);
