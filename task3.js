function phanTu(a,b){ //Ham dua ra phan tu lon nhat thu may
    return a[b-1];
}

var array = [1,7,32,4,5];

array.sort(function(a,b){ //Sap xep mang
    return b-a;
});

console.log("So lon thu hai la: " + phanTu(array,2));
console.log("So lon thu ba la: " + phanTu(array,3));