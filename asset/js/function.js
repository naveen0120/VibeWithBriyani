// cart Incresing

var data = 0;
document.getElementById("cart").innerHTML = data;
function cart() 
{
    data = data + 1;
    document.getElementById("cart").innerHTML = data;
}



// to multiply
function multiplyBriyani()
{
    var a = document.getElementById("inc-dec-one").value
    var b = 210;
    var c = parseInt(a) * parseInt(b);
    document.getElementById("briyani").innerHTML = c;
}


function multiplyStarters()
{
    var d= document.getElementById("inc-dec-two").value
    var e= 190;
    var f = parseInt(d) * parseInt(e);
    document.getElementById("starters").innerHTML = f; 
}

function multiplyJuices()
{
    var m= document.getElementById("inc-dec-three").value
    var n= 80;
    var o = parseInt(m) * parseInt(n);
    document.getElementById("juices").innerHTML = o; 
}

function total()
{
    var v=document.getElementById("briyani").value;
    var w=document.getElementById("starters").value;
    var y=document.getElementById("juices").value;
    z= parseInt(v)+parseInt(w)+parseInt(y);
    document.getElementById('total').innerHTML=z;
}