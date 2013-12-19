"use strict";

var count = 0;
var piccounter = 0;

var Memory = {

    random: [],
    cols: 4,
    rows: 4,
    checkArray: [],

    init: function () {

        

        Memory.random = RandomGenerator.getPictureArray(4, 4);
        
        Memory.renderRows();

       
    },

    renderRows: function () {
        var memorytable = document.getElementById("memorytable");

        memorytable.innerHTML = "";

        for (var i = 0; i < Memory.rows; i += 1) {
                        
            var trstring = document.createElement("tr");
            trstring.id = "rad" + (i + 1)
            var memorytable = document.getElementById("memorytable");


            for (var j = 0; j < Memory.cols; j += 1) {
                
                Memory.renderImages(piccounter, trstring);
                piccounter += 1;

            }
            memorytable.appendChild(trstring);
        }
    },

    renderImages: function(id, trstring){
        //console.log(id);
        var a = document.createElement("a");
        a.id = id;
        a.setAttribute("class", "piclink");
        a.setAttribute("href", "#")              
        var img = document.createElement("img");
        img.setAttribute("src", "pics/0.png");
        a.appendChild(img);
        trstring.appendChild(a);

        //console.log(trstring);
        //console.log(id);

        

        a.onclick = function (e) {
            e.preventDefault();
            Memory.flip(Memory.random[id], this);

            count += 1;
            //console.log(count);
        }
    
    },

   
    flip: function (id, clickedATag) {

       
        var clickedImg = clickedATag.getElementsByTagName("img")[0];

        clickedImg.setAttribute("src", "pics/" + id + ".png");

        Memory.checkArray.push(clickedImg);
        

        Memory.flipback();
                
                
    },

    flipback: function () {

        console.log(Memory.checkArray[0]);
        console.log(Memory.checkArray[1]);
        console.log(Memory.checkArray.length);
                
        if (Memory.checkArray.length == 2 && Memory.checkArray[0] != Memory.checkArray[1]) {
        
                       
            Memory.checkArray[0].setAttribute("src", "pics/0.png");
            Memory.checkArray[1].setAttribute("src", "pics/0.png");
            
            Memory.checkArray.length = 0;

            console.log(Memory.checkArray.length);
                        
        }

       
    }
   
};

window.onload = Memory.init;














