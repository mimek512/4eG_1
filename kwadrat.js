function obwod(){
    let numer = document.getElementById('numer').value;
    let wynik = document.getElementById('wynik');
    if (isEmpty(numer) || isNaN(numer)){
        alert ('należy podać odpowiednią wartość');
    }
    else{
        wynik.innerHTML=`Obw = 4a = ${4*numer}`; 
    }
}

function pole(){
    let numer = document.getElementById('numer').value;
    let wynik = document.getElementById('wynik');
    if (isEmpty(numer) || isNaN(numer)){
        alert ('należy podać odpowiednią wartość');
    }
    else{
        wynik.innerHTML=`P = a<sup>2</sup> = ${numer*numer}`; 
    }
}
function isEmpty(str){
    return !str || str.length == 0;
}