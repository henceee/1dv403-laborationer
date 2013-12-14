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

        
        var linkpicstring = "<a href='#'><img src='pics/0.png' /></a>";

        for (var i = 0; i < picplace.length; i += 1) {

            picplace[i].innerHTML = linkpicstring;
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