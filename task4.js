function add(a){
    var b = [];
    var sum = 0;
    for (i=0; i<a.length; i++){
        if (typeof a[i-1] !== 'undefined'){
            sum += a[i-1];
        }
        if (typeof a[i] !== 'undefined'){
            sum += a[i];
        }
        if (typeof a[i+1] !== 'undefined'){
            sum += a[i+1];
        }
        b.push(sum);
        sum=0;
    }
    return b;
}

var a = [4, 0, 1, -2, 3];

console.log(add(a));

