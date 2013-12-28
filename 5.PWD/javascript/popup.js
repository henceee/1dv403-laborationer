"use strict"



//img.onclick



var popup = {
    
    onclick: function() {
    
        var toolbar = document.getElementById("toolbar");

        console.log(toolbar);

        var img = toolbar.getElementsByTagName("IMG")[0];

        console.log(img);

        img.onclick = function (e) {

            //e.preventDefault();

            popup.popupwin();

        }
        
    },

    popupwin: function () {


        var body = document.getElementsByTagName("body")[0];

        console.log(body);


        //skapar popupfönstret
        var popupdiv = document.createElement("DIV");

        popupdiv.id = "popupdiv";

        //skapar fönstrets info-rad, där en bild, titeln på fönstret och en stängknapp ska ligga.

        var wintop = document.createElement("DIV");

        wintop.id = "popuptop";
        //skapar en div där en bild ska läggas in och lägger in den i info-radens div.

        var winpicdiv = document.createElement("DIV");

        winpicdiv.id = "popuppicdiv";

        var winpic = document.createElement("IMG");

        winpic.setAttribute("src", "pics/PenguinsSmall.jpg");
        
        winpic.id = "popuppic";

        winpicdiv.appendChild(winpic);

        wintop.appendChild(winpicdiv);

       
        //skapar en div där en titeln ska läggas in.

        var wintextdiv = document.createElement("DIV");

        //skapar en p-tag med texten "ImageViewer" och lägger in den info-radens div.

        var winptag = document.createElement("P");

        winptag.id="popuptextdiv"

        winptag.innerHTML = "Image Viewer";

        wintextdiv.appendChild(winptag);

        wintop.appendChild(wintextdiv);

        //skapar en stäng-knapp och lägger in den i info-radens div.

        var closebuttondiv = document.createElement("DIV");

        closebuttondiv.id = "closebuttondiv";

        var closebutton = document.createElement("button");

        closebutton.innerHTML = "x";

        closebuttondiv.appendChild(closebutton);

        wintop.appendChild(closebuttondiv);

        //lägger in wintop-diven i popupfönstrets div.

        popupdiv.appendChild(wintop);
        
        //lägger in popup-diven i body

        body.appendChild(popupdiv);


        //sätter en onclick funktion till stäng-knappen som tar bort diven

        closebutton.onclick = function () {

            document.body.removeChild(popupdiv);

        }

    }


};

window.onload = popup.onclick;
