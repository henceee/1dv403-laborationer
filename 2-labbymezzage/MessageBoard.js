"use strict";

var MessageBoard = {

    messages: [],
    init: function () {

        
        var p = document.querySelector("#value");
        var msgstring = document.querySelector("#msg");

        msgstring.onkeyup = function (e) {

            //alert("hej");
            var code = e.keyCode;

            if ((code == 13) && event.shiftKey) {

                msgstring.value.getHTMLText();

            }

            if (code == 13) {

                //MessageBoard.init.write.onclick();

                //koppla till onclick eventet på nåt sätt eller skriva ett helt nytt lika dant event? -.- Bryter ju mot DRY
            }
           
        }
              

        var write = document.querySelector("#write");

        var counter = document.querySelector("#count");

        counter.innerHTML = "";

        var countertext = document.createElement("p");
                                
        countertext.innerHTML = ("Antal meddelande: " + MessageBoard.messages.length);
             
        counter.appendChild(countertext);

        


        write.onclick = function () {

            var input = msgstring.value;                      

            var mess = new Message(input, new Date());
            
            
            MessageBoard.messages.push(mess);

            //console.log(MessageBoard.messages);
            //console.log(countertext.innerHTML);
            countertext.innerHTML = "";
            //console.log(countertext.innerHTML);
            

            var counter = document.querySelector("#count");
            counter.innerHTML = ("Antal meddelande: " + MessageBoard.messages.length);
            //counter.appendChild(countertext);

            MessageBoard.renderMessages();
            

            
        }

        
    },

    renderMessages: function () {

        //Ta bort alla meddelande

        var present = document.querySelector("#present").innerHTML = "";

        //rendera alla med.

        for (var i = 0; i < MessageBoard.messages.length; ++i) {

            MessageBoard.renderMessage(i);

            //kallar på renderMessage som renderar alla meddelanden
        }

    },

    renderMessage: function (MessageID) {
       
        
        var text = document.createElement("p");
                
        text.innerHTML = MessageBoard.messages[MessageID].getHTMLText();

        var present = document.querySelector("#present");

        present.appendChild(text);


        var removebutton = document.createElement("button");

        removebutton.setAttribute("value", "Radera");
        removebutton.id = MessageID;
        removebutton.className = "remove";
        
        present.appendChild(removebutton);


        var remelements = document.getElementsByClassName("remove");
        

        for (var i = 0; i < remelements.length; i += 1) {
            remelements[i].onclick = function () {
                //console.log(this.getAttribute("id"));
                var mid = this.getAttribute("id");
                MessageBoard.messages.splice(mid, 1);
                MessageBoard.renderMessages();

                var counter = document.querySelector("#count");

                counter.innerHTML = "";

                var countertext = document.createElement("p");


                countertext.innerHTML = ("Antal meddelande: " + MessageBoard.messages.length);

                counter.appendChild(countertext);


            }
        }
        
        
                        
        var datebutton = document.createElement("button");
        
        datebutton.setAttribute("value", "Datum");
        //datebutton.id = MessageID;
        datebutton.className = "date";
        present.appendChild(datebutton);

            var dateelements = document.getElementsByClassName("date");

            for (var i = 0; i < dateelements.length; i += 1) {

                dateelements[i].onclick = function () {
                    console.log(MessageBoard.messages[MessageID]);
                    var date = MessageBoard.messages[MessageID].getDateText();

                    alert(date);


                }

            }

        }
               
    

};

window.onload = MessageBoard.init;





