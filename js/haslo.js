function sprawdzanie(){
    let haslo = document.getElementById('haslo').value;
    let wynik = document.getElementById('wynik');

    if(haslo.length >= 7 && isDigit(haslo)){
        
        wynik.style.color = 'green';
        wynik.innerHTML = "Dobre";
    }
    else if (haslo.length >= 4 && haslo.length <=6 && isDigit(haslo)){
        wynik.style.color='blue';  
        wynik.innerHTML='Srednie';
    } 
    else if (isEmpty(haslo)) {

        wynik.style.color='red';
        wynik.innerHTML='Wpisz hasło';
    }
    else {
        wynik.style.color='yellow';
        wynik.innerHTML='Słabe';
    }   
}
function isDigit(haslo){
   let reg = /[0-9]/;
   return reg.test(haslo);
    
}

function isEmpty(haslo){
    return !haslo || haslo.length == 0;
}

