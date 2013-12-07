var MessageBoard = {

    messages: [],
    init: function () {

        
        var p = document.querySelector("#value");
        var msgstring = document.querySelector("#msg");
        var write = document.querySelector("#write");

        var counter = document.querySelector("#count");

        var countertext = document.createElement("p");
                                
        countertext.innerHTML = ("Antal meddelande: " + MessageBoard.messages.length);
             
        counter.appendChild(countertext);

        


        write.onclick = function () {

            var input = msgstring.value;                      

            var mess = new Message(input, new Date());
            
            
            MessageBoard.messages.push(mess);

            //console.log(MessageBoard.messages);

            
            countertext.innerHTML = "";

            countertext.innerHTML = ("Antal meddelande: " + MessageBoard.messages.length);

            var counter = document.querySelector("#count");

            counter.appendChild(countertext);

            MessageBoard.renderMessages();
            

            
        }

        
    },

    renderMessages: function () {

        //Ta bort alla meddelande

        var present = document.querySelector("#present").innerHTML = "";

        //rendera alla med.

        for (var i = 0; i < MessageBoard.messages.length; ++i) {

            MessageBoard.renderMessage(i);
        }

    },

    renderMessage: function (MessageID) {

        
        var text = document.createElement("p");
                
        text.innerHTML = MessageBoard.messages[MessageID].getHTMLText();

        var present = document.querySelector("#present");

        present.appendChild(text);


        var removebutton = document.createElement("button");

        removebutton.setAttribute("value", "Radera");
                
        removebutton.className = "remove-" + MessageID;
        
        present.appendChild(removebutton);


        var remelements = document.getElementsByClassName("remove-" + MessageID);

        
        for (var i = 0; i < remelements.length; i += 1) {

            remelements[i].onclick = function () {

                MessageBoard.messages.splice(i, 1);

                MessageBoard.renderMessages();

                // Återställa räknare?? Blir fel med MessageID eller? Kan ej ta bort flera.. Om bara ett meddelande kvar.
            }
                
            }
                        
            var datebutton = document.createElement("button");

            datebutton.setAttribute("value", "Datum");

            datebutton.className = "date-" + MessageID;
            
            present.appendChild(datebutton);

            var dateelements = document.getElementsByClassName("date-" + MessageID);

            for (var i = 0; i < dateelements.length; i += 1) {

                dateelements[i].onclick = function () {

                    //alert(MessageBoard.messages[i].getDate());

                }

            }

        }
               
    

};

window.onload = MessageBoard.init;





