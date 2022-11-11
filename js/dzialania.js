function dzialanie(znak){
    let liczba1=parseFloat(document.getElementById("a").value);
    let liczba2=parseFloat(document.getElementById("b").value);
    let wynik=document.getElementById("wynik");
    if(isEmpty(liczba1) || isEmpty(liczba2)){
        alert('uzupelnij obie liczby')
    }
    else{
        switch(znak){
            case '+': wynik.innerHTML=`${liczba1} + ${liczba2} = ${liczba1+liczba2}`;  break; 

            case '-': wynik.innerHTML=`${liczba1} - ${liczba2} = ${liczba1-liczba2}`;  break;

            case '*': wynik.innerHTML=`${liczba1} * ${liczba2} = ${liczba1*liczba2}`;  break;
            
            case '/': if(liczba2==0){
                alert("Nie dziel przez 0!")
            }
            else{
              wynik.innerHTML=`${liczba1} / ${liczba2} = ${liczba1/liczba2}`;  break;  
            }
             
        }
    }
    
}
function isEmpty(str){
    return str.length == 0 || isNaN(str);
}