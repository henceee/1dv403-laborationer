
var MessageBoard = {

    messages: [],
    init: function(){
        var p = document.querySelector("#value");
        var msgstring = document.querySelector("#msg");
        var write = document.querySelector("#write");
        var present = document.querySelector("#present");

        console.log(present);


        write.onclick = function () {
            var text = msgstring.value;
 

            var mess = new Message(text, new Date());

            console.log(mess.getText());

            console.log(MessageBoard.messages.length);
            MessageBoard.messages.push(mess);
            console.log(MessageBoard.messages.length);

            present.innerHTML = "";

            

           
        }
    
    }

};
window.onload = MessageBoard.init;


/*window.onload = function () {

    

    var MessageBoard = {
        
        messages: [],


        init: function (text) {

            console.log(text);
            var mess = new Message((text), new Date());

            MessageBoard.messages.push(mess);
 
        }

            
    };


    
    
    

    var p = document.querySelector("#value");
    var msgstring = document.querySelector("#message");
    var write = document.querySelector("#write");

    write.addEventListener("click", MessageBoard.init(msgstring.value), false);

    console.log(MessageBoard.messages[0]);*/



    //------------------------STR�NGAR--------------------------------------------------------------s
    //// Kod f�r att hantera utskrift och inmatning. Denna ska du inte beh�va f�r�ndra
    //var p = document.querySelector("#value"); // Referens till DOM-noden med id="#value"
    //var input = document.querySelector("#string");
    //var submit = document.querySelector("#send");

    //// Vi kopplar en eventhanterare till formul�rets skickaknapp som k�r en anonym funktion.
    //submit.addEventListener("click", function(e){
    //    e.preventDefault(); // Hindra formul�ret fr�n att skickas till servern. Vi hanterar allt p� klienten.

    //    p.classList.remove( "error");

    //    try {
    //        var answer = convertString(input.value) // L�ser in texten fr�n textrutan och skickar till funktionen "convertString"
    //        p.innerHTML = answer;		// Skriver ut texten fr�n arrayen som skapats i funktionen.	
    //    } catch (error){
    //        p.classList.add( "error"); // V�xla CSS-klass, IE10+
    //        p.innerHTML = error.message;
    //    }
    //------------------------------STR�NGAR INDEX -------------------------------------------------
    //<h1>Str�ngomvandling</h1>
    //    <a href="../index.html"><--- Tillbaka</a>
 	//	<form>
 	//		<input type="text" id="string" /> <input id="send" type="submit" value="omvandla..." />
 	//		<p id="value"></p>
	//	</form>       
    
    //------------------------------------ MIN INDEX -----------------------------------------------

    //    <div id="message">
    //       <form>       
    //           <textarea name="message" cols="100" rows="10"
    //    id="msg">
    //    </textarea>
    //    <input id="write" type="submit" name="Submit" value="Skriv">
    //    <p id="value"></p>
    //</form>
    //</div>
            
    
//};