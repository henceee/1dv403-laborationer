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

            if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
                //console.log(xhr.responseText);

                var parsed = JSON.parse(xhr.responseText);
            }
            else {
                console.log("L�sfel, status:" + xhr.status);
            }

        }

        console.log(parsed);

       
        popup.appendimg(parsed);
        
    },

    appendimg: function (parsed) {

        console.log(parsed[0].URL);

        // //detta �r bara ett test tills vidare!!!!

       // var img = document.createElement("IMG");

       // img.setAttribute("src", "pics/Penguins1.jpg");

       // img.id = "img";

       // //h�mtar ut conentdiven

       //var content = document.getElementById("contentdiv");
        
       //content.appendChild(img);

       //var tehimage = document.getElementById("img");

       //tehimage.onclick = function () {

       //    var imgsrc = this.getAttribute("src");

       //    var hutemel = document.getElementsByTagName("HTML")[0];

       //    hutemel.style.background = "url('" + imgsrc + "')";

       //    //hutemel.style.backgroundSize = "cover";
       //}

    }


};

window.onload = popup.onclick;
