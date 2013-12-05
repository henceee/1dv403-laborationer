var MessageBoard = {

    messages: [],
    init: function () {

        

        var p = document.querySelector("#value");
        var msgstring = document.querySelector("#msg");
        var write = document.querySelector("#write");

        var countertext = document.createElement("p");

        countertext.innerHTML = ("Antal meddelande: " + MessageBoard.messages.length);
        
        var counter = document.querySelector("#count");

        counter.appendChild(countertext);

             


        write.onclick = function () {

            var input = msgstring.value;
 

            var mess = new Message(input, new Date());
            
            
            MessageBoard.messages.push(mess);

            counter = document.createElement("p");

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

        var removetext = document.createTextNode("Radera");

        removebutton.appendChild(removetext);

        present.appendChild(removebutton);

        var datebutton = document.createElement("button");

        var datetext = document.createTextNode("Tid");

        datebutton.appendChild(datetext);

        present.appendChild(datebutton);
        
         
    }

    
    

};

window.onload = MessageBoard.init;





