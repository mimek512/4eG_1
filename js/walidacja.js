function check(){
    let lastName= document.getElementById('lastName');
    let mail = document.getElementById('mail');
    let age = document.getElementById('age');

    if(lastName.value.length < 3){
        lastName.classList.add('error');
        document.getElementById("lastnameerror").innerHTML="Za krótkie nazwisko";
    }
    else{
        lastName.classList.remove('error');
        document.getElementById("lastnameerror").innerHTML="";
    }

    if(mail.value.indexOf('@') == -1)
    {
        mail.classList.add('error');
        document.getElementById('mailerror').innerHTML="Brak adresu";
    }
    else 
    {
        mail.classList.remove('error');
        document.getElementById('mailerror').innerHTML="";
    }

    if (age.value > 110){
        age.classList.add('error');
        document.getElementById('ageError').innerHTML = "wiek musi być mniejszy od 110";
    }
    else if (age.value <13){
        age.classList.add('error');
        document.getElementById('ageError').innerHTML = "Wiek musi być większy od 13";
    }
    else{
        age.classList.remove('error');
        document.getElementById('ageError').innerHTML = " ";

    }
    document.getElementById('result');
    if(age.classList.contains('error') || mail.classList.contains('error') || lastName.classList.contains('error')){
        result.innerHTML="Jest źle";
    }
    else{
        result.innerHTML=`nazwisko: ${lastName.value}`;
    }

}
