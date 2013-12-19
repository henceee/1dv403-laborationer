"use strict";

var count = 0;

var Memory = {

    random: [],
    cols: 4,
    rows: 4,

    init: function () {

        Memory.random = RandomGenerator.getPictureArray(4, 4);
        
        for (var i = 0; i < Memory.rows; i += 1) {

            

            var trstring = document.createElement("tr");
            trstring.id = "rad"+(i+1)
            var memorytable = document.getElementById("memorytable");

           for (var j = 0; j < Memory.cols; j += 1) {
               

                var a = document.createElement("a");
                a.id = "piclink"+(j+1);
                a.setAttribute("class", "piclink");
                a.setAttribute("href", "#")

                var img = document.createElement("img");
                img.setAttribute("src", "pics/0.png");

                a.appendChild(img);
                trstring.appendChild(a);

            }
            memorytable.appendChild(trstring);
        }

        var piclinks = document.getElementsByClassName("piclink");

        //console.log(piclinks);
        //console.log(piclinks[0]);
        //console.log(piclinks.length);

        for (var k = 0; k < piclinks.length; k += 1) {

            piclinks[k].onclick = function(e) {

                alert("hej");                
                
            }
        }



        //console.log(memorytable);
          
       
        
        /*var picplace = document.getElementsByClassName("bild");
       
        console.log(picplace);

        
        var linkpicstring = "<a class='piclink' href='#'><img src='pics/0.png' /></a>";

        for (var i = 0; i < picplace.length; i += 1) {

            picplace[i].innerHTML = linkpicstring;
        }

        var piclink = document.getElementsByClassName("piclink");

        
        for (var i = 1; i < piclink.length; i += 1) {

            
            var klick = function (klicked) {

                //var linkpicstring = "<a class='piclink' href='#'>";

                //linkpicstring += "<img src='pics/" + Memory.random[0][i] + ".png' /></a>";

                //Testar onclick bara
                var linkpicstring = "<a class='piclink' href='#'><img src='pics/1.png' /></a>";

                klicked.innerHTML = linkpicstring;

                ////Koppla till random arrayen på nåt vis? 

               

            }

            piclink[i].onclick = function() {
                 
                //this, alltså den länk som klickas sparas i variablen that.

                var that = this;

                //anropar funktionen klick med variablen that som argument.

                klick(that);
                                
            }

            
           
        }*/

    },

   
};

window.onload = Memory.init;












//var a = document.createElement("a");

//a.innerHTML 

//a.setAttribute("href", "#");

//var pic = document.createElement("img");

//pic.setAttribute("src", "../pics/0.png");


//picplace[i].appendChild(a);