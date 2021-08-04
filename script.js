var nom = document.getElementById("nom");
nom.addEventListener('change',function(e){
    var reg=/[0-9]/.test(nom.value);
    if (!reg) {
        tel.style.border='2px solid limegreen';
        div.innerHTML='';
        c=true;
    } else {
        tel.style.border='2px solid red';
        div.innerHTML="errreur ce champ ne doit pas contenir des chiffres";
        div.style.color='red';
        c=false
    }
    e.target.parentElement.appendChild(div);
});
var prenom = document.getElementById("prenom");
prenom.addEventListener('change',function(e){
    var reg=/[0-9]/.test(prenom.value);
    if (!reg) {
        tel.style.border='2px solid limegreen';
        div.innerHTML='';
        c=true;
    } else {
        tel.style.border='2px solid red';
        div.innerHTML="errreur ce champ ne doit pas contenir des chiffres";
        div.style.color='red';
        c=false
    }
    e.target.parentElement.appendChild(div);
});
var email= document.getElementById('email');
email.addEventListener('change',function(e){
    var espace=/[;:,.]/.test(tel.value);
    var reg=/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i.test(email.value);
    if (reg) {
        email.style.border='2px solid limegreen';
        div.innerHTML='';
        d=true;
    } else {
        email.style.border='2px solid red';
        div.innerHTML="errer adresse email incorrect";
        div.style.color='red';
        d=false;

    }
    e.target.parentElement.appendChild(div);
  //fin de verification du champ nom  
});