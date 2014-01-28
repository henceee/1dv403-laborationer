"use strict";

var count = 0;
var piccounter = 0;

var Memory = {

    random: [],
    cols: 4,
    rows: 4,
    checkArray: [],
    clickcheck: 0,

    init: function () {
    
        Memory.random = RandomGenerator.getPictureArray(Memory.cols, Memory.rows);
        
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
        
        var a = document.createElement("a");
        a.id = id;
        a.setAttribute("class", "piclink");
        a.setAttribute("href", "#")              
        var img = document.createElement("img");
        img.setAttribute("src", "pics/0.png");
        a.appendChild(img);
        trstring.appendChild(a);

        a.onclick = function (e) {
            
            if (Memory.clickcheck < 2) {
            
                count += 1;
                e.preventDefault();

                Memory.flip(Memory.random[id], this);
            }
            
            
        }
    
    },
   
    flip: function (id, clickedATag) {
        
        Memory.clickcheck += 1;

        var clickedImg = clickedATag.getElementsByTagName("img")[0];
        clickedImg.setAttribute("src", "pics/" + id + ".png");
        Memory.checkArray.push(clickedImg);
        
       
            switch (Memory.checkArray.length % 2) {

                case 0:
                    setTimeout(function () { Memory.flipback(); }, 1000);
                case 2:
                    setTimeout(function () { Memory.flipback(); }, 1000);


        }

       
                
    },

    
    flipback: function () {
        
                var elm0src = Memory.checkArray[0].getAttribute("src");
                var elm1src = Memory.checkArray[1].getAttribute("src");
                
                if (elm0src !== elm1src) {

                    Memory.checkArray[0].setAttribute("src", "pics/0.png");
                    Memory.checkArray[1].setAttribute("src", "pics/0.png");
                }

                if (elm0src === elm1src) {

                    Memory.checkArray[0].setAttribute("src", elm0src);
                    Memory.checkArray[1].setAttribute("src", elm1src);
                    /*Memory.checkArray[0].parentNode.onclick = null;
                    Memory.checkArray[1].parentNode.onclick = null;*/

                }

                Memory.checkArray.splice(0, 2);
                Memory.clickcheck = 0;
        
        Memory.checkifgameover()
    },

        checkifgameover: function () {
        
            var images = document.querySelectorAll("#memorytable a img");
            var imgagessrc = [];

            for (var k = 0; k < images.length; k += 1) {

                if (images[k].getAttribute("src") !== "pics/0.png") {

                    imgagessrc.push(images[k].getAttribute("src"));
                    
                }

                if (imgagessrc.length === Memory.cols * Memory.rows) {

                    alert("Grattis, du klarade det på " + (count / 2) + " försök");
                    
                }
            }
            
            console.log(count);
            
        }
       
};

window.onload = Memory.init;















