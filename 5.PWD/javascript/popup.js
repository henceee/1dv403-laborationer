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


        //skapar popupf�nstret
        var popupdiv = document.createElement("DIV");

        popupdiv.id = "popupdiv";

        //skapar f�nstrets info-rad, d�r en bild, titeln p� f�nstret och en st�ngknapp ska ligga.

        var wintop = document.createElement("DIV");

        wintop.id = "popuptop";
        //skapar en div d�r en bild ska l�ggas in och l�gger in den i info-radens div.

        var winpicdiv = document.createElement("DIV");

        winpicdiv.id = "popuppicdiv";

        var winpic = document.createElement("IMG");

        winpic.setAttribute("src", "pics/PenguinsSmall.jpg");
        
        winpic.id = "popuppic";

        winpicdiv.appendChild(winpic);

        wintop.appendChild(winpicdiv);

       
        //skapar en div d�r en titeln ska l�ggas in.

        var wintextdiv = document.createElement("DIV");

        //skapar en p-tag med texten "ImageViewer" och l�gger in den info-radens div.

        var winptag = document.createElement("P");

        winptag.id="popuptextdiv"

        winptag.innerHTML = "Image Viewer";

        wintextdiv.appendChild(winptag);

        wintop.appendChild(wintextdiv);

        //skapar en st�ng-knapp och l�gger in den i info-radens div.

        var closebuttondiv = document.createElement("DIV");

        closebuttondiv.id = "closebuttondiv";

        var closebutton = document.createElement("button");

        closebutton.innerHTML = "x";

        closebuttondiv.appendChild(closebutton);

        wintop.appendChild(closebuttondiv);

        //l�gger in wintop-diven i popupf�nstrets div.

        popupdiv.appendChild(wintop);
        
        //l�gger in popup-diven i body

        body.appendChild(popupdiv);


        //s�tter en onclick funktion till st�ng-knappen som tar bort diven

        closebutton.onclick = function () {

            document.body.removeChild(popupdiv);

        }

    }


};

window.onload = popup.onclick;
