"use strict";

var count = 0;

var Memory = {

    random: [],

    init: function () {

        var randomgen = RandomGenerator.getPictureArray(4, 4);

        Memory.random.push(randomgen);

        console.log(Memory.random);
        
        var picplace = document.getElementsByClassName("bild");
       
        console.log(picplace);

        
        var linkpicstring = "<a class='piclink' href='#'><img src='pics/0.png' /></a>";

        for (var i = 0; i < picplace.length; i += 1) {

            picplace[i].innerHTML = linkpicstring;
        }

        var piclink = document.getElementsByClassName("piclink");

        
        for (var i = 0; i < piclink.length; i += 1) {

            
            var klick = function (klicked) {

                //Testar onclick bara
                var linkpicstring = "<a class='piclink' href='#'><img src='pics/1.png' /></a>";

                klicked.innerHTML = linkpicstring;

                //Koppla till random arrayen på nåt vis? 

               

            }

            piclink[i].onclick = function() {
                 
                //this, alltså den länk som klickas sparas i variablen that.

                var that = this;

                //anropar funktionen klick med variablen that som argument.

                klick(that);
                                
            }

            
           
        }

    },

   
};

window.onload = Memory.init;












//var a = document.createElement("a");

//a.innerHTML 

//a.setAttribute("href", "#");

//var pic = document.createElement("img");

//pic.setAttribute("src", "../pics/0.png");


//picplace[i].appendChild(a);