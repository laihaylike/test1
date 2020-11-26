function in_so_sanh(){
    var a = document.getElementById("soa").value;
    var b = document.getElementById("sob").value;

    a = parseInt(a);
    b = parseInt(b);

    var i = '';
    if (a==b){
        i = a + " bang " + b;
    }else if(a>b){
        i = a + " lon hon " + b;
    }else{
        i = a + " nho hon " + b;
    }
    document.getElementById("in").innerHTML = i;
}

function in_chan_le(){
    var a = document.getElementById("soa").value;
    var b = document.getElementById("sob").value;

    a = parseInt(a);
    b = parseInt(b);

    var i = '';
    if (a%2==0 && b%2==0){
        i = a + " va " + b + " la so chan";
    }else if (a%2!=0 && b%2!=0){
        i = a + " va " + b + " la so le";
    }else{
        if (a%2 == 0){
            i = a + " la so chan, " + b + " la so le";
        }else{
            i = a + " la so le, " + b + " la so chan";
        }
    } 
    
    document.getElementById("in").innerHTML = i;
}