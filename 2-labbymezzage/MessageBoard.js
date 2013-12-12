"use strict";

var MessageBoard = {

    messages: [],
    init: function () {

        
        var p = document.querySelector("#value");
        var msgstring = document.querySelector("#msg");
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

            console.log(MessageBoard.messages);
                        
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
                
        removebutton.className = "remove-" + MessageID;
        
        present.appendChild(removebutton);


        var remelements = document.getElementsByClassName("remove-" + MessageID);

        
        for (var i = 0; i < remelements.length; i += 1) {

            remelements[i].onclick = function () {

                MessageBoard.messages.splice(i, 1);

                MessageBoard.renderMessages();

                var counter = document.querySelector("#count");

                counter.innerHTML = "";

                //var countertext = counter.getElementsByTagName("p");
                //Uncaught NotFoundError: An attempt was made to reference a Node in a context where it does not exist. 

                //Använda replacechild? Men kan ju inte få tag i p taggen :(
                

                var countertext = document.createElement("p");

                
                countertext.innerHTML = ("Antal meddelande: " + MessageBoard.messages.length);

                counter.appendChild(countertext);

                                
            }
                
            }
                        
            var datebutton = document.createElement("button");

            datebutton.setAttribute("value", "Datum");

            datebutton.className = "date-" + MessageID;
            
            present.appendChild(datebutton);

            var dateelements = document.getElementsByClassName("date-" + MessageID);

            for (var i = 0; i < dateelements.length; i += 1) {

                dateelements[i].onclick = function () {

                    var date = MessageBoard.messages[MessageID].getDateText();

                    alert(date);



                }

            }

        }
               
    

};

window.onload = MessageBoard.init;





