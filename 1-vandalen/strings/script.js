"use strict";

var strobj, replaceA, reg;

window.onload = function(){

	// I denna funktion ska du skriva koden för att hantera "spelet"
	var convertString = function(str){
		// Plats för förändring.		
		// Returnera den konverterade strängen.
		// Vid fel, kasta ett undantag med ett meddelande till användaren. 
	    
	  
	    try{
	    
	    strobj = new String(str);
	   
    	    if(str === ""){
    	        
    	        
    	        throw new Error();
    	        
    	    }
	        
	    }
        
       
  
        catch (e) {
        
            alert("Du glömde skriva i något!");
        
        }
        
    	
	    
	    
	    replaceA = str.replace(/a/gi,'#');
	    
	   
	    var nustr = new String(); // nustr läses som new string, vill inte använda reserverade orden.
	    
	    for (var i=0; i < replaceA.length; i++){
	        
	            
	        if(replaceA[i] === replaceA[i].toLowerCase()){
	            console.log(replaceA[i]);
	            nustr += replaceA[i].toUpperCase();
	        }
	        
	        else if(replaceA[i] === replaceA[i].toUpperCase()){
	            console.log(replaceA[i]);
	            nustr += replaceA[i].toLowerCase();
	        }
	        
	        console.log(nustr);
	    }
	    
	    
	    
	    
	    return nustr;
	    




	};
	// ------------------------------------------------------------------------------


	// Kod för att hantera utskrift och inmatning. Denna ska du inte behöva förändra
	var p = document.querySelector("#value"); // Referens till DOM-noden med id="#value"
	var input = document.querySelector("#string");
	var submit = document.querySelector("#send");

	// Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.
	submit.addEventListener("click", function(e){
		e.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.

		p.classList.remove( "error");

		try {
			var answer = convertString(input.value) // Läser in texten från textrutan och skickar till funktionen "convertString"
			p.innerHTML = answer;		// Skriver ut texten från arrayen som skapats i funktionen.	
		} catch (error){
			p.classList.add( "error"); // Växla CSS-klass, IE10+
			p.innerHTML = error.message;
		}
	
	});



};