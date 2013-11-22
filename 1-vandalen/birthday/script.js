"use strict";

var bday, today, daysleft, oneday,yearsold, reg;

window.onload = function(){

	
	var birthday = function(date){
	    
	        
	        
	            try{
	                
	                
	                
	                reg = new RegExp(/^(19|20)[0-9][0-9]-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/);
	                
	                
	               
	                if (!reg.test(date))
                    {
                        throw new Error();
                    }
	                
	            }
	            
	            catch (e) {
        
                alert("Skriv datumet i formatet YYYY-MM-DD");
        
                }
	            
	            
	        
	        
	    
	        //console.log(date);
		

			bday = new Date(date+"T23:59:59");
			
			today = new Date();
			
			oneday = 1000 * 60 * 60 * 24; // millisekunder, sekunder, minuter, timmar
            
            
           
            
            if(bday-today < 0){
 
               bday.setFullYear(today.getFullYear() + 1);
           
                
            }
            
            
           
            
                    
           return Math.floor((bday - today) / oneday);
            
            
            
            
            



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
			var answer = birthday(input.value) // Läser in texten från textrutan och skickar till funktionen "convertString"
			var message;
			switch (answer){
				case 0: message = "Grattis på födelsedagen!";
					break;
				case 1: message = "Du fyller år imorgon!";
					break;
				default: message = "Du fyller år om " + answer + " dagar";
					break;
			}

			p.innerHTML = message;
		} catch (error){
			p.classList.add( "error"); // Växla CSS-klass, IE10+
			p.innerHTML = error.message;
		}
	
	});



};