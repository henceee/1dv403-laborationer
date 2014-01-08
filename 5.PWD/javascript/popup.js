"use strict"


var popup = {
    
    
    onclick: function() {
            
        //h�mtar ut "toolbar"-diven 

        var toolbar = document.getElementById("toolbar");

        //H�mtar ut bilden via img tagen

        var img = toolbar.getElementsByTagName("IMG")[0];


        //Onclick till bilden p� desktopens "toolbar" (l�ngst ner). G�r en prevent default, anropar popupwin funktionen.

        img.onclick = function (e) {

            e.preventDefault();

            popup.popupwin();

        }
        
    },

    popupwin: function () {

        //h�mtar ut body-tagen
        var body = document.getElementsByTagName("body")[0];

        //skapar popupf�nstret
        var popupdiv = document.createElement("DIV");

        popupdiv.id = "popupdiv";
        
        //skapar f�nstrets info-rad, d�r en bild, titeln p� f�nstret och en st�ngknapp ska ligga.

        var wintop = document.createElement("DIV");
        wintop.id = "popuptop";


        //skapar en div d�r en bild ska till popupf�nstrets inforad (l�ngst upp). L�gger in den i infobarens div-tag.

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

        var closebutton = document.createElement("input");
        
        closebutton.setAttribute("type", "button");

        closebutton.setAttribute("value", "x");

        closebuttondiv.appendChild(closebutton);

        wintop.appendChild(closebuttondiv);


        //l�gger in wintop-diven i popupf�nstrets div.

        popupdiv.appendChild(wintop);

                
        //l�gger in en div f�r bild-content

        var contentdiv = document.createElement("div");

        contentdiv.id = "contentdiv";

        popupdiv.appendChild(contentdiv);

        //l�gger in en div f�r laddnings-info, "d�per" den (ID) till winbottom

        var contentdiv = document.createElement("div");

        contentdiv.id = "winbottom";

        popupdiv.appendChild(contentdiv);



        //l�gger in popup-diven i body

        body.appendChild(popupdiv);
        
        //s�tter en onclick funktion till st�ng-knappen som tar bort diven

        closebutton.onclick = function () {

            document.body.removeChild(popupdiv);

            
        }

            var bottom = document.getElementById("winbottom");

            var loadingpic = document.createElement("img");

            loadingpic.setAttribute("src", "pics/ajax-loader.gif");
            
            loadingpic.id = "loadingpic";

            bottom.appendChild(loadingpic);

            setTimeout(function () {popup.getInfo(); }, 3000);

    },

    getInfo: function () {

        var bottom = document.getElementById("winbottom");
        var loadinpic = document.getElementById("loadingpic");
        bottom.removeChild(loadinpic);
        
        //h�mtar ut l�nken runt bilden p� desktopens "toolbar", som inneh�ller ajax-l�nken

        var ajax = document.getElementById("ajax");

        var url = ajax.getAttribute("href");

        //Skapar ett XMLHttpRequest, �ppnar och skickar.

        var xhr = null;
        try {
            xhr = new XMLHttpRequest();
        } catch (error) {
            try {
                xhr = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (error) {
                throw new Error("No XHR object available");
            }
        }

        xhr.open("get", url, false);
        xhr.send(null);

        if (xhr.readyState == 4) {

            //om inget g�tt fel, tolka det som skickas tillbaks med JSON.

            if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
                

                var parsed = JSON.parse(xhr.responseText);
            }
                //annars skrivs felet ut.

            else {
                console.log("L�sfel, status:" + xhr.status);
            }
        }
               
        popup.appendimg(parsed);
        
    },

    appendimg: function (parsed) {

        //Skapar en div till bilderna, med ID 0 (nollbaserat)

        var imgbox = document.createElement("div");

        imgbox.className = "imgbox";

        imgbox.id = "imgbox0";

        var boxwidth = [];
        var boxheight = [];

        //loopar igenom parsed arrayen och l�gger till alla bredder och h�jder i boxwidth resp. boxheight arrayen.

        for (var h = 0; h < parsed.length; h += 1) {

            boxwidth.push(parsed[h].thumbWidth);
            boxheight.push(parsed[h].thumbHeight);
        }

        //sorterar dem i storleksordning

        boxwidth.sort();
        boxheight.sort();        

        //snor den sista i den sorterade arrayen (den st�rsta h�jden resp. bredden) och l�gger till 20px och s�tter det som storlek p� samtliga divar runt bilderna.

        imgbox.style.width = boxwidth.pop() + 20 + "px";
        imgbox.style.height = boxheight.pop() + 20 + "px";

        //h�mtar ut contentdiven d�r bilderna ska l�ggas in.

        var contentdiv = document.getElementById("contentdiv");

        contentdiv.appendChild(imgbox);

        for (var i = 0; i < parsed.length - 2; i += 1) {

            //klonar bild-diven (imgbox) och s�tter id till i+1 (finns redan en med ID 0, s� b�rjar fr�n 1)

            var cloneimgbox = contentdiv.appendChild(imgbox.cloneNode());

            cloneimgbox.id = "imgbox" + (i + 1);

           //h�mtar ut alla boxar med samma klassnamn....

            var boxes = document.getElementsByClassName("imgbox");

            
        }

        //...och loopar igenom dem.

        for (var j = 0; j < boxes.length; j += 1) {


            //Skapar en img tagg, s�tter src, h�jd och bredd utifr�n respektive egenskap fr�n respektive objekt i arrayen parsed

            var images = document.createElement("img");

            images.setAttribute("src", parsed[j].URL);

            images.style.height = parsed[j].thumbHeight;

            images.style.width = parsed[j].thumbWidth;

            //justerar marginaler efter storlek p� bilden, snyggare s� =)

            if (parsed[j].thumbWidth === 75) {

                images.style.marginLeft = "10%";
                images.style.padding = "0px";
            }

            if (parsed[j].thumbWidth === 67 || parsed[j].thumbWidth === 66) {

                images.style.marginLeft = "15%";
                images.style.padding = "0px";
            }

            if (parsed[j].thumbWidth === 33 || parsed[j].thumbWidth === 35) {

                images.style.marginLeft = "35%";
                images.style.padding = "0px";
            }


            //s�tter en onklick p� bilderna, vid klick s�tts bakgrunden till den klickade bildens (this) src. 

            images.onclick = function () {

                var hutml = document.getElementsByTagName("html")[0];

                console.log(hutml);

                hutml.style.background = "url("+ this.getAttribute("src")+")";

            }

            
            if (j <= 19) { boxes[j].appendChild(images); } 
       
        }
        
    }


};

window.onload = popup.onclick;
