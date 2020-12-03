function deleteCol(a,cotCanXoa){
    m=1;
    while(cotCanXoa.length!=0){
        for (i=0; i<a.length; i++){
           a[i].splice(cotCanXoa[0]-m,1)
        }
        cotCanXoa.shift();
        m++;
    }
    return a;
}

function deleteRow(a,dongCanXoa){
    m = 1;
    while (dongCanXoa.length!=0){
        a.splice(dongCanXoa[0]-m,1);
        dongCanXoa.shift();
        m++;
    }
    return a;
}

var a = [
    [0, 1, 2, 3, 4],
    [4, 3, 2, 1, 0],
    [5, 6, 7, 8, 9]
];


var dongCanXoa = [1,3]; //Xoa dong 1 va dong 3

deleteRow(a,dongCanXoa);

var cotCanXoa = [2,3]; //Xoa cot 2 va cot 3

deleteCol(a,cotCanXoa);

console.log(a);
