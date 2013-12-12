"use strict";

//MessageBoard ett objekt, inneh�llande messages arrayen som inneh�ller alla meddelanden; init som k�rs n�r sidan laddas, renderMessages som renderar alla meddelande (tar bort, loopar igenom,
// anropar renderMessage (OBS singular!).

var MessageBoard = {

    messages: [],
    init: function () {

        
        var p = document.querySelector("#value");
        var msgstring = document.querySelector("#msg");
        var write = document.querySelector("#write");

        //Om man tycker man trycker enter blir det som att man klicka p� "skriv" (write.onclick)

        msgstring.onkeyup = function (e) {
                        
           
            if (!e.shiftKey && e.which == 13) {
                write.click();
                return false;
            }

        }
              

        // L�gger in en p-tag i div-en med id count. Skriver ut antal medd.

        var counter = document.querySelector("#count");
                
        var countertext = document.createElement("p");
                                
        countertext.innerHTML = ("Antal meddelande: " + MessageBoard.messages.length);
             
        counter.appendChild(countertext);

        
        //Om man klickar p� "skriv" knappen (med id write) pushas meddelandet in i messages arrayen.

        write.onclick = function () {

            var input = msgstring.value;                      

            var mess = new Message(input, new Date());
            
            MessageBoard.messages.push(mess);

            countertext.innerHTML = "";
                
            var counter = document.querySelector("#count");
            counter.innerHTML = ("Antal meddelande: " + MessageBoard.messages.length);
           
            MessageBoard.renderMessages();
            

            
        }

        
    },

    renderMessages: function () {

        //Ta bort alla meddelande

        var present = document.querySelector("#present").innerHTML = "";

        //rendera alla med.

        for (var i = 0; i < MessageBoard.messages.length; ++i) {

            MessageBoard.renderMessage(i);

            //kallar p� renderMessage som renderar alla meddelanden
        }

    },

    renderMessage: function (MessageID) {
       
        //L�gger in en p-tag med meddelandet.

        var text = document.createElement("p");
                
        text.innerHTML = MessageBoard.messages[MessageID].getHTMLText();

        var present = document.querySelector("#present");

        //L�gger in en p-tag med datumst�mplen.

        var dateText = document.createElement("p");
        
        var mezzdate = MessageBoard.messages[MessageID].getDate();

        var mezzdateinner = mezzdate.getUTCHours() + ":" + mezzdate.getUTCMinutes() +":" + mezzdate.getUTCSeconds();

        dateText.innerHTML = mezzdateinner;
        
        present.appendChild(text);
        present.appendChild(dateText);


        //skapar en radera-knapp, med MessageID som id, remove som klassnamn.

        var removebutton = document.createElement("button");

        removebutton.setAttribute("value", "Radera");
        removebutton.id = MessageID;
        removebutton.className = "remove";
        
        present.appendChild(removebutton);

        //l�gger in alla med klassnamnet remove i en variabel, loopar igenom dem som en array och l�gger p� en onclick p� dem.

        var remelements = document.getElementsByClassName("remove");
        

        for (var i = 0; i < remelements.length; i += 1) {
            remelements[i].onclick = function () {

                var result = confirm("Vill du verkligen radera meddelandet?");

                //Om anv�ndaren klickar p� "OK" g�rs en splice p� Messages-arrayen. Countern uppdateras.

                if (result == true) {

                    
                    var mid = this.getAttribute("id");
                    MessageBoard.messages.splice(mid, 1);
                    MessageBoard.renderMessages();

                    var counter = document.querySelector("#count");

                    counter.innerHTML = "";

                    var countertext = document.createElement("p");


                    countertext.innerHTML = ("Antal meddelande: " + MessageBoard.messages.length);

                    counter.appendChild(countertext);



                }

                if (result == false) {

                    // ...Klickar anv�ndaren p� "cancel" h�nder ingeting alls.

                }

                
            }
        }
        
        //Vi �r fortfarande i rendermessages!! Skapar en datum-knapp, med klassnamn date.
                        
        var datebutton = document.createElement("button");
        
        datebutton.setAttribute("value", "Datum");
        
        datebutton.className = "date";
        present.appendChild(datebutton);

            //l�gger in alla med klassnamn date i en variabel. Loopar igenom som array. L�gger p� en oncklick. En alertruta kommer upp med datum. (datumet formaterat i getDateText() funktionen i Message.js)

            var dateelements = document.getElementsByClassName("date");

            for (var i = 0; i < dateelements.length; i += 1) {

                dateelements[i].onclick = function () {
                   
                    var date = MessageBoard.messages[MessageID].getDateText();

                    alert(date);
                    
                    
                }


            }

        }
               
    

};

window.onload = MessageBoard.init;





