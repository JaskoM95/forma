
var ime = document.getElementById ('inp1'); 
var kontakt = document.getElementById ('email'); 
var poruka = document.getElementById ('message');
var dugme = document.getElementById ('sendBtn');   

var pns; 

dugme.addEventListener ('click',validacija) ;

function validacija () {
    pns=1;

    

    if (ime.value =="") {

        ime.value = "Ovo polje je obavezno";
        ime.style.color = "red";
        pns=0;

    };
    

   
     if (kontakt.value.indexOf('gmail.com')==-1 && kontakt.value.indexOf ('hotmail.com') ==-1)  { 
        
         
    
        kontakt.value = "Unesite ispravan email!";
        kontakt.style.color = "red";

      
        pns=0;
        
     };

     
    
    

   
    
  


      if(kontakt.value =="") {

        kontakt.value = "Ovo polje je obavezno";
        kontakt.style.color = "red";
        pns=0;
    };



    if (poruka.value == "") {

        poruka.value = "Ovo polje je obavezno";
        poruka.style.color = "red";
        pns=0;
    };
    
    if (pns==1){

        window.location.assign('second.html');
    };




}

ime.addEventListener ('focus',clear) ;
kontakt.addEventListener ('focus',clear) ;
poruka.addEventListener ('focus',clear) ;


function clear () {

     this.value = ""; 
     this.style.color="black";



}